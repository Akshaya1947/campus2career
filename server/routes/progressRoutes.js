const express = require('express')
const router = express.Router()
const progressController = require('../controllers/progressController')
const { verifyToken } = require('../middleware/auth')

// All progress routes require authentication
router.use(verifyToken)

router.get('/', progressController.getAllProgress)
router.get('/:subjectSlug', progressController.getProgressBySubject)
router.post('/:subjectSlug', progressController.saveProgress)

module.exports = router
