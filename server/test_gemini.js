require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testGemini() {
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: 'gemini-flash-latest',
    systemInstruction: 'You are an educational resource API. The user will provide a Computer Science or Software Engineering topic. You must return EXACTLY 3 highly relevant and specific URL links to tutorials or articles about this topic from trusted sources like geeksforgeeks.org, leetcode.com, or developer.mozilla.org. Only provide direct links to the topic, not search pages. Your entire response MUST be ONLY a valid JSON array of objects with "title" and "url" string properties. Example: [{"title":"Two Pointers Technique - GeeksforGeeks", "url":"https://www.geeksforgeeks.org/two-pointers-technique/"}]'
  });

  try {
    const result = await model.generateContent(`Topic: Two Pointers`);
    const text = result.response.text();
    console.log("RAW TEXT:", text);
    
    // Clean and parse JSON
    const jsonStr = text.replace(/```json/gi, '').replace(/```/gi, '').trim();
    console.log("CLEANED JSON STR:", jsonStr);
    const links = JSON.parse(jsonStr);
    console.log("PARSED LINKS:", links);
  } catch (err) {
    console.error("ERROR:", err.message);
  }
}

testGemini();
