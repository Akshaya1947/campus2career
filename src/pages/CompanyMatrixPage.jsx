import React, { useState, useEffect } from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Link } from '../components/Link'
import { companies } from '../data/companies'
import { subjects } from '../data/subjects'
import { progressService } from '../services/progressService'
import { authService } from '../services/authService'
import { AIChatBuddy } from '../components/AIChatBuddy'
import { CompanyLogo } from '../components/CompanyLogo'

export function CompanyMatrixPage() {
  const [selectedCompanyId, setSelectedCompanyId] = useState('tcs')
  const [allProgress, setAllProgress] = useState({})
  const [loadingProgress, setLoadingProgress] = useState(true)
  const [filterGap, setFilterGap] = useState('missing') // 'missing' | 'mastered' | 'all'
  const [sprintDone, setSprintDone] = useState({})
  const [aiModalOpen, setAiModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(() => authService.getCurrentUser())

  // Load progress across all subjects
  useEffect(() => {
    async function loadData() {
      setLoadingProgress(true)
      try {
        const slugs = subjects.map(s => s.slug)
        const prog = await progressService.loadAllProgress(slugs)
        setAllProgress(prog || {})
      } catch (err) {
        console.error('Failed to load progress in CompanyMatrix:', err)
      } finally {
        setLoadingProgress(false)
      }
    }
    loadData()
  }, [currentUser])

  const selectedCompany = companies.find(c => c.id === selectedCompanyId) || companies[0]

  // Calculate skill gap metrics for the selected company
  const targetTopics = selectedCompany.targetTopics || []
  
  const evaluatedTopics = targetTopics.map(target => {
    const isCompleted = Boolean(allProgress[target.subjectSlug]?.[target.topicTitle])
    const subjectObj = subjects.find(s => s.slug === target.subjectSlug)
    return {
      ...target,
      isCompleted,
      subjectName: subjectObj ? subjectObj.name : target.subjectSlug,
      subjectOverview: subjectObj ? subjectObj.description : '',
    }
  })

  const masteredTopics = evaluatedTopics.filter(t => t.isCompleted)
  const missingTopics = evaluatedTopics.filter(t => !t.isCompleted)
  const criticalMissing = missingTopics.filter(t => t.priority === 'Critical')

  const readinessPercent = targetTopics.length > 0
    ? Math.round((masteredTopics.length / targetTopics.length) * 100)
    : 0

  // Category breakdowns (DSA, DBMS, OOPS, OS, CN)
  const subjectBreakdowns = [
    { slug: 'data-structures', name: 'Data Structures & Algorithms', short: 'DSA', color: '#24685e' },
    { slug: 'database-management-system', name: 'DBMS & SQL', short: 'DBMS', color: '#a94e3a' },
    { slug: 'object-oriented-programming', name: 'OOPs & Design', short: 'OOPS', color: '#3a5ea9' },
    { slug: 'operating-systems', name: 'Operating Systems', short: 'OS', color: '#7e3aa9' },
    { slug: 'computer-networks', name: 'Computer Networks', short: 'CN', color: '#2a7a2a' },
  ].map(sub => {
    const subTargets = evaluatedTopics.filter(t => t.subjectSlug === sub.slug)
    const subMastered = subTargets.filter(t => t.isCompleted)
    const pct = subTargets.length > 0 ? Math.round((subMastered.length / subTargets.length) * 100) : 0
    return {
      ...sub,
      total: subTargets.length,
      mastered: subMastered.length,
      pct,
    }
  }).filter(sub => sub.total > 0)

  const toggleSprintDay = (day) => {
    setSprintDone(prev => ({
      ...prev,
      [`${selectedCompany.id}_day_${day}`]: !prev[`${selectedCompany.id}_day_${day}`]
    }))
  }

  const displayedTopics = filterGap === 'missing' 
    ? missingTopics 
    : filterGap === 'mastered' 
    ? masteredTopics 
    : evaluatedTopics

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8f6f0' }}>
      <Nav onAuthChange={(u) => setCurrentUser(u)} />

      {/* Hero Header */}
      <section style={{
        background: 'linear-gradient(135deg, #132f2a 0%, #1c453e 100%)',
        color: '#fff',
        padding: '50px 20px 40px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        {/* Background glow accents */}
        <div style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 98, 42, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: -40,
          left: '20%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(215, 255, 117, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 700, color: '#d7ff75', marginBottom: 16, backdropFilter: 'blur(6px)' }}>
            <span>🎯 Campus Placement Intelligence</span>
            <span style={{ background: '#e8622a', color: '#fff', padding: '2px 8px', borderRadius: 10, fontSize: 11 }}>2026 On-Campus Drive</span>
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 12, lineHeight: 1.15 }}>
            Target Company <span style={{ color: '#d7ff75' }}>Skill Gap Matrix</span>
          </h1>

          <p style={{ maxWidth: 780, fontSize: 'clamp(15px, 2vw, 17px)', color: '#d3e2dc', lineHeight: 1.6, margin: 0 }}>
            Compare your roadmap progress against the exact technical syllabus for our college’s top 5 recruiters: 
            <strong> TCS, Cognizant, Accenture, Wipro, and Soliton</strong>. Spot your skill gaps and fast-track your preparation.
          </p>

          {/* Quick stats ribbon */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
            marginTop: 28,
            paddingTop: 20,
            borderTop: '1px solid rgba(255,255,255,0.12)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                🏢
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#a0c4b8', textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 700 }}>5 Top Recruiters</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>TCS · CTS · Accenture · Wipro · Soliton</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(215,255,117,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#d7ff75' }}>
                ⚡
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#a0c4b8', textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 700 }}>Live Gap Engine</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#d7ff75' }}>Connected to your Campus2Career Progress</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(232,98,42,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#ff9870' }}>
                🤖
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#a0c4b8', textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 700 }}>AI Company Drills</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>Simulated Technical Panels</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '36px 20px 60px', width: '100%', boxSizing: 'border-box' }}>
        
        {/* Company Selection Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: 12,
          marginBottom: 32,
        }}>
          {companies.map((comp) => {
            const isSelected = comp.id === selectedCompanyId
            const compTargets = comp.targetTopics || []
            const compMastered = compTargets.filter(t => allProgress[t.subjectSlug]?.[t.topicTitle]).length
            const compPct = compTargets.length > 0 ? Math.round((compMastered / compTargets.length) * 100) : 0

            return (
              <button
                key={comp.id}
                onClick={() => setSelectedCompanyId(comp.id)}
                style={{
                  background: isSelected ? '#fff' : '#ffffffcc',
                  border: isSelected ? `2px solid ${comp.brandColor}` : '1px solid #e0ddd5',
                  borderRadius: 16,
                  padding: '16px 18px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                  boxShadow: isSelected ? `0 8px 24px ${comp.brandColor}22` : '0 2px 8px rgba(0,0,0,0.03)',
                  transform: isSelected ? 'translateY(-3px)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <CompanyLogo id={comp.id} size={36} />
                  <span style={{
                    fontSize: 11,
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: 8,
                    background: isSelected ? comp.bgSoft : '#f1efe9',
                    color: isSelected ? comp.brandColor : '#55635e',
                  }}>
                    {comp.ctcRange.split('–')[1] || comp.ctcRange}
                  </span>
                </div>

                <div style={{ fontSize: 17, fontWeight: 800, color: '#132f2a', marginBottom: 2 }}>
                  {comp.name}
                </div>

                <div style={{ fontSize: 12, color: '#60706a', fontWeight: 500, marginBottom: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {comp.fullName}
                </div>

                {/* Progress bar in tab */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 700, color: '#60706a', marginBottom: 4 }}>
                    <span>Readiness</span>
                    <span style={{ color: compPct >= 70 ? '#15803d' : compPct >= 40 ? '#b45309' : '#b91c1c' }}>
                      {loadingProgress ? '...' : `${compPct}%`}
                    </span>
                  </div>
                  <div style={{ height: 6, background: '#e5e2d8', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${compPct}%`,
                      background: compPct >= 70 ? '#15803d' : compPct >= 40 ? '#f59e0b' : comp.brandColor,
                      borderRadius: 3,
                      transition: 'width 0.4s ease',
                    }} />
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Company Profile Banner */}
        <div style={{
          background: '#fff',
          borderRadius: 20,
          border: '1px solid #e0ddd5',
          padding: '28px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
          marginBottom: 32,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 6,
            height: '100%',
            background: selectedCompany.brandColor,
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
                <CompanyLogo id={selectedCompany.id} size={48} />
                <div>
                  <h2 style={{ fontSize: 24, fontWeight: 800, color: '#132f2a', margin: 0, letterSpacing: '-0.5px' }}>
                    {selectedCompany.name} ({selectedCompany.fullName})
                  </h2>
                  <span style={{ fontSize: 13, fontWeight: 600, color: selectedCompany.brandColor }}>
                    {selectedCompany.tagline}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: 14, color: '#4d5d57', lineHeight: 1.6, margin: '12px 0 16px' }}>
                {selectedCompany.description}
              </p>

              {/* Hiring Tracks */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {selectedCompany.tracks.map((track, i) => (
                  <div key={i} style={{
                    background: selectedCompany.bgSoft,
                    border: `1px solid ${selectedCompany.accentColor}40`,
                    padding: '6px 12px',
                    borderRadius: 10,
                    fontSize: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                  }}>
                    <strong style={{ color: selectedCompany.brandColor }}>{track.name}</strong>
                    <span style={{ color: '#132f2a', fontWeight: 600 }}>({track.ctc})</span>
                    <span style={{ fontSize: 10, padding: '1px 6px', borderRadius: 4, background: '#fff', color: '#60706a', fontWeight: 700 }}>
                      {track.difficulty}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scorecard Widget */}
            <div style={{
              background: 'linear-gradient(135deg, #132f2a 0%, #1e453e 100%)',
              color: '#fff',
              padding: '24px',
              borderRadius: 16,
              boxShadow: '0 8px 24px rgba(19,47,42,0.15)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 12, color: '#a0c4b8', textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 700 }}>
                    Target Readiness
                  </div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: '#d7ff75', lineHeight: 1, marginTop: 4 }}>
                    {loadingProgress ? '--' : `${readinessPercent}%`}
                  </div>
                </div>

                <span style={{
                  padding: '6px 12px',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 800,
                  background: readinessPercent >= 75 ? '#15803d' : readinessPercent >= 45 ? '#d97706' : '#b91c1c',
                  color: '#fff',
                }}>
                  {readinessPercent >= 75 ? '🚀 Drive Ready' : readinessPercent >= 45 ? '📈 Strong Base' : '⚠️ Gaps to Bridge'}
                </span>
              </div>

              <div style={{ margin: '18px 0 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#ccd8d2', marginBottom: 6 }}>
                  <span>{masteredTopics.length} of {targetTopics.length} Topics Mastered</span>
                  <span>{missingTopics.length} Gaps Left</span>
                </div>
                <div style={{ height: 8, background: 'rgba(255,255,255,0.15)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${readinessPercent}%`,
                    background: '#d7ff75',
                    borderRadius: 4,
                    transition: 'width 0.5s ease',
                  }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                <button
                  onClick={() => setAiModalOpen(true)}
                  style={{
                    flex: 1,
                    background: '#e8622a',
                    border: 'none',
                    borderRadius: 10,
                    padding: '10px 14px',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: 13,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    boxShadow: '0 4px 12px rgba(232,98,42,0.3)',
                    transition: 'transform 0.2s',
                  }}
                >
                  <span>🤖 Start {selectedCompany.name} AI Mock</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Subject-wise Competency Breakdown */}
        <div style={{
          background: '#fff',
          borderRadius: 20,
          border: '1px solid #e0ddd5',
          padding: '24px',
          marginBottom: 32,
          boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
        }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: '#132f2a', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>📊</span> {selectedCompany.name} Technical Weightage & Readiness
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16
          }}>
            {subjectBreakdowns.map((sub) => (
              <div
                key={sub.slug}
                style={{
                  background: '#fbfaf7',
                  border: '1px solid #e8e5dc',
                  borderRadius: 14,
                  padding: '14px 16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: sub.color }}>
                    {sub.short}
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: sub.pct === 100 ? '#15803d' : '#60706a' }}>
                    {sub.mastered}/{sub.total} ({sub.pct}%)
                  </span>
                </div>

                <div style={{ fontSize: 13, fontWeight: 700, color: '#132f2a', marginBottom: 10, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {sub.name}
                </div>

                <div style={{ height: 6, background: '#e5e2d8', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${sub.pct}%`,
                    background: sub.color,
                    borderRadius: 3,
                    transition: 'width 0.4s',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Skill Gap Deep Dive & Actionable Roadmaps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          marginBottom: 36,
        }}>
          {/* Left Column: Topics with direct links to subjects */}
          <div style={{
            background: '#fff',
            borderRadius: 20,
            border: '1px solid #e0ddd5',
            padding: '24px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#132f2a', margin: 0 }}>
                  🔍 Skill Gap Breakdown
                </h3>
                <span style={{ fontSize: 12, color: '#60706a' }}>
                  {criticalMissing.length > 0 ? `${criticalMissing.length} critical gaps need immediate attention` : 'All critical fundamentals completed!'}
                </span>
              </div>

              {/* Filter pills */}
              <div style={{ display: 'flex', gap: 6, background: '#f1efe9', padding: 4, borderRadius: 10 }}>
                <button
                  onClick={() => setFilterGap('missing')}
                  style={{
                    background: filterGap === 'missing' ? '#b91c1c' : 'transparent',
                    color: filterGap === 'missing' ? '#fff' : '#60706a',
                    border: 'none',
                    borderRadius: 6,
                    padding: '4px 10px',
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Gaps ({missingTopics.length})
                </button>
                <button
                  onClick={() => setFilterGap('mastered')}
                  style={{
                    background: filterGap === 'mastered' ? '#15803d' : 'transparent',
                    color: filterGap === 'mastered' ? '#fff' : '#60706a',
                    border: 'none',
                    borderRadius: 6,
                    padding: '4px 10px',
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Mastered ({masteredTopics.length})
                </button>
                <button
                  onClick={() => setFilterGap('all')}
                  style={{
                    background: filterGap === 'all' ? '#132f2a' : 'transparent',
                    color: filterGap === 'all' ? '#fff' : '#60706a',
                    border: 'none',
                    borderRadius: 6,
                    padding: '4px 10px',
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  All ({targetTopics.length})
                </button>
              </div>
            </div>

            {/* Topics List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxHeight: 520, overflowY: 'auto', paddingRight: 4 }}>
              {displayedTopics.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: '#60706a' }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>🎉</div>
                  <div style={{ fontWeight: 800, fontSize: 16, color: '#132f2a' }}>No gaps in this category!</div>
                  <div style={{ fontSize: 13, marginTop: 4 }}>You have covered all required topics for this filter.</div>
                </div>
              ) : (
                displayedTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: 12,
                      background: topic.isCompleted ? '#f0fdf4' : topic.priority === 'Critical' ? '#fef2f2' : '#fcfbfa',
                      border: topic.isCompleted ? '1px solid #bbf7d0' : topic.priority === 'Critical' ? '1px solid #fecaca' : '1px solid #e8e5dc',
                      gap: 12,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                      <span style={{ fontSize: 18 }}>
                        {topic.isCompleted ? '✅' : topic.priority === 'Critical' ? '🔴' : '🟡'}
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#132f2a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {topic.topicTitle}
                        </div>
                        <div style={{ fontSize: 12, color: '#60706a', display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                          <span>{topic.subjectName}</span>
                          <span>•</span>
                          <span style={{
                            fontSize: 10,
                            fontWeight: 800,
                            padding: '1px 5px',
                            borderRadius: 4,
                            background: topic.priority === 'Critical' ? '#fee2e2' : '#f1efe9',
                            color: topic.priority === 'Critical' ? '#991b1b' : '#60706a',
                          }}>
                            {topic.priority}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/subject/${topic.subjectSlug}`}
                      style={{
                        flexShrink: 0,
                        fontSize: 12,
                        fontWeight: 700,
                        padding: '6px 12px',
                        borderRadius: 8,
                        background: topic.isCompleted ? '#dcfce7' : '#132f2a',
                        color: topic.isCompleted ? '#166534' : '#fff',
                        textDecoration: 'none',
                        transition: 'opacity 0.2s',
                      }}
                    >
                      {topic.isCompleted ? 'Review' : 'Learn ↗'}
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column: 7-Day Sprint Plan */}
          <div style={{
            background: '#fff',
            borderRadius: 20,
            border: '1px solid #e0ddd5',
            padding: '24px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ marginBottom: 18 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: selectedCompany.bgSoft, color: selectedCompany.brandColor, padding: '4px 10px', borderRadius: 8, fontSize: 11, fontWeight: 800, marginBottom: 6 }}>
                <span>📅 Fast-Track Placement Sprint</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#132f2a', margin: '4px 0 0' }}>
                7-Day {selectedCompany.name} Preparation Sprint
              </h3>
              <p style={{ fontSize: 13, color: '#60706a', margin: '4px 0 0' }}>
                Structured day-by-day plan tailored to crack {selectedCompany.name}’s on-campus assessment.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1, overflowY: 'auto', maxHeight: 520, paddingRight: 4 }}>
              {selectedCompany.sprintPlan.map((sprint) => {
                const isChecked = Boolean(sprintDone[`${selectedCompany.id}_day_${sprint.day}`])
                return (
                  <div
                    key={sprint.day}
                    onClick={() => toggleSprintDay(sprint.day)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      padding: '12px 14px',
                      borderRadius: 12,
                      background: isChecked ? '#f0fdf4' : '#fbfaf7',
                      border: isChecked ? '1px solid #bbf7d0' : '1px solid #e8e5dc',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: isChecked ? '#15803d' : selectedCompany.brandColor,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: 12,
                      flexShrink: 0,
                    }}>
                      {isChecked ? '✓' : `D${sprint.day}`}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: isChecked ? '#15803d' : '#132f2a',
                        textDecoration: isChecked ? 'line-through' : 'none'
                      }}>
                        {sprint.title}
                      </div>
                      <div style={{ fontSize: 12, color: '#60706a', marginTop: 2 }}>
                        {sprint.focus}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Section 4: Recruitment Rounds Timeline */}
        <div style={{
          background: '#fff',
          borderRadius: 20,
          border: '1px solid #e0ddd5',
          padding: '24px',
          marginBottom: 36,
          boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
        }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: '#132f2a', margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>🏢</span> {selectedCompany.name} Campus Recruitment Process & Rounds
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
            position: 'relative'
          }}>
            {selectedCompany.rounds.map((round) => (
              <div
                key={round.roundNumber}
                style={{
                  background: '#fbfaf7',
                  border: '1px solid #e8e5dc',
                  borderRadius: 14,
                  padding: '18px 16px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      background: selectedCompany.brandColor,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 11,
                      fontWeight: 800,
                    }}>
                      R{round.roundNumber}
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#7c8b85', background: '#eeece6', padding: '2px 8px', borderRadius: 6 }}>
                      {round.duration}
                    </span>
                  </div>

                  <div style={{ fontSize: 14, fontWeight: 800, color: '#132f2a', marginBottom: 6 }}>
                    {round.title}
                  </div>

                  <div style={{ fontSize: 12, color: '#55635e', lineHeight: 1.5 }}>
                    {round.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* AI Mock Interview Modal */}
      {aiModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
          <div style={{
            background: '#fff',
            borderRadius: 20,
            maxWidth: 650,
            width: '100%',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '90vh'
          }}>
            <div style={{
              padding: '18px 22px',
              background: '#132f2a',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <CompanyLogo id={selectedCompany.id} size={36} />
                <div>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>
                    {selectedCompany.name} Simulated AI Mock Interview
                  </h3>
                  <span style={{ fontSize: 12, color: '#a0c4b8' }}>
                    Trained on {selectedCompany.fullName} 2026 recruitment pattern
                  </span>
                </div>
              </div>

              <button
                onClick={() => setAiModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: 20,
                  cursor: 'pointer',
                  padding: 4,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
              <div style={{
                background: selectedCompany.bgSoft,
                border: `1px solid ${selectedCompany.accentColor}40`,
                padding: '12px 16px',
                borderRadius: 12,
                fontSize: 13,
                color: '#132f2a',
                lineHeight: 1.5,
                marginBottom: 16,
              }}>
                <strong>🎯 Selected Role Track:</strong> {selectedCompany.tracks[0]?.name || 'Software Engineer'} ({selectedCompany.ctcRange})
                <br />
                The AI Study Buddy will evaluate your answers on <strong>Problem Solving, SQL & DSA, and CS Core Fundamentals</strong>.
              </div>

              {/* Embedded AI Chat component with company context */}
              <AIChatBuddy
                context={{
                  subjectName: `${selectedCompany.name} Technical Placement Interview`,
                  phaseName: `${selectedCompany.fullName} Hiring Track`,
                  topicTitle: `${selectedCompany.name} Core CS & Coding Evaluation`,
                  subjectDescription: `Simulate a real-time ${selectedCompany.name} technical interview. Ask one question at a time from DSA, SQL, OS, or OOPs based on the student's background and provide constructive feedback on their answer.`,
                }
              }
              />
            </div>
          </div>
        </div>
      )
      }
      <Footer />
    </div>
  )
}
export default CompanyMatrixPage