import React from 'react'

/**
 * Authentic SVG Brand Badges & Vectors for Campus Recruiters
 * TCS, Cognizant, Accenture, Wipro, and Soliton
 */
export function CompanyLogo({ id, size = 36, style = {}, className = '' }) {
  const s = typeof size === 'number' ? `${size}px` : size

  switch (id?.toLowerCase()) {
    case 'tcs':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ borderRadius: 10, flexShrink: 0, ...style }}
          className={className}
          aria-label="TCS Logo"
        >
          <rect width="48" height="48" rx="10" fill="#003366" />
          <path
            d="M8 17H20V21H16V33H12V21H8V17Z"
            fill="#FFFFFF"
          />
          <path
            d="M27.5 17C23.9 17 21 19.9 21 25C21 30.1 23.9 33 27.5 33C30.2 33 32.4 31.5 33.2 29.2L29.6 28C29.2 29.1 28.5 29.8 27.5 29.8C25.8 29.8 24.6 28.1 24.6 25C24.6 21.9 25.8 20.2 27.5 20.2C28.5 20.2 29.2 20.9 29.6 22L33.2 20.8C32.4 18.5 30.2 17 27.5 17Z"
            fill="#00A3E0"
          />
          <path
            d="M41 20.5C40.2 18.2 38 17 35.5 17C32.5 17 30.5 18.8 30.5 21.2C30.5 23.2 31.8 24.4 34.2 25.1L35.6 25.5C36.8 25.9 37.3 26.4 37.3 27.2C37.3 28.2 36.3 29 35 29C33.6 29 32.6 28.1 32.2 27L28.8 28.2C29.6 31 32 33 35 33C38.3 33 40.8 31 40.8 27.5C40.8 24.9 39.2 23.7 36.8 23L35.4 22.6C34.4 22.3 33.9 21.8 33.9 21C33.9 20.2 34.7 19.6 35.7 19.6C36.8 19.6 37.6 20.2 37.9 21.2L41 20.5Z"
            fill="#FFFFFF"
          />
          <circle cx="39" cy="12" r="2.5" fill="#E8622A" />
        </svg>
      )

    case 'cognizant':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ borderRadius: 10, flexShrink: 0, ...style }}
          className={className}
          aria-label="Cognizant Logo"
        >
          <rect width="48" height="48" rx="10" fill="#001B44" />
          <path
            d="M32 14C23.2 14 16 21.2 16 30C16 34.8 18.2 39 21.6 41.8L24.8 38C22.6 36 21.2 33.1 21.2 30C21.2 24.1 26 19.2 32 19.2C34.5 19.2 36.8 20.1 38.6 21.6L41.8 17.8C39.2 15.4 35.8 14 32 14Z"
            fill="#0071CE"
          />
          <path
            d="M24 10C16.3 10 10 16.3 10 24C10 28.2 11.9 31.9 14.8 34.4L18 30.6C16.2 28.9 15.2 26.6 15.2 24C15.2 19.1 19.1 15.2 24 15.2C26.1 15.2 28 15.9 29.6 17.1L32.8 13.3C30.4 11.2 27.4 10 24 10Z"
            fill="#00B8F5"
          />
          <circle cx="33" cy="29" r="6" fill="#00E5FF" />
          <path
            d="M32 25L35 29L32 33"
            stroke="#001B44"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'accenture':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ borderRadius: 10, flexShrink: 0, ...style }}
          className={className}
          aria-label="Accenture Logo"
        >
          <rect width="48" height="48" rx="10" fill="#1B0033" />
          {/* Accenture Greater-than Icon */}
          <path
            d="M13 22.5L25.5 14L28.5 18L18.5 24.5L28.5 31L25.5 35L13 26.5V22.5Z"
            fill="#A100FF"
          />
          <path
            d="M22 22.5L34.5 14L37.5 18L27.5 24.5L37.5 31L34.5 35L22 26.5V22.5Z"
            fill="#E056FD"
          />
        </svg>
      )

    case 'wipro':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ borderRadius: 10, flexShrink: 0, ...style }}
          className={className}
          aria-label="Wipro Logo"
        >
          <rect width="48" height="48" rx="10" fill="#0D1E24" />
          {/* Multi-dot colorful concentric constellation */}
          <circle cx="24" cy="14" r="3.5" fill="#E84A5F" />
          <circle cx="33" cy="18" r="3.2" fill="#FF847C" />
          <circle cx="36" cy="27" r="3" fill="#FECEAB" />
          <circle cx="31" cy="35" r="3.5" fill="#99B898" />
          <circle cx="21" cy="36" r="3.2" fill="#2A9D8F" />
          <circle cx="13" cy="30" r="3.5" fill="#00B4D8" />
          <circle cx="14" cy="20" r="3.2" fill="#7209B7" />
          {/* Central 'W' mark */}
          <path
            d="M18 21L21 28L24 22L27 28L30 21"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'soliton':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ borderRadius: 10, flexShrink: 0, ...style }}
          className={className}
          aria-label="Soliton Logo"
        >
          <rect width="48" height="48" rx="10" fill="#18110D" />
          {/* Soliton Wave Pulse / S-curve Vector */}
          <path
            d="M11 26C11 26 14 14 20 14C26 14 24 34 30 34C36 34 38 22 38 22"
            stroke="#F97316"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="14" r="3" fill="#FFEDD5" stroke="#EA580C" strokeWidth="1.5" />
          <circle cx="30" cy="34" r="3" fill="#FFEDD5" stroke="#EA580C" strokeWidth="1.5" />
          {/* High-speed pulse dot */}
          <circle cx="25" cy="24" r="2.2" fill="#FFD000" />
        </svg>
      )

    default:
      return (
        <div
          style={{
            width: s,
            height: s,
            borderRadius: 10,
            background: '#132f2a',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '14px',
            ...style,
          }}
          className={className}
        >
          🏢
        </div>
      )
  }
}

export default CompanyLogo
