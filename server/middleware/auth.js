const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/env')

// Standard user JWT authentication
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided. Please log in.' })
  }
  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.userId = decoded.userId
    req.userEmail = decoded.email
    req.userRole = decoded.role || 'Student'
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired session token.' })
  }
}

// Admin-only JWT authentication
function verifyAdmin(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No admin token provided.' })
  }
  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded.role !== 'Admin') {
      return res.status(403).json({ message: 'Access denied. Admin privileges required.' })
    }
    req.userId = decoded.userId
    req.userEmail = decoded.email
    req.userRole = decoded.role
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired admin session token.' })
  }
}

module.exports = {
  verifyToken,
  verifyAdmin,
}
