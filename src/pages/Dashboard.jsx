import React, { useState, useEffect, useMemo } from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Link } from '../components/Link'
import { subjects } from '../data/subjects'
import { careers } from '../data/careers'
import { authService } from '../services/authService'
import { progressService } from '../services/progressService'
import { AuthModal } from '../components/AuthModal'

// ── Helpers ────────────────────────────────────────────────────────────────────

function getTotalTopics(subject) {
  return subject.roadmap.reduce((sum, phase) => sum + phase.topics.length, 0)
}

function getCompletedCount(completedMap) {
  return Object.values(completedMap || {}).filter(Boolean).length
}

/** Match career.prep subject names to actual subject slugs by name */
function getRecommendedSlugs(career) {
  if (!career) return []
  return career.prep
    .map(([subjectName]) => {
      const match = subjects.find(
        s => s.name.toLowerCase() === subjectName.toLowerCase()
      )
      return match?.slug
    })
    .filter(Boolean)
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function StatPill({ icon, label, value, accent }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: 'rgba(255,255,255,0.09)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: '14px',
      padding: '12px 16px',
      backdropFilter: 'blur(8px)',
      boxSizing: 'border-box',
    }}>
      <span style={{ fontSize: '22px', flexShrink: 0 }}>{icon}</span>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: 'monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: accent, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</div>
        <div style={{ fontSize: '18px', fontWeight: 800, color: '#fff', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</div>
      </div>
    </div>
  )
}

function SubjectCard({ subject, completedTopics, isRecommended, totalTopics }) {
  const completed = getCompletedCount(completedTopics)
  const pct = totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0
  const isStarted = completed > 0

  const statusColor = pct === 100 ? '#d7ff75' : isStarted ? '#e8622a' : '#7a9e94'
  const statusLabel = pct === 100 ? '✓ Completed' : isStarted ? 'In Progress' : 'Not Started'

  return (
    <div
      style={{
        background: '#fff',
        border: isRecommended ? '2px solid #e8622a' : '1px solid #d5dfd9',
        borderRadius: '12px',
        padding: '22px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        position: 'relative',
        transition: 'transform 0.2s, box-shadow 0.2s',
        boxShadow: isRecommended ? '0 0 0 4px rgba(232,98,42,0.08)' : '0 2px 8px rgba(0,0,0,0.02)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 8px 28px rgba(19,47,42,0.12)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = isRecommended ? '0 0 0 4px rgba(232,98,42,0.08)' : '0 2px 8px rgba(0,0,0,0.02)'
      }}
    >
      {/* Recommended badge */}
      {isRecommended && (
        <div style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          background: '#e8622a',
          color: '#fff',
          fontSize: '9px',
          fontWeight: 800,
          fontFamily: 'monospace',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          padding: '3px 8px',
          borderRadius: '20px',
        }}>
          ⭐ Recommended
        </div>
      )}

      {/* Status dot + label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: statusColor, display: 'inline-block', flexShrink: 0 }} />
        <span style={{ fontFamily: 'monospace', fontSize: '10px', color: statusColor, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {statusLabel}
        </span>
      </div>

      {/* Subject name */}
      <h3 style={{ fontFamily: 'serif', fontSize: '19px', fontWeight: 700, color: '#132f2a', margin: '0 0 6px', lineHeight: 1.2, paddingRight: isRecommended ? '80px' : '0' }}>
        {subject.name}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '12px', color: '#7a9e94', lineHeight: 1.5, margin: '0 0 18px' }}>
        {subject.description}
      </p>

      {/* Progress bar */}
      <div style={{ marginBottom: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, color: '#405650' }}>
            {completed}/{totalTopics} topics
          </span>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: 800, color: pct === 100 ? '#24685e' : '#132f2a' }}>
            {pct}%
          </span>
        </div>
        <div style={{ height: '6px', background: '#e2ebe6', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${pct}%`,
            background: pct === 100 ? 'linear-gradient(90deg, #24685e, #d7ff75)' : pct > 0 ? 'linear-gradient(90deg, #e8622a, #f5a07a)' : 'transparent',
            borderRadius: '3px',
            transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)',
          }} />
        </div>
      </div>

      {/* Phases info */}
      <p style={{ fontSize: '11px', color: '#7a9e94', margin: '0 0 20px', fontFamily: 'monospace' }}>
        {subject.roadmap.length} phases · {subject.roles}
      </p>

      {/* CTA button */}
      <Link
        to={`/subject/${subject.slug}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '9px 18px',
          background: isStarted ? '#132f2a' : 'transparent',
          color: isStarted ? '#fff' : '#132f2a',
          border: '1px solid #132f2a',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: 700,
          textDecoration: 'none',
          alignSelf: 'flex-start',
          marginTop: 'auto',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#24685e'
          e.currentTarget.style.borderColor = '#24685e'
          e.currentTarget.style.color = '#fff'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = isStarted ? '#132f2a' : 'transparent'
          e.currentTarget.style.borderColor = '#132f2a'
          e.currentTarget.style.color = isStarted ? '#fff' : '#132f2a'
        }}
      >
        {pct === 100 ? '✓ Review' : isStarted ? 'Resume →' : 'Start learning →'}
      </Link>
    </div>
  )
}

// ── Main Dashboard ─────────────────────────────────────────────────────────────

export function Dashboard() {
  const [currentUser, setCurrentUser] = useState(() => authService.getCurrentUser())
  const [allProgress, setAllProgress] = useState({})
  const [loading, setLoading] = useState(true)
  const [careerGoal, setCareerGoal] = useState(() => localStorage.getItem('c2c_career_goal') || '')
  const [authModalOpen, setAuthModalOpen] = useState(false)

  const allSlugs = subjects.map(s => s.slug)

  // Load all subject progress on mount
  useEffect(() => {
    setLoading(true)
    progressService.loadAllProgress(allSlugs).then(data => {
      setAllProgress(data)
      setLoading(false)
    })
  }, [currentUser?.id])

  const handleCareerChange = (e) => {
    const val = e.target.value
    setCareerGoal(val)
    localStorage.setItem('c2c_career_goal', val)
  }

  const selectedCareer = useMemo(() =>
    careers.find(c => c.id === careerGoal) || null,
    [careerGoal]
  )

  const recommendedSlugs = useMemo(() =>
    getRecommendedSlugs(selectedCareer),
    [selectedCareer]
  )

  // Global stats
  const stats = useMemo(() => {
    let totalCompleted = 0
    let subjectsStarted = 0
    let subjectsCompleted = 0
    subjects.forEach(s => {
      const sp = allProgress[s.slug] || {}
      const count = getCompletedCount(sp)
      const total = getTotalTopics(s)
      if (count > 0) subjectsStarted++
      if (count === total && total > 0) subjectsCompleted++
      totalCompleted += count
    })
    return { totalCompleted, subjectsStarted, subjectsCompleted }
  }, [allProgress])

  // ── Guest / Not logged in ───────────────────────────────────────────────────
  if (!currentUser) {
    return (
      <div style={{ background: '#f4f7f5', minHeight: '100vh' }}>
        <Nav onAuthChange={setCurrentUser} />
        <main>
          <section style={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
            textAlign: 'center',
            padding: '60px 24px',
          }}>
            <div style={{ fontSize: '56px' }}>🎓</div>
            <h1 style={{ fontFamily: 'serif', fontSize: '42px', fontWeight: 700, color: '#132f2a', letterSpacing: '-1.5px', margin: 0 }}>
              Your Learning Hub
            </h1>
            <p style={{ color: '#7a9e94', fontSize: '16px', maxWidth: '420px', lineHeight: 1.7, margin: 0 }}>
              Sign in to track your progress across all subjects, set a career goal, and see your personalised learning roadmap.
            </p>
            <button
              style={{
                marginTop: '8px',
                padding: '14px 30px',
                background: '#132f2a',
                color: '#fff',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 4px 14px rgba(19,47,42,0.2)',
                transition: 'all 0.2s ease',
              }}
              onClick={() => setAuthModalOpen(true)}
            >
              Sign In to Continue →
            </button>
          </section>
        </main>
        <Footer />
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          onAuthSuccess={(user) => {
            setCurrentUser(user)
            setAuthModalOpen(false)
          }}
        />
      </div>
    )
  }

  // ── Logged-in Dashboard ────────────────────────────────────────────────────
  const initials = currentUser.name
    ? currentUser.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : 'U'

  return (
    <div style={{ background: '#f4f7f5', minHeight: '100vh' }}>
      <Nav onAuthChange={setCurrentUser} />
      <main>

        {/* ── Hero / Greeting ───────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #0a2520 0%, #132f2a 55%, #1f5249 100%)',
          padding: '44px 0 52px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative orb */}
          <div style={{
            position: 'absolute', width: 380, height: 380, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(215,255,117,0.12), transparent 70%)',
            right: -80, top: -120, pointerEvents: 'none',
          }} />

          <div className="dashboard-content-wrap">
            {/* Avatar + Greeting */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'linear-gradient(135deg, #d7ff75, #a8cc50)',
                color: '#132f2a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '19px', flexShrink: 0,
                boxShadow: '0 4px 16px rgba(215,255,117,0.3)',
              }}>
                {initials}
              </div>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#d7ff75', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>
                  Your Learning Hub
                </div>
                <h1 style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 'clamp(26px, 4.5vw, 44px)', color: '#fff', letterSpacing: '-1.5px', margin: 0, lineHeight: 1.15 }}>
                  Welcome back, {currentUser.name?.split(' ')[0] || 'Student'}! 🎓
                </h1>
              </div>
            </div>

            {/* Stats grid */}
            <div className="dashboard-stats-grid">
              <StatPill icon="✅" label="Topics Done" value={loading ? '—' : stats.totalCompleted} accent="#d7ff75" />
              <StatPill icon="📚" label="Subjects Started" value={loading ? '—' : stats.subjectsStarted} accent="#d7ff75" />
              <StatPill icon="🏆" label="Completed" value={loading ? '—' : stats.subjectsCompleted} accent="#d7ff75" />
              <StatPill icon="🎯" label="Career Goal" value={selectedCareer ? selectedCareer.title.split(' ').slice(0, 2).join(' ') : 'Not set'} accent="#e8c07a" />
            </div>
          </div>
        </section>

        {/* ── Career Goal Selector ───────────────────────────────────── */}
        <section style={{ padding: '32px 0 0' }}>
          <div className="dashboard-content-wrap">
            <div className="dashboard-goal-box">
              <div style={{ flex: 1, minWidth: '240px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#e8622a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                  Personalise your roadmap
                </div>
                <h2 style={{ fontFamily: 'serif', fontWeight: 700, fontSize: '21px', color: '#132f2a', margin: 0, letterSpacing: '-0.5px' }}>
                  What's your career goal?
                </h2>
                {selectedCareer && (
                  <p style={{ fontSize: '13px', color: '#7a9e94', margin: '4px 0 0', lineHeight: 1.5 }}>
                    {selectedCareer.summary}
                  </p>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, minWidth: '240px', maxWidth: '400px' }}>
                <select
                  value={careerGoal}
                  onChange={handleCareerChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d5dfd9',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#132f2a',
                    background: '#f8faf9',
                    cursor: 'pointer',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23132f2a' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 14px center',
                    paddingRight: '36px',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="" style={{ background: '#132f2a', color: '#fff' }}>— Pick a career goal —</option>
                  {careers.map(c => (
                    <option key={c.id} value={c.id} style={{ background: '#132f2a', color: '#fff' }}>{c.title}</option>
                  ))}
                </select>

                {selectedCareer && recommendedSlugs.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {recommendedSlugs.map(slug => {
                      const sub = subjects.find(s => s.slug === slug)
                      return sub ? (
                        <span key={slug} style={{
                          padding: '4px 10px',
                          background: '#fff3ec',
                          border: '1px solid #f5c4aa',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#a94e3a',
                          fontFamily: 'monospace',
                        }}>
                          {sub.name}
                        </span>
                      ) : null
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Subjects Progress Grid ─────────────────────────────────── */}
        <section style={{ padding: '36px 0 80px' }}>
          <div className="dashboard-content-wrap">
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#e8622a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                All subjects
              </div>
              <h2 style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 'clamp(24px, 4vw, 38px)', color: '#132f2a', letterSpacing: '-1.2px', margin: 0, lineHeight: 1.15 }}>
                {selectedCareer
                  ? <>Your path to <em style={{ color: '#e8622a', fontStyle: 'italic' }}>{selectedCareer.title.split(' ').slice(0, 3).join(' ')}</em></>
                  : 'Your progress, all subjects.'
                }
              </h2>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: '#7a9e94', fontFamily: 'monospace', fontSize: '13px' }}>
                Loading progress...
              </div>
            ) : (
              <div className="dashboard-cards-grid">
                {/* Recommended subjects first if a career goal is set */}
                {(selectedCareer
                  ? [
                      ...subjects.filter(s => recommendedSlugs.includes(s.slug)),
                      ...subjects.filter(s => !recommendedSlugs.includes(s.slug)),
                    ]
                  : subjects
                ).map(subject => (
                  <SubjectCard
                    key={subject.slug}
                    subject={subject}
                    completedTopics={allProgress[subject.slug] || {}}
                    isRecommended={recommendedSlugs.includes(subject.slug)}
                    totalTopics={getTotalTopics(subject)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .dashboard-content-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .dashboard-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
        }
        .dashboard-goal-box {
          background: #fff;
          border: 1px solid #d5dfd9;
          borderRadius: 14px;
          padding: 24px 28px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
          justify-content: space-between;
        }
        .dashboard-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 18px;
        }
        @media (max-width: 767px) {
          .dashboard-content-wrap {
            padding: 0 16px;
          }
          .dashboard-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .dashboard-goal-box {
            padding: 18px 16px;
          }
          .dashboard-cards-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </div>
  )
}

export default Dashboard
