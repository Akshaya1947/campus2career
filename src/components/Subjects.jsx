import React, { useState } from 'react'
import { subjects } from '../data/subjects'
import { Detail } from './Detail'
import { Link } from './Link'

export function Subjects() {
  const [activeSubject, setActiveSubject] = useState(null)

  const toggle = (index) => {
    const next = activeSubject === index ? null : index
    setActiveSubject(next)
    if (next !== null) {
      setTimeout(() => {
        document.getElementById(`subject-card-${next}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 100)
    }
  }

  return (
    <section id="subjects" className="bg-cream py-[70px] md:py-[88px] md:pb-[96px] border-t border-line">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[28px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[28px] md:mb-[39px] gap-5">
          <div>
            <div className="font-mono font-medium text-[11px] text-coral-alt uppercase tracking-[1px]">
              Build your foundation
            </div>
            <h2 className="font-serif font-bold text-[35px] md:text-[56px] leading-[1] tracking-[-2px] mt-[10px] mb-0">
              Subjects that open doors.
            </h2>
          </div>
          <p className="max-w-[330px] m-0 text-muted text-[14px] leading-[1.6]">
            Choose a subject to see its industry context, required skills, and career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subjects.map((subject, index) => {
            const isActive = activeSubject === index
            return (
              <article
                id={`subject-card-${index}`}
                key={subject.slug}
                className={`border border-line p-[25px] min-h-[205px] md:min-h-[228px] flex flex-col relative overflow-hidden transition-all duration-350 ease-in-out ${
                  isActive
                    ? 'col-span-1 md:col-span-2 bg-soft-green shadow-none transform-none'
                    : 'bg-paper hover:-translate-y-1 hover:shadow-card-hover'
                }`}
              >
                <span className="text-coral-alt font-mono text-[11px]">
                  {String(index + 1).padStart(2, '0')} / 05
                </span>
                <h3 className="text-[19px] tracking-[-0.7px] mt-[24px] mb-[10px] leading-[1.25] font-bold">
                  {subject.name}
                </h3>
                <p className="m-0 text-muted text-[13px] leading-[1.65]">{subject.description}</p>
                
                <button
                  type="button"
                  className="bg-transparent border-0 pt-[20px] pb-0 text-ink font-bold text-[13px] font-sans cursor-pointer text-left mt-auto flex items-center"
                  aria-expanded={isActive}
                  onClick={() => toggle(index)}
                >
                  Learn More{' '}
                  <span className={`text-coral-alt ml-[7px] inline-block transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}>
                    ＋
                  </span>
                </button>

                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[12px] overflow-hidden transition-all duration-550 ease-in-out ${
                    isActive ? 'max-h-[600px] opacity-100 mt-[24px]' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <Detail title="Subject overview">{subject.overview}</Detail>
                  <Detail title="Industry relevance">{subject.relevance}</Detail>
                  <Detail title="Job roles">{subject.roles}</Detail>
                  <Detail title="Required skills">{subject.skills}</Detail>
                  <Detail title="Companies using these skills">{subject.companies}</Detail>
                  <Detail title="Related careers">{subject.careers}</Detail>
                </div>

                {isActive && (
                  <Link
                    className="inline-block mt-[22px] text-ink text-[13px] font-extrabold no-underline hover:text-coral-alt transition-colors"
                    to={`/subjects/${subject.slug}`}
                  >
                    View full learning roadmap <span className="text-coral-alt ml-[6px]">→</span>
                  </Link>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Subjects
