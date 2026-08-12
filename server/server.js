require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const { GoogleGenerativeAI } = require('@google/generative-ai')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/campus2career'
const JWT_SECRET = process.env.JWT_SECRET || 'campus2career_super_secret_key_2026'

app.use(cors())
app.use(express.json())

// 1. Mongoose User Schema & Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: 'Student' },
  createdAt: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema)

// JWT Auth Middleware
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided.' })
  }
  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.userId = decoded.userId
    next()
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token.' })
  }
}

// Progress Schema & Model
const progressSchema = new mongoose.Schema({
  userId:          { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subjectSlug:     { type: String, required: true },
  completedTopics: { type: [String], default: [] },
  updatedAt:       { type: Date, default: Date.now },
})
progressSchema.index({ userId: 1, subjectSlug: 1 }, { unique: true })
const Progress = mongoose.model('Progress', progressSchema)

// 2. Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('🍃 Connected successfully to MongoDB:', MONGODB_URI))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err.message))

// 3. API Routes

// Registration Endpoint
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required.' })
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'An account with this email already exists.' })
    }

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({ name, email, passwordHash })
    await newUser.save()

    const token = jwt.sign({ userId: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' })

    res.status(201).json({
      message: 'User registered successfully in MongoDB',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      }
    })
  } catch (error) {
    console.error('Registration Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

// Login Endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' })
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' })
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' })

    res.json({
      message: 'Logged in successfully via MongoDB',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    })
  } catch (error) {
    console.error('Login Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

// GET /api/progress — all subjects' progress for the logged-in user (used by Dashboard)
app.get('/api/progress', verifyToken, async (req, res) => {
  try {
    const records = await Progress.find({ userId: req.userId })
    const progressMap = {}
    records.forEach(r => {
      progressMap[r.subjectSlug] = r.completedTopics
    })
    res.json({ progress: progressMap })
  } catch (error) {
    console.error('Progress GET all Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

// GET /api/progress/:subjectSlug — completed topics for one subject
app.get('/api/progress/:subjectSlug', verifyToken, async (req, res) => {
  try {
    const record = await Progress.findOne({ userId: req.userId, subjectSlug: req.params.subjectSlug })
    res.json({ completedTopics: record ? record.completedTopics : [] })
  } catch (error) {
    console.error('Progress GET Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

// POST /api/progress/:subjectSlug — save (upsert) completed topics for one subject
app.post('/api/progress/:subjectSlug', verifyToken, async (req, res) => {
  try {
    const { completedTopics } = req.body
    if (!Array.isArray(completedTopics)) {
      return res.status(400).json({ message: 'completedTopics must be an array.' })
    }
    await Progress.findOneAndUpdate(
      { userId: req.userId, subjectSlug: req.params.subjectSlug },
      { completedTopics, updatedAt: new Date() },
      { upsert: true, new: true }
    )
    res.json({ message: 'Progress saved successfully.' })
  } catch (error) {
    console.error('Progress POST Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

// ── AI Study Buddy Endpoint ───────────────────────────────────────────────────

const CANDIDATE_MODELS = [
  'gemini-flash-latest',
  'gemini-pro-latest',
  'gemini-2.0-flash-lite',
  'gemini-2.5-flash-lite',
]

app.post('/api/ai/chat', async (req, res) => {
  try {
    const { messages, context } = req.body
    // context: { subjectName, phaseName, topicTitle, subjectDescription }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ message: 'messages array is required.' })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return res.status(503).json({ message: 'AI service not configured. GEMINI_API_KEY missing in .env' })
    }

    const genAI = new GoogleGenerativeAI(apiKey)

    // Build a rich system prompt from subject context
    const systemPrompt = `You are an expert CS tutor and AI Study Buddy for the Campus2Career learning platform.
Your role is to help students understand computer science and engineering topics in a clear, engaging, and practical way.

Current learning context:
- Subject: ${context?.subjectName || 'Computer Science'}
- Description: ${context?.subjectDescription || ''}
- Current Phase: ${context?.phaseName || 'General'}
- Current Topic: ${context?.topicTitle || 'General concepts'}

Guidelines:
1. Always relate explanations to the current subject and topic when possible.
2. Use simple analogies and real-world examples that a student would understand.
3. Keep answers concise but complete — aim for 3-5 sentences unless the question requires more detail.
4. When quizzing the user, ask one question at a time and give feedback on their answer.
5. Encourage the student and be positive and motivating.
6. If asked for a real-world example, give a specific, concrete scenario.
7. Format code snippets with backticks when relevant.
8. Do NOT answer questions unrelated to learning, programming, or computer science.`

    // Build chat history (all messages except the last one)
    // Gemini requires history to always start with role 'user' —
    // strip any leading model/assistant messages (e.g. the local greeting)
    const rawHistory = messages.slice(0, -1).map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }))

    // Drop messages from the front until we hit a 'user' message
    let history = rawHistory
    while (history.length > 0 && history[0].role === 'model') {
      history = history.slice(1)
    }

    const lastMessage = messages[messages.length - 1].content

    // Try candidate models with fallback
    let replyText = null
    let lastError = null

    for (const modelName of CANDIDATE_MODELS) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: systemPrompt,
        })

        const chat = model.startChat({ history })
        const result = await chat.sendMessage(lastMessage)
        replyText = result.response.text()
        if (replyText) break
      } catch (err) {
        lastError = err
        console.warn(`Model ${modelName} failed, trying next...`, err.message)
      }
    }

    if (!replyText) {
      throw lastError || new Error('No AI model responded successfully.')
    }

    res.json({ reply: replyText })
  } catch (error) {
    console.error('AI Chat Error:', error?.message || error)
    res.status(500).json({ message: error?.message || 'AI service error. Please try again.' })
  }
})

// ── Web Scraper Endpoint for Materials ───────────────────────────────────────

app.get('/api/materials', async (req, res) => {
  try {
    const topic = req.query.topic
    if (!topic) {
      return res.status(400).json({ message: 'Topic is required' })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return res.status(503).json({ message: 'AI service not configured.' })
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
      model: 'gemini-flash-latest',
      systemInstruction: 'You are an educational resource API. The user will provide a Computer Science or Software Engineering topic. You must return EXACTLY 3 highly relevant and specific URL links about this topic. At least one of these links MUST be a direct link to a specific LeetCode problem (e.g. https://leetcode.com/problems/...). The other links should be high-quality tutorials or articles from trusted sources like geeksforgeeks.org or developer.mozilla.org. Only provide direct links to the specific problem or topic, not search pages. Your entire response MUST be ONLY a valid JSON array of objects with "title" and "url" string properties. Example: [{"title":"Two Sum - LeetCode", "url":"https://leetcode.com/problems/two-sum/"}, {"title":"Two Pointers Technique - GeeksforGeeks", "url":"https://www.geeksforgeeks.org/two-pointers-technique/"}]'
    })

    const result = await model.generateContent(`Topic: ${topic}`)
    const text = result.response.text()
    
    // Clean and parse JSON
    const jsonStr = text.replace(/```json/gi, '').replace(/```/gi, '').trim()
    const links = JSON.parse(jsonStr)

    res.json({ links })
  } catch (error) {
    console.error('Material Fetch Error:', error.message)
    res.json({
      links: [
        { title: `Read about ${req.query.topic} on GeeksforGeeks`, url: `https://www.geeksforgeeks.org/search/?q=${encodeURIComponent(req.query.topic)}` }
      ]
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', database: 'MongoDB', time: new Date() })
})

app.listen(PORT, () => {
  console.log(`🚀 Campus2Career MongoDB Auth Server running on http://localhost:${PORT}`)
})
