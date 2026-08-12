import React from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { HeroArt } from '../components/HeroArt'
import { Subjects } from '../components/Subjects'
import { Link } from '../components/Link'
import { CompanyLogo } from '../components/CompanyLogo'
import { AIChatBuddy } from '../components/AIChatBuddy'

export function Home() {
  return (
    <>
      <Nav />
      <main>
        <div className="max-w-[1200px] mx-auto px-5 md:px-[28px]">
          <section id="home" className="min-h-0 md:min-h-[630px] py-[70px] md:py-[104px_0_74px] grid grid-cols-1 md:grid-cols-[1.12fr_0.88fr] items-center gap-[10px] md:gap-[50px] overflow-hidden">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[1px] text-coral-alt flex items-center gap-[9px] before:content-[''] before:w-[28px] before:h-[1px] before:bg-coral-alt">
                Your next chapter starts here
              </div>
              <h1 className="font-serif font-bold text-[52px] md:text-[94px] leading-[0.98] tracking-[-2.5px] md:tracking-[-4px] my-[17px] md:my-[22px]">
                Campus<em className="text-teal not-italic">2</em>Career
              </h1>
              <p className="max-w-[550px] text-[16px] leading-[1.75] text-muted mb-[33px]">
                <strong className="text-ink font-bold">Connecting Classroom Knowledge with Real-World Industry Skills.</strong>
                <br />
                Explore academic subjects, discover career opportunities, understand industry expectations, and connect with alumni.
              </p>
              <div className="flex flex-wrap gap-[12px]">
                <a
                  className="border border-ink bg-ink text-white px-[20px] py-[14px] no-underline font-extrabold text-[13px] transition-all duration-250 inline-flex items-center gap-[10px] hover:-translate-y-[3px] hover:bg-teal hover:shadow-button-lime"
                  href="#subjects"
                >
                  Explore Subjects <span>↓</span>
                </a>
                <Link
                  className="border border-ink bg-transparent text-ink px-[20px] py-[14px] no-underline font-extrabold text-[13px] transition-all duration-250 inline-flex items-center gap-[10px] hover:-translate-y-[3px] hover:shadow-button-lime"
                  to="/careers"
                >
                  Explore Careers <span>→</span>
                </Link>
                <Link
                  className="border border-[#e8622a] bg-[#e8622a] text-white px-[20px] py-[14px] no-underline font-extrabold text-[13px] transition-all duration-250 inline-flex items-center gap-[10px] hover:-translate-y-[3px] hover:bg-[#c94d1b] hover:shadow-button-lime"
                  to="/placements"
                >
                  🎯 Company Matrix <span className="bg-white/20 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded">Top 5</span>
                </Link>
              </div>
            </div>
            <HeroArt />
          </section>
        </div>

        {/* 🏢 Campus Placement Hub Banner */}
        <section className="py-[36px] bg-[#edf6f4] border-y border-[#ccd8d2]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-[28px]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#24685e] mb-1">
                  <span>🎯 2026 Campus Recruitment Hub</span>
                  <span className="bg-[#24685e] text-[#d7ff75] text-[10px] px-2 py-0.5 rounded-full font-sans">Live Gap Engine</span>
                </div>
                <h2 className="text-[24px] md:text-[30px] font-bold text-[#132f2a] font-serif leading-tight">
                  Target Company Placement & Skill Gap Matrix
                </h2>
                <p className="text-[14px] text-[#4d5d57] max-w-[650px] mt-1 mb-0">
                  Compare your roadmap progress against the exact technical requirements of <strong>TCS, Cognizant, Accenture, Wipro, and Soliton</strong>.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#ccd8d2] shadow-sm">
                  <CompanyLogo id="tcs" size={32} />
                  <CompanyLogo id="cognizant" size={32} />
                  <CompanyLogo id="accenture" size={32} />
                  <CompanyLogo id="wipro" size={32} />
                  <CompanyLogo id="soliton" size={32} />
                </div>

                <Link
                  to="/placements"
                  className="bg-[#132f2a] text-[#d7ff75] hover:bg-[#1c453e] px-5 py-3 rounded-xl font-extrabold text-[13px] no-underline inline-flex items-center gap-2 shadow-md transition-all hover:-translate-y-0.5"
                >
                  <span>Check Your Readiness</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Subjects />

        <section id="careers" className="py-[70px] md:py-[92px] bg-ink text-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-[28px]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-[30px] items-start md:items-center">
              <div>
                <div className="font-mono font-medium text-[11px] text-lime uppercase tracking-[1px]">
                  Career discovery
                </div>
                <h2 className="font-serif font-bold text-[36px] md:text-[60px] leading-[1] tracking-[-2px] my-[10px]">
                  Find the work that
                  <br />
                  moves you forward.
                </h2>
                <p className="text-[#bfd0ca] max-w-[560px] leading-[1.7] text-[14px] md:text-[16px] m-0">
                  Match your strengths with in-demand roles, understand the skills employers expect, and start shaping your path.
                </p>
              </div>
              <Link
                to="/careers"
                className="border border-lime bg-lime text-ink px-[20px] py-[14px] no-underline font-extrabold text-[13px] whitespace-nowrap inline-flex items-center gap-[10px] transition-all duration-250 hover:-translate-y-[3px] hover:shadow-button-coral"
              >
                Explore careers <span>→</span>
              </Link>
            </div>
          </div>
        </section>
        <AIChatBuddy />
      </main>
      <Footer />
    </>
  )
}

export default Home
