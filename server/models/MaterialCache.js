const mongoose = require('mongoose')

const materialCacheSchema = new mongoose.Schema({
  topicKey: { type: String, required: true, unique: true, lowercase: true, trim: true },
  topicTitle: { type: String, required: true },
  links: {
    type: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true },
      }
    ],
    default: []
  },
  createdAt: { type: Date, default: Date.now, expires: 60 * 60 * 24 * 14 } // Cache for 14 days
})

module.exports = mongoose.model('MaterialCache', materialCacheSchema)
