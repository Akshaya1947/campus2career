import React, { useState, useEffect } from 'react'
import { Link } from './Link'
import { authService } from '../services/authService'
import { AuthModal } from './AuthModal'

const NAV_LINKS = [
  { label: 'Home', to: '/', type: 'route' },
  { label: 'Careers', to: '/careers', type: 'route' },
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

              {currentUser ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#e4eae6', padding: '4px 12px 4px 6px', borderRadius: '24px', border: '1px solid #ccd8d2' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#132f2a', color: '#d7ff75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '12px' }}>
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#132f2a' }}>
                    {currentUser.name || 'Student'}
                  </span>
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

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="mobile-menu-btn"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '6px',
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
              background: 'rgba(0,0,0,0.35)',
              zIndex: 98,
            }}
          />
          {/* Drawer */}
          <div
            style={{
              position: 'fixed',
              top: 68,
              left: 0,
              right: 0,
              zIndex: 99,
              background: '#fff',
              borderBottom: '2px solid #e8622a',
              padding: '16px 24px 24px',
              boxShadow: '0 8px 32px rgba(20,30,20,0.14)',
              animation: 'slideDown 0.22s ease',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV_LINKS.map(link =>
                link.type === 'route' ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: '#132f2a',
                      textDecoration: 'none',
                      fontSize: 17,
                      fontWeight: 700,
                      padding: '13px 0',
                      borderBottom: '1px solid #f0ede6',
                      display: 'block',
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.to}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: '#132f2a',
                      textDecoration: 'none',
                      fontSize: 17,
                      fontWeight: 700,
                      padding: '13px 0',
                      borderBottom: '1px solid #f0ede6',
                      display: 'block',
                    }}
                  >
                    {link.label}
                  </a>
                )
              )}
              {/* Dashboard link in mobile menu */}
              {currentUser && (
                <Link
                  to="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: '#e8622a',
                    textDecoration: 'none',
                    fontSize: 17,
                    fontWeight: 700,
                    padding: '13px 0',
                    borderBottom: '1px solid #f0ede6',
                    display: 'block',
                  }}
                >
                  Dashboard
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
        /* Show desktop links, hide mobile button on ≥768px */
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        /* Hide desktop links, show mobile button on <768px */
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

export default Nav
