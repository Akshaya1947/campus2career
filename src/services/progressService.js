// Progress Service — saves & loads topic completion via MongoDB API with localStorage fallback

import { authService } from './authService'

const API_BASE_URL = 'http://localhost:5000/api'

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
    const token = authService.getToken()
    const user = authService.getCurrentUser()
    // Convert object to array of completed topic titles
    const completedTopics = Object.keys(completedTopicsObj).filter(k => completedTopicsObj[k])

    // Save to MongoDB if authenticated
    if (token) {
      try {
        await fetch(`${API_BASE_URL}/progress/${subjectSlug}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ completedTopics }),
        })
      } catch {
        // Network error — still save to localStorage below
      }
    }

    // Always save to localStorage as a fallback / offline cache
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
    const token = authService.getToken()
    const user = authService.getCurrentUser()

    // Try fetching from MongoDB first
    if (token) {
      try {
        const res = await fetch(`${API_BASE_URL}/progress/${subjectSlug}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (res.ok) {
          const data = await res.json()
          // Convert array → object
          const obj = {}
          ;(data.completedTopics || []).forEach(t => { obj[t] = true })
          // Sync result back to localStorage for offline use
          const localKey = getLocalKey(subjectSlug, user)
          if (localKey) {
            try { localStorage.setItem(localKey, JSON.stringify(obj)) } catch { /* ignore */ }
          }
          return obj
        }
      } catch {
        // Fallback below
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
    const token = authService.getToken()
    const user = authService.getCurrentUser()

    // Try MongoDB — returns all subjects in one request
    if (token) {
      try {
        const res = await fetch(`${API_BASE_URL}/progress`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (res.ok) {
          const data = await res.json()
          // Convert { slug: [titles] } → { slug: { title: bool } }
          const result = {}
          Object.entries(data.progress || {}).forEach(([slug, topics]) => {
            result[slug] = {}
            topics.forEach(t => { result[slug][t] = true })
          })
          return result
        }
      } catch {
        // Fallback below
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
