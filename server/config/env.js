require('dotenv').config()

const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/campus2career'
const JWT_SECRET = process.env.JWT_SECRET || 'campus2career_secure_jwt_token_key_2026'
const ADMIN_SEED_SECRET = process.env.ADMIN_SEED_SECRET || 'campus2career_admin_seed_2026'
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || ''
const NODE_ENV = process.env.NODE_ENV || 'development'

if (!process.env.JWT_SECRET && NODE_ENV === 'production') {
  console.warn('⚠️ WARNING: JWT_SECRET is not set in environment variables! Using default for development.')
}

module.exports = {
  PORT,
  MONGODB_URI,
  JWT_SECRET,
  ADMIN_SEED_SECRET,
  GEMINI_API_KEY,
  NODE_ENV,
}
