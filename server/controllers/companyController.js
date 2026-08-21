const Company = require('../models/Company')

// GET /api/companies — fetch all active companies (public)
exports.getAllPublicCompanies = async (req, res) => {
  try {
    const companies = await Company.find({ isHidden: { $ne: true } }).sort({ name: 1 })
    res.json({ companies })
  } catch (error) {
    console.error('Companies GET Error:', error)
    res.status(500).json({ message: 'Internal Server Error fetching companies.' })
  }
}

// GET /api/companies/:id — fetch single active company (public)
exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findOne({ id: req.params.id, isHidden: { $ne: true } })
    if (!company) {
      return res.status(404).json({ message: 'Company not found.' })
    }
    res.json({ company })
  } catch (error) {
    console.error('Company GET Error:', error)
    res.status(500).json({ message: 'Internal Server Error fetching company.' })
  }
}

// GET /api/admin/companies — fetch all companies including hidden (admin only)
exports.getAdminCompanies = async (req, res) => {
  try {
    const companies = await Company.find().sort({ name: 1 })
    res.json({ companies })
  } catch (error) {
    console.error('Admin Companies GET Error:', error)
    res.status(500).json({ message: 'Internal Server Error.' })
  }
}

// POST /api/admin/companies — create new company (admin only)
exports.createCompany = async (req, res) => {
  try {
    const {
      id, name, fullName, logoEmoji, brandColor, accentColor, bgSoft,
      badge, tier, ctcRange, tracks, tagline, description,
      rounds, focusWeights, targetTopics, sprintPlan, drills
    } = req.body

    if (!id || !name) {
      return res.status(400).json({ message: 'Company ID and name are required.' })
    }

    const cleanId = id.toLowerCase().trim()
    const existingCompany = await Company.findOne({ id: cleanId })
    if (existingCompany) {
      return res.status(400).json({ message: 'A company with this ID already exists.' })
    }

    const newCompany = new Company({
      id: cleanId,
      name: name.trim(),
      fullName,
      logoEmoji,
      brandColor,
      accentColor,
      bgSoft,
      badge,
      tier,
      ctcRange: typeof ctcRange === 'string' ? ctcRange.trim() : undefined,
      tracks,
      tagline,
      description,
      rounds,
      focusWeights,
      targetTopics,
      sprintPlan,
      drills,
    })
    await newCompany.save()

    res.status(201).json({ message: 'Company created successfully.', company: newCompany })
  } catch (error) {
    console.error('Company POST Error:', error)
    res.status(500).json({ message: 'Internal Server Error creating company.' })
  }
}

// PUT /api/admin/companies/:id — update company (admin only)
exports.updateCompany = async (req, res) => {
  try {
    const { id } = req.params
    const updateData = { ...req.body }
    delete updateData._id
    delete updateData.isHidden
    delete updateData.hiddenAt
    delete updateData.hiddenBy
    updateData.updatedAt = new Date()

    const company = await Company.findOneAndUpdate({ id }, updateData, { new: true })
    if (!company) {
      return res.status(404).json({ message: 'Company not found.' })
    }

    res.json({ message: 'Company updated successfully.', company })
  } catch (error) {
    console.error('Company PUT Error:', error)
    res.status(500).json({ message: 'Internal Server Error updating company.' })
  }
}

// POST /api/admin/companies/:id/hide — archive company (admin only)
exports.hideCompany = async (req, res) => {
  try {
    const company = await Company.findOneAndUpdate(
      { id: req.params.id, isHidden: { $ne: true } },
      { isHidden: true, hiddenAt: new Date(), hiddenBy: req.userId, updatedAt: new Date() },
      { new: true }
    )
    if (!company) return res.status(404).json({ message: 'Active company not found.' })
    res.json({ message: `${company.name} moved to hidden archive.`, company })
  } catch (error) {
    console.error('Company Hide Error:', error)
    res.status(500).json({ message: 'Internal Server Error.' })
  }
}

// POST /api/admin/companies/:id/restore — restore archived company (admin only)
exports.restoreCompany = async (req, res) => {
  try {
    const company = await Company.findOneAndUpdate(
      { id: req.params.id, isHidden: true },
      { isHidden: false, hiddenAt: null, hiddenBy: null, updatedAt: new Date() },
      { new: true }
    )
    if (!company) return res.status(404).json({ message: 'Hidden company not found.' })
    res.json({ message: `${company.name} restored and visible to students.`, company })
  } catch (error) {
    console.error('Company Restore Error:', error)
    res.status(500).json({ message: 'Internal Server Error.' })
  }
}

// DELETE /api/admin/companies/:id — delete company (admin only)
exports.deleteCompany = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Company.findOneAndDelete({ id })
    if (!deleted) return res.status(404).json({ message: 'Company not found.' })

    res.json({ message: `Company ${deleted.name} deleted successfully.` })
  } catch (error) {
    console.error('Company DELETE Error:', error)
    res.status(500).json({ message: 'Internal Server Error.' })
  }
}

// POST /api/admin/companies/seed — seed initial companies (admin only)
exports.seedCompanies = async (req, res) => {
  try {
    const { companiesData } = req.body

    if (!companiesData || !Array.isArray(companiesData)) {
      return res.status(400).json({ message: 'companiesData array is required in request body.' })
    }

    const existingCount = await Company.countDocuments()
    if (existingCount > 0) {
      return res.status(400).json({ message: `Database already contains ${existingCount} companies. Use individual routes to update.` })
    }

    const insertedCompanies = await Company.insertMany(companiesData)
    res.status(201).json({
      message: `${insertedCompanies.length} companies seeded successfully.`,
      count: insertedCompanies.length
    })
  } catch (error) {
    console.error('Company Seed Error:', error)
    res.status(500).json({ message: 'Internal Server Error during seed.' })
  }
}
