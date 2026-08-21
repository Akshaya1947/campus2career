import React, { createContext, useContext, useState, useEffect } from 'react'
import { authService } from '../services/authService'
import { adminService } from '../services/adminService'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => authService.getCurrentUser())
  const [currentAdmin, setCurrentAdmin] = useState(() => adminService.getCurrentAdmin())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Sync active session
    const user = authService.getCurrentUser()
    const admin = adminService.getCurrentAdmin()
    setCurrentUser(user)
    setCurrentAdmin(admin)
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const result = await authService.login(email, password)
    if (result.success && result.user) {
      setCurrentUser(result.user)
    }
    return result
  }

  const register = async (name, email, password, course) => {
    const result = await authService.register(name, email, password, course)
    if (result.success && result.user) {
      setCurrentUser(result.user)
    }
    return result
  }

  const logout = () => {
    authService.logout()
    setCurrentUser(null)
  }

  const adminLogin = async (email, password) => {
    const result = await adminService.login(email, password)
    if (result.success && result.user) {
      setCurrentAdmin(result.user)
    }
    return result
  }

  const adminLogout = () => {
    adminService.logout()
    setCurrentAdmin(null)
  }

  const value = {
    currentUser,
    currentAdmin,
    isAuthenticated: !!currentUser,
    isAdmin: currentAdmin?.role === 'Admin' || currentUser?.role === 'Admin',
    login,
    register,
    logout,
    adminLogin,
    adminLogout,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthContext
