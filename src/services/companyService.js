// Company Service — handles company data fetching and admin management

import { apiClient } from './apiClient'

export const companyService = {
  // ── Public Routes ─────────────────────────────────────────────────────────

  // GET all companies
  async getAllCompanies() {
    const res = await apiClient.get('/companies')
    if (res.success && res.companies) {
      return { success: true, companies: res.companies }
    }
    return { success: false, companies: [], error: res.error || 'Failed to fetch companies.' }
  },

  // GET a single company by ID
  async getCompanyById(companyId) {
    const res = await apiClient.get(`/companies/${companyId}`)
    if (res.success && res.company) {
      return { success: true, company: res.company }
    }
    return { success: false, company: null, error: res.error || 'Company not found.' }
  },

  // ── Admin Routes ──────────────────────────────────────────────────────────

  // GET all companies for admin dashboard (including hidden)
  async getAdminCompanies() {
    const res = await apiClient.get('/admin/companies', { isAdmin: true })
    if (res.success && res.companies) {
      return { success: true, companies: res.companies }
    }
    return { success: false, companies: [], error: res.error || 'Failed to fetch companies.' }
  },

  // POST create a new company
  async createCompany(companyData) {
    const res = await apiClient.post('/admin/companies', companyData, { isAdmin: true })
    if (res.success && res.company) {
      return { success: true, company: res.company }
    }
    return { success: false, error: res.error || 'Failed to create company.' }
  },

  // PUT update a company
  async updateCompany(companyId, updateData) {
    const res = await apiClient.put(`/admin/companies/${companyId}`, updateData, { isAdmin: true })
    if (res.success && res.company) {
      return { success: true, company: res.company }
    }
    return { success: false, error: res.error || 'Failed to update company.' }
  },

  // DELETE a company
  async deleteCompany(companyId) {
    const res = await apiClient.delete(`/admin/companies/${companyId}`, { isAdmin: true })
    if (res.success) {
      return { success: true, message: res.message }
    }
    return { success: false, error: res.error || 'Failed to delete company.' }
  },

  // Archive a company
  async hideCompany(companyId) {
    const res = await apiClient.post(`/admin/companies/${companyId}/hide`, {}, { isAdmin: true })
    if (res.success && res.company) {
      return { success: true, company: res.company, message: res.message }
    }
    return { success: false, error: res.error || 'Failed to archive company.' }
  },

  // Restore an archived company
  async restoreCompany(companyId) {
    const res = await apiClient.post(`/admin/companies/${companyId}/restore`, {}, { isAdmin: true })
    if (res.success && res.company) {
      return { success: true, company: res.company, message: res.message }
    }
    return { success: false, error: res.error || 'Failed to restore company.' }
  },

  // POST seed companies from initial data
  async seedCompanies(companiesData) {
    const res = await apiClient.post('/admin/companies/seed', { companiesData }, { isAdmin: true })
    if (res.success) {
      return { success: true, message: res.message, count: res.count }
    }
    return { success: false, error: res.error || 'Failed to seed companies.' }
  },
}

export default companyService
