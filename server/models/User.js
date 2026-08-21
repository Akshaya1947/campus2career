const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['Student', 'Mentor', 'Admin'], default: 'Student' },
  course: { type: String, enum: ['CSE', 'ECE', 'EEE', 'ME', 'CE', 'IT'], default: 'CSE' },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema)
