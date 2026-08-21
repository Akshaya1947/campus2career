const express = require('express')
const router = express.Router()
const aiController = require('../controllers/aiController')
const { verifyToken } = require('../middleware/auth')
const { aiLimiter } = require('../middleware/rateLimiter')

// Protected: Only authenticated users can chat with AI Study Buddy
router.post('/chat', verifyToken, aiLimiter, aiController.chat)

// Public educational resources
router.get('/materials', aiLimiter, aiController.getMaterials)

module.exports = router

