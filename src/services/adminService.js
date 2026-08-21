// Admin Service — handles admin authentication, user administration, and platform metrics

import { apiClient } from './apiClient'
import { STORAGE_KEYS } from '../config/api'

export const adminService = {
  // ── Auth ──────────────────────────────────────────────────────────────────

  async login(email, password) {
    const res = await apiClient.post('/admin/login', { email, password })
    if (res.success && res.token && res.user) {
      localStorage.setItem(STORAGE_KEYS.ADMIN_TOKEN, res.token)
      localStorage.setItem(STORAGE_KEYS.ADMIN_USER, JSON.stringify(res.user))
      return { success: true, user: res.user }
    }
    return { success: false, error: res.error || 'Admin login failed.' }
  },

  logout() {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_TOKEN)
    localStorage.removeItem(STORAGE_KEYS.ADMIN_USER)
  },

  getCurrentAdmin() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ADMIN_USER)
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  },

  isLoggedIn() {
    return !!localStorage.getItem(STORAGE_KEYS.ADMIN_TOKEN) && !!this.getCurrentAdmin()
  },

  // ── Admin Creation (Admin only) ──────────────────────────────────────────

  async createAdmin(name, email, password) {
    const res = await apiClient.post('/admin/create-admin', { name, email, password }, { isAdmin: true })
    if (res.success) {
      return { success: true, message: res.message, user: res.user }
    }
    return { success: false, error: res.error || 'Failed to create admin.' }
  },

  // ── Users ─────────────────────────────────────────────────────────────────

  async getUsers() {
    const res = await apiClient.get('/admin/users', { isAdmin: true })
    if (res.success && res.users) {
      return { success: true, users: res.users }
    }
    return { success: false, error: res.error || 'Failed to fetch users.' }
  },

  async deleteUser(id) {
    const res = await apiClient.delete(`/admin/users/${id}`, { isAdmin: true })
    return { success: res.success, message: res.message || res.error }
  },

  async updateUserRole(id, role) {
    const res = await apiClient.put(`/admin/users/${id}/role`, { role }, { isAdmin: true })
    if (res.success) {
      return { success: true, message: res.message, user: res.user }
    }
    return { success: false, message: res.error || 'Failed to update user role.' }
  },

  // ── Stats ─────────────────────────────────────────────────────────────────

  async getStats() {
    const res = await apiClient.get('/admin/stats', { isAdmin: true })
    if (res.success) {
      return { success: true, ...res }
    }
    return { success: false, error: res.error || 'Failed to fetch admin stats.' }
  },
}

export default adminService
