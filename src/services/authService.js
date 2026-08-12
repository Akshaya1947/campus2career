// Authentication Service — validates credentials via localStorage when MongoDB is offline

const API_BASE_URL = 'http://localhost:5000/api/auth'

// Helper: get all registered demo accounts from localStorage
function getDemoAccounts() {
  try {
    const stored = localStorage.getItem('c2c_accounts')
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

function saveDemoAccounts(accounts) {
  localStorage.setItem('c2c_accounts', JSON.stringify(accounts))
}

export const authService = {
  // Get currently logged-in user from localStorage
  getCurrentUser() {
    try {
      const stored = localStorage.getItem('c2c_user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  },

  // Get current JWT auth token
  getToken() {
    return localStorage.getItem('c2c_token') || null
  },

  // Register user with MongoDB backend (or fallback local validation)
  async register(name, email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.token && data.user) {
          localStorage.setItem('c2c_token', data.token)
          localStorage.setItem('c2c_user', JSON.stringify(data.user))
          return { success: true, user: data.user, isMongoDB: true }
        }
      }
      const errData = await response.json().catch(() => ({}))
      if (errData.message) {
        return { success: false, error: errData.message }
      }
    } catch {
      // Backend not running — fallback to local validation
    }

    // Local Registration with password storage
    const accounts = getDemoAccounts()
    const emailKey = email.toLowerCase().trim()

    if (accounts[emailKey]) {
      return { success: false, error: 'An account with this email already exists.' }
    }

    const user = {
      id: 'usr_' + Date.now(),
      name: name || 'Student',
      email: emailKey,
      role: 'Student',
    }

    // Store account with password for future login validation
    accounts[emailKey] = { user, password }
    saveDemoAccounts(accounts)

    localStorage.setItem('c2c_token', 'token_' + Date.now())
    localStorage.setItem('c2c_user', JSON.stringify(user))

    return { success: true, user, isMongoDB: false }
  },

  // Login user with MongoDB backend (or fallback local validation)
  async login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.token && data.user) {
          localStorage.setItem('c2c_token', data.token)
          localStorage.setItem('c2c_user', JSON.stringify(data.user))
          return { success: true, user: data.user, isMongoDB: true }
        }
      }
      const errData = await response.json().catch(() => ({}))
      if (errData.message) {
        return { success: false, error: errData.message }
      }
    } catch {
      // Backend not running — fallback to local validation
    }

    // Local Login with password validation
    const accounts = getDemoAccounts()
    const emailKey = email.toLowerCase().trim()
    const account = accounts[emailKey]

    if (!account) {
      return { success: false, error: 'No account found with this email. Please register first.' }
    }

    if (account.password !== password) {
      return { success: false, error: 'Incorrect password. Please try again.' }
    }

    localStorage.setItem('c2c_token', 'token_' + Date.now())
    localStorage.setItem('c2c_user', JSON.stringify(account.user))

    return { success: true, user: account.user, isMongoDB: false }
  },

  // Logout user
  logout() {
    localStorage.removeItem('c2c_token')
    localStorage.removeItem('c2c_user')
  },
}

export default authService
