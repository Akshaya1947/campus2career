import React from 'react'
import { navigate } from '../utils/navigation'

export function Link({ to, className, style, children, onClick }) {
  return (
    <a
      href={to}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault()
        if (onClick) onClick(e)
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}

export default Link
