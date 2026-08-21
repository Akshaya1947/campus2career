const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companyController')

// Public company routes
router.get('/', companyController.getAllPublicCompanies)
router.get('/:id', companyController.getCompanyById)

module.exports = router
