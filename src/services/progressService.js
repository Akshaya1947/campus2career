// Progress Service — saves & loads topic completion via API with localStorage caching

import { apiClient } from './apiClient'
import { authService } from './authService'

function getLocalKey(subjectSlug, user) {
  if (!user) return null
  const userKey = user.id || user.email
  return userKey ? `c2c_completed_${userKey}_${subjectSlug}` : null
}

export const progressService = {
  /**
   * Save completed topics for a subject.
   * completedTopicsObj: { [topicTitle]: boolean }
   */
  async saveProgress(subjectSlug, completedTopicsObj) {
    const user = authService.getCurrentUser()
    const completedTopics = Object.keys(completedTopicsObj).filter(k => completedTopicsObj[k])

    // Save to API if authenticated
    if (authService.isAuthenticated()) {
      await apiClient.post(`/progress/${subjectSlug}`, { completedTopics })
    }

    // Always update local cache for instant offline responsiveness
    const localKey = getLocalKey(subjectSlug, user)
    if (localKey) {
      try {
        localStorage.setItem(localKey, JSON.stringify(completedTopicsObj))
      } catch {
        // ignore
      }
    }
  },

  /**
   * Load completed topics for a subject.
   * Returns: { [topicTitle]: boolean }
   */
  async loadProgress(subjectSlug) {
    const user = authService.getCurrentUser()

    // Try fetching from API first if authenticated
    if (authService.isAuthenticated()) {
      const res = await apiClient.get(`/progress/${subjectSlug}`)
      if (res.success && res.completedTopics) {
        const obj = {}
        res.completedTopics.forEach(t => { obj[t] = true })
        
        const localKey = getLocalKey(subjectSlug, user)
        if (localKey) {
          try { localStorage.setItem(localKey, JSON.stringify(obj)) } catch { /* ignore */ }
        }
        return obj
      }
    }

    // Fallback: localStorage
    const localKey = getLocalKey(subjectSlug, user)
    if (!localKey) return {}
    try {
      const saved = localStorage.getItem(localKey)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  },

  /**
   * Load progress for all subjects at once (used by Dashboard).
   * slugs: array of subject slugs to check in localStorage fallback.
   * Returns: { [subjectSlug]: { [topicTitle]: boolean } }
   */
  async loadAllProgress(slugs = []) {
    const user = authService.getCurrentUser()

    // Try API — returns all subjects in one request
    if (authService.isAuthenticated()) {
      const res = await apiClient.get('/progress')
      if (res.success && res.progress) {
        const result = {}
        Object.entries(res.progress).forEach(([slug, topics]) => {
          result[slug] = {}
          ;(topics || []).forEach(t => { result[slug][t] = true })
        })
        return result
      }
    }

    // Fallback: scan localStorage for each slug
    const result = {}
    const userKey = user ? (user.id || user.email) : null
    if (!userKey) return result

    slugs.forEach(slug => {
      const localKey = `c2c_completed_${userKey}_${slug}`
      try {
        const saved = localStorage.getItem(localKey)
        if (saved) result[slug] = JSON.parse(saved)
      } catch { /* ignore */ }
    })

    return result
  },
}

export default progressService
