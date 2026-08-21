const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const { verifyToken } = require('../middleware/auth')
const { authLimiter } = require('../middleware/rateLimiter')

router.post('/register', authLimiter, authController.register)
router.post('/login', authLimiter, authController.login)
router.get('/me', verifyToken, authController.getMe)

module.exports = router
