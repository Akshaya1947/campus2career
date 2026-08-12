import React from 'react'

export function CareerDetail({ career }) {
  return (
    <article className="border border-line bg-white shadow-detail-shadow">
      {/* Header */}
      <header className="p-[27px_22px] md:p-[39px_42px_32px] bg-soft-green flex flex-col md:flex-row justify-between gap-[24px] border-b border-line">
        <div>
          <span className="text-coral-alt font-mono text-[10px] tracking-[0.8px] uppercase">
            {career.tag}
          </span>
          <h2 className="font-serif font-bold text-[29px] md:text-[45px] leading-[1.05] tracking-[-1.5px] my-[10px]">
            {career.title}
          </h2>
          <p className="max-w-[650px] text-muted text-[14px] leading-[1.65] m-0">{career.summary}</p>
        </div>
        <div className="min-w-[100px] text-left md:text-right flex flex-col justify-center mt-[18px] md:mt-0">
          <span className="font-mono text-[10px] text-muted uppercase">In-demand focus</span>
          <b className="font-serif font-bold text-[33px] text-teal">2026</b>
        </div>
      </header>

      {/* Brief Explanation */}
      {career.briefExplanation && (
        <div className="p-[27px_22px] md:p-[29px_42px] border-b border-line">
          <div className="flex flex-col md:flex-row gap-[24px]">
            <div className="md:w-[0.7fr] flex-shrink-0">
              <span className="font-mono font-medium text-[11px] text-coral-alt uppercase tracking-[1px]">
                What this role is about
              </span>
              <h3 className="text-[21px] tracking-[-0.6px] mt-[8px] mb-0 font-bold">In a nutshell</h3>
            </div>
            <p className="text-[14px] text-muted leading-[1.75] m-0">{career.briefExplanation}</p>
          </div>
        </div>
      )}

      {/* Salary, Growth, Day in Life - Stats Grid */}
      {(career.salaryRange || career.growthOutlook || career.dayInLife) && (
        <div className="p-[27px_22px] md:p-[29px_42px] border-b border-line">
          <span className="font-mono font-medium text-[11px] text-coral-alt uppercase tracking-[1px] block mb-[16px]">
            Career snapshot
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
            {career.salaryRange && (
              <div style={{ padding: '18px 20px', background: '#f0f9f4', borderRadius: '8px', borderLeft: '3px solid #24685e' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', color: '#24685e', marginBottom: '6px', letterSpacing: '0.5px' }}>
                  Salary Range
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#132f2a', lineHeight: 1.4 }}>
                  {career.salaryRange}
                </div>
              </div>
            )}
            {career.growthOutlook && (
              <div style={{ padding: '18px 20px', background: '#fdf7ef', borderRadius: '8px', borderLeft: '3px solid #a94e3a' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', color: '#a94e3a', marginBottom: '6px', letterSpacing: '0.5px' }}>
                  Growth Outlook
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#132f2a', lineHeight: 1.4 }}>
                  {career.growthOutlook}
                </div>
              </div>
            )}
            {career.topCompanies && (
              <div style={{ padding: '18px 20px', background: '#f4f1fd', borderRadius: '8px', borderLeft: '3px solid #5a1a8a' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', color: '#5a1a8a', marginBottom: '6px', letterSpacing: '0.5px' }}>
                   Top Companies
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#132f2a', lineHeight: 1.5 }}>
                  {career.topCompanies.join(' · ')}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Day in the Life */}
      {career.dayInLife && (
        <div className="p-[27px_22px] md:p-[29px_42px] border-b border-line">
          <div className="flex flex-col md:flex-row gap-[24px]">
            <div className="md:min-w-[200px] flex-shrink-0">
              <span className="font-mono font-medium text-[11px] text-coral-alt uppercase tracking-[1px]">
                A day in the life
              </span>
              <h3 className="text-[21px] tracking-[-0.6px] mt-[8px] mb-0 font-bold">What you'll do</h3>
            </div>
            <p className="text-[14px] text-muted leading-[1.75] m-0">{career.dayInLife}</p>
          </div>
        </div>
      )}

      {/* Core Requirements */}
      <div className="p-[27px_22px] md:p-[29px_42px] grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-[30px] border-b border-line">
        <div>
          <span className="font-mono font-medium text-[11px] text-coral-alt uppercase tracking-[1px]">
            What employers look for
          </span>
          <h3 className="text-[21px] tracking-[-0.6px] mt-[8px] mb-0 font-bold">Core requirements</h3>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-[22px] gap-y-[10px] p-0 m-0 list-none">
          {career.requirements.map((requirement) => (
            <li key={requirement} className="text-[13px] text-muted leading-[1.5] flex items-start">
              <span className="text-teal font-extrabold mr-[9px]">✓</span>
              <span>{requirement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Subject Preparation */}
      <div className="p-[27px_22px] md:p-[36px_42px_42px]">
        <div className="flex flex-col md:flex-row justify-between gap-[25px] items-start md:items-end mb-[24px]">
          <div>
            <span className="font-mono font-medium text-[11px] text-coral-alt uppercase tracking-[1px]">
              Your subject preparation
            </span>
            <h3 className="text-[21px] tracking-[-0.6px] mt-[8px] mb-0 font-bold">
              Topics to cover before applying
            </h3>
          </div>
          <p className="max-w-[350px] text-muted text-[13px] leading-[1.6] m-0 mt-[15px] md:mt-0">
            Focus your study on these topics, then use them together in one practical project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
          {career.prep.map(([subject, topics]) => (
            <div className="p-[18px_19px] bg-[#f8f7f2] border-l-[3px] border-lime" key={subject}>
              <b className="text-[14px] text-ink font-bold">{subject}</b>
              <p className="text-[12px] leading-[1.6] text-muted mt-[7px] mb-0">{topics}</p>
            </div>
          ))}
        </div>

        {/* Portfolio Project Recommendation */}
        {career.portfolioProject && (
          <div style={{
            marginTop: '24px',
            padding: '20px 24px',
            background: '#173d36',
            borderRadius: '8px',
            color: '#fff',
          }}>
            <div style={{ fontFamily: 'monospace', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', color: '#d7ff75', letterSpacing: '1px', marginBottom: '8px' }}>
               Recommended Portfolio Project
            </div>
            <p style={{ fontSize: '14px', color: '#c8e0db', lineHeight: 1.7, margin: 0 }}>
              {career.portfolioProject}
            </p>
          </div>
        )}
      </div>
    </article>
  )
}

export default CareerDetail
