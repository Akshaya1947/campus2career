import React from 'react'

export function Footer() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-[28px]">
      <footer id="contact" className="py-[34px] flex flex-col md:flex-row justify-between gap-3 text-muted text-[12px]">
        <span>© 2026 Campus2Career</span>
        <span id="alumni">
          Made for curious learners ·{' '}
          <a id="about" href="/#home" className="text-ink no-underline hover:underline">
            Back to top ↑
          </a>
        </span>
        <span>
          <a
            href="/admin"
            style={{
              color: '#b0b8b5',
              textDecoration: 'none',
              fontSize: 11,
              opacity: 0.6,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '1'}
            onMouseLeave={e => e.target.style.opacity = '0.6'}
            title="Administrator login"
          >
            🛡️ Admin
          </a>
        </span>
      </footer>
    </div>
  )
}

export default Footer
