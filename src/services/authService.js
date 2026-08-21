// Authentication Service — communicates with backend API and manages user session

import { apiClient } from './apiClient'
import { STORAGE_KEYS } from '../config/api'

export const authService = {
  // Get currently logged-in user from localStorage
  getCurrentUser() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER)
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  },

  // Get current JWT auth token
  getToken() {
    return localStorage.getItem(STORAGE_KEYS.TOKEN) || null
  },

  // Register user
  async register(name, email, password, course) {
    const res = await apiClient.post('/auth/register', { name, email, password, course })

    if (res.success && res.token && res.user) {
      localStorage.setItem(STORAGE_KEYS.TOKEN, res.token)
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(res.user))
      window.dispatchEvent(new Event('auth_state_changed'))
      return { success: true, user: res.user }
    }

    return {
      success: false,
      error: res.error || 'Registration failed. Please try again.',
    }
  },

  // Login user
  async login(email, password) {
    const res = await apiClient.post('/auth/login', { email, password })

    if (res.success && res.token && res.user) {
      localStorage.setItem(STORAGE_KEYS.TOKEN, res.token)
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(res.user))
      window.dispatchEvent(new Event('auth_state_changed'))
      return { success: true, user: res.user }
    }

    return {
      success: false,
      error: res.error || 'Invalid email or password.',
    }
  },

  // Verify and fetch latest profile from server
  async getProfile() {
    const res = await apiClient.get('/auth/me')
    if (res.success && res.user) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(res.user))
      window.dispatchEvent(new Event('auth_state_changed'))
      return { success: true, user: res.user }
    }
    return { success: false, error: res.error }
  },

  // Logout user
  logout() {
    localStorage.removeItem(STORAGE_KEYS.TOKEN)
    localStorage.removeItem(STORAGE_KEYS.USER)
    window.dispatchEvent(new Event('auth_state_changed'))
  },

  isAuthenticated() {
    return !!this.getToken() && !!this.getCurrentUser()
  }
}

export default authService
