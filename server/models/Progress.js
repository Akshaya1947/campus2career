const mongoose = require('mongoose')

const progressSchema = new mongoose.Schema({
  userId:          { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subjectSlug:     { type: String, required: true },
  completedTopics: { type: [String], default: [] },
  updatedAt:       { type: Date, default: Date.now },
})

progressSchema.index({ userId: 1, subjectSlug: 1 }, { unique: true })

module.exports = mongoose.model('Progress', progressSchema)
