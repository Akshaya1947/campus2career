import React, { useState, useEffect } from 'react'
import { Link } from './Link'
import { authService } from '../services/authService'
import { adminService } from '../services/adminService'
import { AuthModal } from './AuthModal'

const NAV_LINKS = [
  { label: 'Home', to: '/', type: 'route' },
  { label: 'Careers', to: '/careers', type: 'route' },
  { label: 'Personalized Roadmap', to: '/personalized-roadmap', type: 'route', badge: 'AI' },
  { label: 'Placements', to: '/placements', type: 'route' },
  // { label: 'Alumni', to: '/#alumni', type: 'anchor' },
  { label: 'About', to: '/#about', type: 'anchor' },
  { label: 'Contact', to: '/#contact', type: 'anchor' },
]

export function Nav({ onAuthChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(() => authService.getCurrentUser())

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLogout = () => {
    authService.logout()
    setCurrentUser(null)
    onAuthChange?.(null)
  }

  return (
    <>
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={(user) => {
          setCurrentUser(user)
          onAuthChange?.(user)
        }}
      />

      {/* Full-width sticky wrapper */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          width: '100%',
          background: 'rgba(248, 246, 240, 0.95)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid #e0ddd5',
          boxShadow: scrolled ? '0 2px 16px rgba(20,30,20,0.08)' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <nav
            style={{
              height: 68,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              style={{
                fontWeight: 800,
                letterSpacing: '-1.4px',
                fontSize: 21,
                textDecoration: 'none',
                color: '#132f2a',
                flexShrink: 0,
              }}
            >
              Campus<i style={{ color: '#e8622a', fontStyle: 'normal' }}>2</i>Career
            </Link>

            {/* Desktop links */}
            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}
              className="desktop-nav"
            >
              {NAV_LINKS.map(link =>
                link.type === 'route' ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    style={{ color: '#132f2a', textDecoration: 'none', fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 5 }}
                    className="nav-link"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span style={{ fontSize: 9, fontWeight: 800, padding: '1px 5px', borderRadius: 4, background: '#e8622a', color: '#fff' }}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.to}
                    style={{ color: '#132f2a', textDecoration: 'none', fontSize: 13, fontWeight: 700 }}
                    className="nav-link"
                  >
                    {link.label}
                  </a>
                )
              )}

              {/* Dashboard link — logged-in users only */}
              {currentUser && (
                <Link
                  to="/dashboard"
                  style={{ color: '#132f2a', textDecoration: 'none', fontSize: 13, fontWeight: 700 }}
                  className="nav-link"
                >
                  Dashboard
                </Link>
              )}

              {/* Admin Panel link — admin users only */}
              {currentUser?.role === 'Admin' && (
                <Link
                  to="/admin/dashboard"
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: 11,
                    fontWeight: 800,
                    background: '#132f2a',
                    padding: '4px 10px',
                    borderRadius: 8,
                    border: '1px solid rgba(215,255,117,0.3)',
                    letterSpacing: '0.02em',
                  }}
                >
                  🛡️ Admin
                </Link>
              )}

              {currentUser ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#e4eae6', padding: '4px 12px 4px 6px', borderRadius: '24px', border: '1px solid #ccd8d2' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#132f2a', color: '#d7ff75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '12px' }}>
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#132f2a' }}>
                    {currentUser.name || 'Student'}
                  </span>
                  {currentUser.course && (
                    <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 6px', borderRadius: '4px', background: '#24685e', color: '#fff' }}>
                      {currentUser.course}
                    </span>
                  )}
                  <button
                    onClick={handleLogout}
                    title="Log Out"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', color: '#a94e3a', fontWeight: 700, marginLeft: '4px' }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setAuthModalOpen(true)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '20px',
                    border: '1px solid #132f2a',
                    background: '#132f2a',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: '0 2px 6px rgba(19,47,42,0.15)',
                  }}
                >
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile Header Actions: Avatar/Sign In + Hamburger */}
            <div className="mobile-nav-actions" style={{ display: 'none', alignItems: 'center', gap: 10 }}>
              {currentUser ? (
                <div
                  onClick={() => setMenuOpen(o => !o)}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#132f2a',
                    color: '#d7ff75',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: 13,
                    cursor: 'pointer',
                    border: '1.5px solid #24685e',
                  }}
                  title={currentUser.name || 'User'}
                >
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                </div>
              ) : (
                <button
                  onClick={() => setAuthModalOpen(true)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '16px',
                    border: '1px solid #132f2a',
                    background: '#132f2a',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '11px',
                    cursor: 'pointer',
                  }}
                >
                  Sign In
                </button>
              )}

              {/* Mobile hamburger button */}
              <button
                onClick={() => setMenuOpen(o => !o)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                className="mobile-menu-btn"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Animated hamburger bars */}
                <span style={{
                  display: 'block', width: 22, height: 2,
                  background: '#132f2a', borderRadius: 2,
                  transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                  transition: 'transform 0.25s',
                }} />
                <span style={{
                  display: 'block', width: 22, height: 2,
                  background: '#132f2a', borderRadius: 2,
                  opacity: menuOpen ? 0 : 1,
                  transition: 'opacity 0.2s',
                }} />
                <span style={{
                  display: 'block', width: 22, height: 2,
                  background: '#132f2a', borderRadius: 2,
                  transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                  transition: 'transform 0.25s',
                }} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.45)',
              zIndex: 98,
              backdropFilter: 'blur(2px)',
            }}
          />
          {/* Drawer */}
          <div
            style={{
              position: 'fixed',
              top: 68,
              left: 0,
              right: 0,
              maxHeight: 'calc(100vh - 72px)',
              overflowY: 'auto',
              zIndex: 99,
              background: '#fff',
              borderBottom: '3px solid #e8622a',
              padding: '20px 24px 30px',
              boxShadow: '0 12px 40px rgba(20,30,20,0.2)',
              animation: 'slideDown 0.22s ease',
            }}
          >
            {/* User Profile Card / Login Section in Mobile Menu */}
            <div style={{
              background: '#f4f7f5',
              border: '1px solid #d5dfd9',
              borderRadius: 14,
              padding: '14px 16px',
              marginBottom: 18,
            }}>
              {currentUser ? (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        background: '#132f2a',
                        color: '#d7ff75',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: 15,
                      }}>
                        {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 14, color: '#132f2a' }}>
                          {currentUser.name || 'Student'}
                        </div>
                        <div style={{ fontSize: 11, color: '#60706a', fontWeight: 600 }}>
                          {currentUser.email || 'Logged in'}
                        </div>
                        {currentUser.course && (
                          <div style={{ marginTop: '4px', display: 'inline-block', fontSize: '10px', fontWeight: 800, padding: '2px 6px', borderRadius: '4px', background: '#24685e', color: '#fff' }}>
                            {currentUser.course}
                          </div>
                        )}
                      </div>
                    </div>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: 10,
                      background: currentUser.role === 'Admin' ? 'rgba(215,255,117,0.3)' : 'rgba(36,104,94,0.12)',
                      color: currentUser.role === 'Admin' ? '#132f2a' : '#24685e',
                      border: '1px solid rgba(36,104,94,0.2)',
                    }}>
                      {currentUser.role || 'Student'}
                    </span>
                  </div>

                  {/* Mobile Logout Button */}
                  <button
                    onClick={() => {
                      handleLogout()
                      setMenuOpen(false)
                    }}
                    style={{
                      width: '100%',
                      padding: '9px 14px',
                      borderRadius: 8,
                      border: '1px solid rgba(232,98,42,0.3)',
                      background: 'rgba(232,98,42,0.1)',
                      color: '#c94d1b',
                      fontWeight: 800,
                      fontSize: 13,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      transition: 'all 0.15s',
                    }}
                  >
                    <span>🚪</span>
                    <span>Log Out</span>
                  </button>
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: 12, color: '#60706a', margin: '0 0 10px' }}>
                    Track your roadmap progress & placement readiness
                  </p>
                  <button
                    onClick={() => {
                      setMenuOpen(false)
                      setAuthModalOpen(true)
                    }}
                    style={{
                      width: '100%',
                      padding: '10px 16px',
                      borderRadius: 10,
                      border: 'none',
                      background: '#132f2a',
                      color: '#d7ff75',
                      fontWeight: 800,
                      fontSize: 13,
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(19,47,42,0.2)',
                    }}
                  >
                    Sign In / Register
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {NAV_LINKS.map(link =>
                link.type === 'route' ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: '#132f2a',
                      textDecoration: 'none',
                      fontSize: 16,
                      fontWeight: 700,
                      padding: '12px 6px',
                      borderBottom: '1px solid #f0ede6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ color: '#a0b0aa', fontSize: 14 }}>→</span>
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.to}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: '#132f2a',
                      textDecoration: 'none',
                      fontSize: 16,
                      fontWeight: 700,
                      padding: '12px 6px',
                      borderBottom: '1px solid #f0ede6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ color: '#a0b0aa', fontSize: 14 }}>→</span>
                  </a>
                )
              )}

              {/* Dashboard link in mobile menu */}
              {currentUser && (
                <Link
                  to="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: '#132f2a',
                    textDecoration: 'none',
                    fontSize: 16,
                    fontWeight: 700,
                    padding: '12px 6px',
                    borderBottom: '1px solid #f0ede6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Dashboard</span>
                  <span style={{ color: '#a0b0aa', fontSize: 14 }}>→</span>
                </Link>
              )}

              {/* Admin Panel link in mobile menu */}
              {currentUser?.role === 'Admin' && (
                <Link
                  to="/admin/dashboard"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: '#132f2a',
                    textDecoration: 'none',
                    fontSize: 16,
                    fontWeight: 700,
                    padding: '12px 6px',
                    borderBottom: '1px solid #f0ede6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Admin Panel</span>
                  <span style={{ color: '#a0b0aa', fontSize: 14 }}>→</span>
                </Link>
              )}
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-link:hover { color: #e8622a !important; }
        /* Show desktop links, hide mobile actions on ≥768px */
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-actions { display: none !important; }
        }
        /* Hide desktop links, show mobile actions on <768px */
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-actions { display: flex !important; }
        }
      `}</style>
    </>
  )
}

export default Nav
