const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  id:              { type: String, required: true, unique: true, trim: true },
  name:            { type: String, required: true, trim: true },
  fullName:        { type: String, trim: true },
  logoEmoji:       { type: String },
  brandColor:      { type: String },
  accentColor:     { type: String },
  bgSoft:          { type: String },
  badge:           { type: String },
  tier:            { type: String },
  ctcRange:        { type: String },
  tracks:          { type: [mongoose.Schema.Types.Mixed], default: [] },
  tagline:         { type: String },
  description:     { type: String },
  rounds:          { type: [mongoose.Schema.Types.Mixed], default: [] },
  focusWeights:    { type: mongoose.Schema.Types.Mixed },
  targetTopics:    { type: [mongoose.Schema.Types.Mixed], default: [] },
  sprintPlan:      { type: [mongoose.Schema.Types.Mixed], default: [] },
  drills:          { type: [mongoose.Schema.Types.Mixed], default: [] },
  isHidden:        { type: Boolean, default: false, index: true },
  hiddenAt:        { type: Date, default: null },
  hiddenBy:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  createdAt:       { type: Date, default: Date.now },
  updatedAt:       { type: Date, default: Date.now }
})

module.exports = mongoose.model('Company', companySchema)
