import React from 'react'

export function Detail({ title, children }) {
  return (
    <div className="bg-white/70 p-[15px] text-[12px] leading-[1.55] text-muted">
      <b className="block text-[11px] text-ink mb-[5px] uppercase tracking-[0.5px] font-bold">{title}</b>
      {children}
    </div>
  )
}

export default Detail
