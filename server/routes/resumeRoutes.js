const express = require('express');
const router = express.Router();
const multer = require('multer');
const PDFParser = require('pdf2json');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { GEMINI_API_KEY } = require('../config/env');

// Setup multer for in-memory file storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY || 'dummy-key');

router.post('/analyze', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No resume file uploaded' });
    }

    if (req.file.mimetype !== 'application/pdf') {
      return res.status(400).json({ error: 'Only PDF files are supported' });
    }

    // Parse the PDF using pdf2json
    const resumeText = await new Promise((resolve, reject) => {
      const pdfParser = new PDFParser(null, 1);
      pdfParser.on("pdfParser_dataError", errData => reject(errData.parserError));
      pdfParser.on("pdfParser_dataReady", pdfData => {
        resolve(pdfParser.getRawTextContent());
      });
      pdfParser.parseBuffer(req.file.buffer);
    });

    if (!resumeText || resumeText.trim().length === 0) {
      return res.status(400).json({ error: 'Could not extract text from the PDF' });
    }

    // Get the student's course/branch from the form data
    const course = req.body.course || 'CSE';
    const courseNames = {
      CSE: 'Computer Science & Engineering (CSE)',
      ECE: 'Electronics & Communication Engineering (ECE)',
      EEE: 'Electrical & Electronics Engineering (EEE)',
      ME: 'Mechanical Engineering (ME)',
      CE: 'Civil Engineering (CE)',
      IT: 'Information Technology (IT)',
    };
    const courseFull = courseNames[course] || courseNames.CSE;

    // Call Gemini to analyze the resume
    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });
    
    const prompt = `
      You are an expert ${courseFull} career counselor.
      I will provide you with the text extracted from a student's resume.
      Your task is to analyze it and output a personalized learning roadmap for a ${courseFull} student.
      
      Extract and determine:
      1. 'strengths': The ${course} skills, tools, and concepts they already know based on the resume. Include a brief revision overview for each.
      2. 'areasToImprove': The crucial ${course} skills they are missing that are necessary for a standard ${courseFull} role. For each, provide a detailed explanation of why it's important and how to prepare for it.

      Return the result ONLY as a valid JSON object matching this schema:
      {
        "strengths": [
          {
            "skill": "Skill Name",
            "revisionOverview": "A brief recap/overview to help them revise."
          }
        ],
        "areasToImprove": [
          {
            "skill": "Skill Name",
            "importance": "Why this is necessary for a ${course} role.",
            "preparationGuide": "Detailed steps on how to learn and prepare for this."
          }
        ]
      }
      
      Do not include markdown blocks like \`\`\`json. Just return the raw JSON.

      Resume Text:
      """
      ${resumeText}
      """
    `;

    const result = await model.generateContent(prompt);
    let responseText = result.response.text();
    
    // Clean up potential markdown formatting from Gemini
    responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    try {
      const parsedData = JSON.parse(responseText);
      res.json(parsedData);
    } catch (parseError) {
      console.error("Failed to parse Gemini response as JSON:", responseText);
      res.status(500).json({ error: 'Failed to process AI response correctly.' });
    }

  } catch (error) {
    console.error('Error analyzing resume:', error);
    res.status(500).json({ error: 'An error occurred while analyzing the resume.', details: error.message, stack: error.stack });
  }
});

module.exports = router;
