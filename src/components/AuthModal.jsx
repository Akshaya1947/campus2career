import React, { useState } from 'react'
import { authService } from '../services/authService'

export function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [mode, setMode] = useState('login') // 'login' or 'register'
  const [formData, setFormData] = useState({ name: '', email: '', password: '', course: 'CSE' })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [statusNotice, setStatusNotice] = useState('')

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrorMsg('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setStatusNotice('')

    if (!formData.email || !formData.password) {
      setErrorMsg('Please fill in all required fields.')
      return
    }

    if (mode === 'register') {
      if (!formData.name) {
        setErrorMsg('Please enter your full name.')
        return
      }
      
      if (!/^[a-zA-Z]/.test(formData.email)) {
        setErrorMsg('Email must start with a letter (cannot start with a number or special character).');
        return;
      }
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
        setErrorMsg('Please enter a valid email address.');
        return;
      }
    }

    setLoading(true)

    try {
      let result
      if (mode === 'register') {
        result = await authService.register(formData.name, formData.email, formData.password, formData.course)
      } else {
        result = await authService.login(formData.email, formData.password)
      }

      if (result.success) {
        setStatusNotice(mode === 'register' ? '✓ Account registered successfully!' : '✓ Signed in successfully!')

        setTimeout(() => {
          setLoading(false)
          onAuthSuccess && onAuthSuccess(result.user)
          onClose()
        }, 600)
      } else {
        setLoading(false)
        // If email already exists, auto-switch to Login tab
        if (mode === 'register' && result.error && result.error.toLowerCase().includes('already exists')) {
          setMode('login')
          setErrorMsg('')
          setStatusNotice('This email is already registered. Please log in instead.')
        } else {
          setErrorMsg(result.error || 'Authentication failed. Please check credentials.')
        }
      }
    } catch {
      setLoading(false)
      setErrorMsg('An unexpected error occurred.')
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(14, 43, 39, 0.75)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '16px',
          maxWidth: '440px',
          width: '100%',
          padding: '36px 32px',
          boxShadow: '0 24px 48px rgba(0,0,0,0.3)',
          position: 'relative',
          border: '1px solid #d5dfd9',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#f0f4f2',
            border: 'none',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 700,
            color: '#132f2a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>

        {/* Header Logo & Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#a94e3a', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '6px' }}>
            Campus2Career Auth
          </div>
          <h2 style={{ fontFamily: 'serif', fontSize: '28px', fontWeight: 800, color: '#132f2a', margin: 0, letterSpacing: '-1px' }}>
            {mode === 'login' ? 'Welcome back' : 'Create an account'}
          </h2>
          <p style={{ fontSize: '13px', color: '#526b64', margin: '6px 0 0' }}>
            {mode === 'login' ? 'Sign in to save your subject roadmap progress.' : 'Join to track subjects, careers & industry skills.'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div style={{ display: 'flex', background: '#edf3f0', padding: '4px', borderRadius: '30px', marginBottom: '24px', border: '1px solid #d2ded8' }}>
          <button
            type="button"
            onClick={() => { setMode('login'); setErrorMsg(''); setStatusNotice(''); }}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: '24px',
              border: 'none',
              background: mode === 'login' ? '#132f2a' : 'transparent',
              color: mode === 'login' ? '#fff' : '#435a54',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setErrorMsg(''); setStatusNotice(''); }}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: '24px',
              border: 'none',
              background: mode === 'register' ? '#132f2a' : 'transparent',
              color: mode === 'register' ? '#fff' : '#435a54',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Register
          </button>
        </div>

        {/* Error / Success Notifications */}
        {errorMsg && (
          <div style={{ background: '#fdf0f0', border: '1px solid #f5c2c2', borderRadius: '8px', padding: '10px 14px', fontSize: '12px', color: '#c02b2b', marginBottom: '18px', fontWeight: 600 }}>
            ⚠️ {errorMsg}
          </div>
        )}

        {statusNotice && (
          <div style={{ background: '#f0f9f4', border: '1px solid #bce0ca', borderRadius: '8px', padding: '10px 14px', fontSize: '12px', color: '#2a7a2a', marginBottom: '18px', fontWeight: 600 }}>
            {statusNotice}
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#132f2a', marginBottom: '6px', letterSpacing: '0.5px' }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  border: '1px solid #c5d3cc',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          )}

          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#132f2a', marginBottom: '6px', letterSpacing: '0.5px' }}>
                Engineering Branch
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  border: '1px solid #c5d3cc',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  background: '#fff',
                  color: '#132f2a'
                }}
              >
                <option value="CSE">Computer Science & Engineering (CSE)</option>
                <option value="ECE">Electronics & Communication (ECE)</option>
                <option value="EEE">Electrical & Electronics (EEE)</option>
                <option value="ME">Mechanical Engineering (ME)</option>
                <option value="CE">Civil Engineering (CE)</option>
                <option value="IT">Information Technology (IT)</option>
              </select>
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#132f2a', marginBottom: '6px', letterSpacing: '0.5px' }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="student@university.edu"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '8px',
                border: '1px solid #c5d3cc',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#132f2a', marginBottom: '6px', letterSpacing: '0.5px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  paddingRight: '42px',
                  borderRadius: '8px',
                  border: '1px solid #c5d3cc',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  color: '#7a9e94',
                }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: '10px',
              padding: '13px',
              borderRadius: '8px',
              border: 'none',
              background: '#132f2a',
              color: '#d7ff75',
              fontWeight: 800,
              fontSize: '14px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(19,47,42,0.2)',
            }}
          >
            {loading ? 'Authenticating...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AuthModal
