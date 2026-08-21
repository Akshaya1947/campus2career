const { GoogleGenerativeAI } = require('@google/generative-ai')
const { GEMINI_API_KEY } = require('../config/env')
const MaterialCache = require('../models/MaterialCache')
const { getCuratedMaterials } = require('../data/topicMaterials')

const CANDIDATE_MODELS = [
  'gemini-flash-latest',
  'gemini-1.5-flash-latest',
  'gemini-1.5-pro-latest',
]

// Educational fallback generator when Gemini API is rate-limited, experiencing high demand, or offline
function generateFallbackTutorResponse(userMessage, context = {}) {
  const query = (userMessage || '').toLowerCase()
  const subject = context?.subjectName || 'Computer Science'
  const topic = context?.topicTitle || 'General CS'

  // DBMS / Database
  if (query.includes('database') || query.includes('dbms') || query.includes('sql') || query.includes('nosql')) {
    if (query.includes('quiz')) {
      return `Here is a quiz question on **Database Management Systems (DBMS)**:\n\n**Question:** What does the **ACID** acronym stand for in relational databases, and which property ensures that transactions are completed fully or not at all?\n\n*Drop your answer below to check!*`
    }
    if (query.includes('example') || query.includes('real-world')) {
      return `**Real-World Example of DBMS:**\n\nThink of an **ATM or Banking App** like UPI/PayPal:\n1. When you transfer $50, the database subtracts $50 from your account and adds $50 to your friend's account.\n2. **Atomicity (ACID)** ensures that if the network drops midway, the transaction rolls back so you don't lose your money.\n3. **Concurrency Control** ensures thousands of users can check balances simultaneously without data corruption.`
    }
    return `**Database Management System (DBMS)** is software designed to store, retrieve, manage, and query structured and unstructured data efficiently.\n\n### Key Concepts:\n- **Relational (RDBMS):** Uses structured tables with schemas and SQL (e.g., PostgreSQL, MySQL). Built on ACID compliance for transaction reliability.\n- **NoSQL:** Uses flexible key-value, document, or graph models (e.g., MongoDB, Redis) optimized for high throughput and horizontal scalability.\n- **Core Components:** Query Processor, Storage Engine, Transaction Manager, and Indexing (B-Trees / Hash indexing).\n\nWhat specific part of DBMS would you like to explore (e.g., SQL queries, Normalization, ACID properties, or Indexing)?`
  }

  // Operating Systems
  if (query.includes('os') || query.includes('operating system') || query.includes('process') || query.includes('thread') || query.includes('deadlock')) {
    return `An **Operating System (OS)** acts as an intermediary between computer hardware and the user/applications.\n\n### Core Functions:\n- **Process & Thread Management:** Scheduling CPU time (Round Robin, CFS) and context switching.\n- **Memory Management:** Virtual memory, paging, segmentation, and swap space.\n- **Concurrency & Synchronization:** Mutexes, semaphores, and preventing **Deadlocks** (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait).\n\nWould you like a quiz question, a code example, or an explanation of a specific OS topic?`
  }

  // Data Structures & Algorithms
  if (query.includes('dsa') || query.includes('data structure') || query.includes('tree') || query.includes('graph') || query.includes('array') || query.includes('linked list') || query.includes('sorting')) {
    return `In **Data Structures & Algorithms (DSA)**, choosing the right structure directly determines time and space complexity ($O(n)$):\n\n- **Arrays / Strings:** $O(1)$ random access, $O(n)$ insertion/deletion.\n- **Hash Tables / Maps:** Average $O(1)$ search, insert, delete using hash functions.\n- **Trees (BST, AVL, Red-Black):** $O(\\log n)$ hierarchical search and ordered traversal.\n- **Graphs:** Represent networked relations traversed via BFS (shortest path) or DFS (topological sort, cycles).\n\nWhich data structure or algorithm would you like to practice or implement?`
  }

  // Computer Networks
  if (query.includes('network') || query.includes('tcp') || query.includes('udp') || query.includes('http') || query.includes('dns') || query.includes('ip')) {
    return `**Computer Networks** govern how data packets travel across interconnected devices:\n\n- **OSI & TCP/IP Models:** 7-layer (Application to Physical) and 4-layer network abstractions.\n- **TCP vs UDP:** TCP provides reliable, ordered 3-way handshake delivery with flow control; UDP offers low-latency, connectionless streaming.\n- **HTTP/HTTPS & DNS:** Application layer protocols running over TLS/SSL for secure web data transfer.\n\nWhat networking concept can I clarify for you?`
  }

  // System Design / Web Dev
  if (query.includes('system design') || query.includes('api') || query.includes('microservice') || query.includes('scalability') || query.includes('load balancer') || query.includes('cache')) {
    return `**System Design & Architecture** focuses on building scalable, reliable, and fault-tolerant software:\n\n- **Scalability:** Vertical (scaling up RAM/CPU) vs Horizontal (adding more server nodes).\n- **Load Balancing:** Distributing traffic via Nginx / AWS ALB using algorithms like Round Robin or Least Connections.\n- **Caching:** In-memory caching (Redis / Memcached) to reduce database latency by 90%+.\n- **Message Queues:** Asynchronous processing using Kafka or RabbitMQ.\n\nWhat system design challenge would you like to discuss?`
  }

  // General CS Tutor Response
  return `Great question about **${topic || subject}**! 🚀\n\nWhen exploring **${topic}**, key foundational principles include:\n1. **Core Mechanism:** Understanding how the underlying components interact with memory, CPU, and data storage.\n2. **Practical Application:** Applying this in real-world software engineering to write clean, performant code.\n3. **Interview Relevance:** Knowing trade-offs, edge cases, and time/space complexity.\n\nWould you like me to **explain a specific concept in depth**, give a **real-world code example**, or **quiz you** with a practice question?`
}

// POST /api/ai/chat — Study Buddy chat completion
exports.chat = async (req, res) => {
  try {
    const { messages, context } = req.body

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ message: 'messages array is required.' })
    }

    const lastMessage = messages[messages.length - 1].content

    // If no API key configured, use intelligent fallback tutor
    if (!GEMINI_API_KEY || GEMINI_API_KEY.trim() === '') {
      const fallbackReply = generateFallbackTutorResponse(lastMessage, context)
      return res.json({ reply: fallbackReply })
    }

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

    const rawHistory = messages.slice(0, -1).map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }))

    let history = rawHistory
    while (history.length > 0 && history[0].role === 'model') {
      history = history.slice(1)
    }

    let replyText = null
    let lastError = null

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

    // Try available models with retries and timeout
    for (const modelName of CANDIDATE_MODELS) {
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          const model = genAI.getGenerativeModel({
            model: modelName,
            systemInstruction: systemPrompt,
          })

          const chat = model.startChat({ history })
          
          // Set 12s timeout for AI response
          const responsePromise = chat.sendMessage(lastMessage)
          const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('AI request timed out')), 12000)
          )

          const result = await Promise.race([responsePromise, timeoutPromise])
          replyText = result?.response?.text()
          if (replyText) break
        } catch (err) {
          lastError = err
          console.warn(`Model ${modelName} attempt ${attempt} failed:`, err.message || err)
          // Short backoff before next attempt
          if (attempt === 1) {
            await new Promise(r => setTimeout(r, 1000))
          }
        }
      }
      if (replyText) break
    }

    // If Gemini API is experiencing outages/quota limits, return smart fallback
    if (!replyText) {
      console.warn('Gemini API unavailable, using educational fallback:', lastError?.message)
      replyText = generateFallbackTutorResponse(lastMessage, context)
    }

    res.json({ reply: replyText })
  } catch (error) {
    console.error('AI Chat Error:', error?.message || error)
    const fallbackReply = generateFallbackTutorResponse(
      req.body?.messages?.[req.body?.messages?.length - 1]?.content || '',
      req.body?.context || {}
    )
    res.json({ reply: fallbackReply })
  }
}

// GET /api/materials — Fetch or generate direct, high-quality LeetCode & tutorial links with caching
exports.getMaterials = async (req, res) => {
  const topic = req.query.topic
  if (!topic || typeof topic !== 'string' || !topic.trim()) {
    return res.status(400).json({ message: 'Topic query parameter is required.' })
  }

  const topicKey = topic.toLowerCase().trim()
  const curatedLinks = getCuratedMaterials(topic.trim())

  try {
    // 1. Check MongoDB cache first
    const cached = await MaterialCache.findOne({ topicKey })
    
    // Validate cached links: if they are direct links (not generic search queries), return them
    if (cached && Array.isArray(cached.links) && cached.links.length > 0) {
      const hasGenericSearchLinks = cached.links.some(l => 
        l.url && (l.url.includes('/search/?q=') || l.url.includes('google.com/search') || l.url.includes('search='))
      )

      if (!hasGenericSearchLinks) {
        return res.json({ links: cached.links, cached: true })
      }
    }

    // 2. If we have verified curated direct links in our database, save and return them
    if (curatedLinks && curatedLinks.length > 0) {
      MaterialCache.findOneAndUpdate(
        { topicKey },
        { topicKey, topicTitle: topic.trim(), links: curatedLinks, createdAt: new Date() },
        { upsert: true, new: true }
      ).catch(err => console.warn('Cache write failed:', err.message))

      return res.json({ links: curatedLinks, cached: false })
    }

    // 3. Fallback to Gemini AI generation if topic is novel
    if (GEMINI_API_KEY) {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
      const model = genAI.getGenerativeModel({
        model: 'gemini-flash-latest',
        systemInstruction: 'You are an educational resource API. The user will provide a Computer Science topic. You must return EXACTLY 3 highly relevant and specific URL links about this topic. At least one of these links MUST be a direct link to a specific LeetCode problem (e.g. https://leetcode.com/problems/...). The other links should be high-quality tutorials or articles from trusted sources like geeksforgeeks.org or developer.mozilla.org. Only provide direct links to the specific problem or topic, not search pages. Your entire response MUST be ONLY a valid JSON array of objects with "title", "url", and "platform" string properties.'
      })

      const responsePromise = model.generateContent(`Topic: ${topic.trim()}`)
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Materials request timed out')), 8000)
      )

      const result = await Promise.race([responsePromise, timeoutPromise])
      const text = result?.response?.text() || ''
      const jsonStr = text.replace(/```json/gi, '').replace(/```/gi, '').trim()
      const links = JSON.parse(jsonStr)

      if (Array.isArray(links) && links.length > 0) {
        MaterialCache.findOneAndUpdate(
          { topicKey },
          { topicKey, topicTitle: topic.trim(), links, createdAt: new Date() },
          { upsert: true, new: true }
        ).catch(err => console.warn('Cache write failed:', err.message))

        return res.json({ links, cached: false })
      }
    }

    // 4. Default to curated materials
    res.json({ links: curatedLinks })
  } catch (error) {
    console.error('Material Fetch Error:', error.message)
    res.json({ links: curatedLinks })
  }
}

