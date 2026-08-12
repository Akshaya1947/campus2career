import React from 'react'

export function HeroArt() {
  return (
    <div className="relative h-[290px] md:h-[410px] scale-[0.8] md:scale-100 origin-top md:origin-center -my-[30px] md:my-0" aria-hidden="true">
      {/* Orb */}
      <div className="w-[330px] h-[330px] rounded-full absolute right-5 top-[36px] bg-lime" />
      
      {/* Card Art */}
      <div className="w-[255px] bg-cream p-[20px] absolute shadow-card-coral -rotate-4 right-[105px] top-[90px]">
        <div className="flex justify-between text-[#dc6a51] font-mono text-[10px]">
          <span>CAREER MAP</span>
          <span>01/05</span>
        </div>
        <div className="h-[9px] bg-ink mt-[24px]" />
        <div className="h-[9px] w-[63%] bg-[#c6d0c5] mt-[9px]" />
        <div className="grid grid-cols-3 gap-[7px] mt-[28px]">
          <span className="aspect-square bg-[#e3ece0]" />
          <span className="aspect-square bg-coral" />
          <span className="aspect-square bg-[#e3ece0]" />
          <span className="aspect-square bg-lime" />
          <span className="aspect-square bg-coral" />
          <span className="aspect-square bg-[#e3ece0]" />
        </div>
      </div>

      {/* Badge */}
      <div className="absolute right-[7px] bottom-[37px] bg-teal text-white w-[138px] h-[138px] p-[18px] rounded-full grid place-content-center text-center font-mono text-[11px] leading-[1.4] rotate-[11deg]">
        LEARN<br />CONNECT<br />GROW
      </div>
    </div>
  )
}

export default HeroArt
