const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')
const companyController = require('../controllers/companyController')
const { verifyAdmin } = require('../middleware/auth')
const { authLimiter } = require('../middleware/rateLimiter')

// Public Admin Login
router.post('/login', authLimiter, adminController.loginAdmin)

// Protected Admin Routes (Requires existing Admin token)
router.use(verifyAdmin)

// Admin creating another Admin account
router.post('/create-admin', adminController.createAdmin)

// User Management & Analytics
router.get('/users', adminController.getUsers)
router.delete('/users/:id', adminController.deleteUser)
router.put('/users/:id/role', adminController.updateUserRole)
router.get('/stats', adminController.getStats)

// Company Management (Admin)
router.get('/companies', companyController.getAdminCompanies)
router.post('/companies', companyController.createCompany)
router.put('/companies/:id', companyController.updateCompany)
router.post('/companies/:id/hide', companyController.hideCompany)
router.post('/companies/:id/restore', companyController.restoreCompany)
router.delete('/companies/:id', companyController.deleteCompany)
router.post('/companies/seed', companyController.seedCompanies)

module.exports = router
