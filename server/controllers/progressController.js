const Progress = require('../models/Progress')

// GET /api/progress — all subjects' progress for the logged-in user
exports.getAllProgress = async (req, res) => {
  try {
    const records = await Progress.find({ userId: req.userId })
    const progressMap = {}
    records.forEach(r => {
      progressMap[r.subjectSlug] = r.completedTopics
    })
    res.json({ progress: progressMap })
  } catch (error) {
    console.error('Progress GET all Error:', error)
    res.status(500).json({ message: 'Internal Server Error fetching progress.' })
  }
}

// GET /api/progress/:subjectSlug — completed topics for one subject
exports.getProgressBySubject = async (req, res) => {
  try {
    const record = await Progress.findOne({ userId: req.userId, subjectSlug: req.params.subjectSlug })
    res.json({ completedTopics: record ? record.completedTopics : [] })
  } catch (error) {
    console.error('Progress GET Error:', error)
    res.status(500).json({ message: 'Internal Server Error fetching subject progress.' })
  }
}

// POST /api/progress/:subjectSlug — save (upsert) completed topics for one subject
exports.saveProgress = async (req, res) => {
  try {
    const { completedTopics } = req.body
    if (!Array.isArray(completedTopics)) {
      return res.status(400).json({ message: 'completedTopics must be an array.' })
    }
    await Progress.findOneAndUpdate(
      { userId: req.userId, subjectSlug: req.params.subjectSlug },
      { completedTopics, updatedAt: new Date() },
      { upsert: true, new: true }
    )
    res.json({ message: 'Progress saved successfully.' })
  } catch (error) {
    console.error('Progress POST Error:', error)
    res.status(500).json({ message: 'Internal Server Error saving progress.' })
  }
}
