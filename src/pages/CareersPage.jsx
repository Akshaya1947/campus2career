import React, { useState, useEffect } from 'react'
import { careersByBranch } from '../data/careers'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { CareerDetail } from '../components/CareerDetail'
import { useAuth } from '../context/AuthContext'

export function CareersPage() {
  const { currentUser } = useAuth()
  const userCourse = currentUser?.course || 'CSE'
  const [selectedCourse, setSelectedCourse] = useState(userCourse)
  const branchCareers = careersByBranch[selectedCourse] || careersByBranch['CSE']
  const [activeCareer, setActiveCareer] = useState(branchCareers[0])

  useEffect(() => {
    setActiveCareer(branchCareers[0])
  }, [selectedCourse])

  return (
    <div className="bg-cream min-h-screen">
      <Nav />
      <main className="careers-page">
        <section className="py-[60px] md:py-[82px_0_88px] bg-careers-bg border-b border-line relative overflow-hidden">
          {/* Decorative background orb */}
          <div className="absolute w-[230px] h-[230px] md:w-[420px] md:h-[420px] rounded-full bg-lime -right-[110px] md:-right-[145px] -top-[95px] md:-top-[190px] opacity-[0.82] pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto px-5 md:px-[28px] relative z-10">
            <div className="font-mono font-medium text-[11px] text-coral-alt uppercase tracking-[1px]">
              Career intelligence · 2026
            </div>
            <h1 className="font-serif font-bold text-[48px] md:text-[82px] leading-[1] tracking-[-2px] my-[14px] md:my-[19px] max-w-[760px]">
              Choose a career
              <br />
              <em className="text-coral-alt italic">with a clear path.</em>
            </h1>
            <p className="max-w-[640px] text-muted text-[16px] leading-[1.75] m-0">
              Explore high-growth technology roles and see exactly which subjects and topics will strengthen your preparation.
            </p>
            <div className="mt-[31px] p-[13px_16px] border-l-[3px] border-teal max-w-[720px] bg-market-bg text-muted text-[12px] leading-[1.6]">
              Based on global and India-focused 2025–26 skills reports, with AI, data, cloud, cybersecurity, and software skills consistently prioritised.
            </div>
          </div>
        </section>

        <section className="py-[60px] md:py-[88px_0_110px]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-[28px]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[28px] mb-[38px]">
              <div>
                <div className="font-mono font-medium text-[11px] text-coral-alt uppercase tracking-[1px]">
                  Career explorer
                </div>
                <h2 className="font-serif font-bold text-[34px] md:text-[53px] leading-[1] tracking-[-2px] mt-[10px] mb-0">
                  Where could your
                  <br />
                  learning take you?
                </h2>
              </div>
              <div className="flex flex-col items-end gap-3 max-w-[370px] mt-[17px] md:mt-0">
                <p className="text-muted text-[14px] leading-[1.7] m-0">
                  Select a role to reveal the entry requirements and subject-by-subject preparation map.
                </p>
                <div className="w-full flex items-center justify-between bg-paper border border-line rounded-md px-3 py-2 mt-2">
                  <span className="text-sm font-semibold text-ink mr-2">Course:</span>
                  <select 
                    className="bg-transparent border-none outline-none text-sm text-ink cursor-pointer flex-1"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                  >
                    {Object.keys(careersByBranch).map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[9px] mb-[24px]">
              {branchCareers.map((career, index) => {
                const isSelected = activeCareer.slug === career.slug
                return (
                  <button
                    type="button"
                    key={career.slug}
                    className={`border min-h-[88px] md:min-h-[108px] p-[16px] text-left font-bold text-[13px] leading-[1.35] font-sans cursor-pointer transition-all duration-220 ${
                      isSelected
                        ? 'bg-ink text-white border-ink shadow-chip-lime'
                        : 'bg-transparent border-line text-ink hover:border-teal hover:-translate-y-[3px]'
                    }`}
                    onClick={() => setActiveCareer(career)}
                  >
                    <span className="block font-mono text-[10px] text-coral-alt mb-[13px]">
                      0{index + 1}
                    </span>
                    {career.title}
                  </button>
                )
              })}
            </div>

            <CareerDetail career={activeCareer} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CareersPage
