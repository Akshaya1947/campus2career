import React, { useState, useEffect } from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Link } from '../components/Link'
import { VisualRoadmap } from '../components/VisualRoadmap'
import { AIChatBuddy } from '../components/AIChatBuddy'
import { AuthModal } from '../components/AuthModal'
import { authService } from '../services/authService'
import { progressService } from '../services/progressService'

const TAG_COLORS = {
  'Core':      { bg: '#e8f5e2', text: '#2a7a2a', border: '#b8ddb0' },
  'Must Know': { bg: '#fff3cd', text: '#7a5a00', border: '#ffc940' },
  'Important': { bg: '#e8f0fd', text: '#1a3a8a', border: '#a8c0f0' },
  'Advanced':  { bg: '#f3e8fd', text: '#5a1a8a', border: '#c8a0f0' },
  'Practical': { bg: '#fde8f0', text: '#8a1a4a', border: '#f0a0c8' },
  'Project':   { bg: '#173d36', text: '#d7ff75', border: '#3a6e5e' },
}

function TopicCard({ topic, globalIndex, isCompleted, onToggle }) {
  const tag = TAG_COLORS[topic.tag] || TAG_COLORS['Core']
  return (
    <div
      style={{
        background: isCompleted ? '#f0fbf6' : '#fff',
        border: isCompleted ? '1.5px solid #2a7a2a' : '1px solid #d5dfd9',
        borderRadius: '8px',
        padding: '22px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(20,60,50,0.12)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Topic number + Completion button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <button
          onClick={() => onToggle?.(topic.title)}
          style={{
            background: isCompleted ? '#2a7a2a' : '#fff',
            border: isCompleted ? '1.5px solid #2a7a2a' : '1.5px solid #9fb5ab',
            color: isCompleted ? '#fff' : 'transparent',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 800,
            transition: 'all 0.15s ease',
            padding: 0,
          }}
          title={isCompleted ? 'Completed (Click to unmark)' : 'Click to mark completed'}
        >
          ✓
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#7a9e94', fontWeight: 600 }}>
            {String(globalIndex + 1).padStart(2, '0')}
          </span>
          <span style={{
            fontSize: '10px',
            fontWeight: 700,
            fontFamily: 'monospace',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            padding: '3px 8px',
            borderRadius: '20px',
            background: tag.bg,
            color: tag.text,
            border: `1px solid ${tag.border}`,
          }}>
            {topic.tag}
          </span>
        </div>
      </div>

      {/* Title */}
      <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#132f2a', margin: '0 0 14px 0', lineHeight: 1.3 }}>
        {topic.title}
      </h4>

      {/* What to learn */}
      <div style={{ marginBottom: '10px' }}>
        <span style={{ display: 'block', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#a94e3a', marginBottom: '4px' }}>
          What to learn
        </span>
        <p style={{ fontSize: '13px', color: '#405650', lineHeight: 1.6, margin: 0 }}>{topic.what}</p>
      </div>

      {/* How to learn */}
      <div>
        <span style={{ display: 'block', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#24685e', marginBottom: '4px' }}>
          How to practise
        </span>
        <p style={{ fontSize: '13px', color: '#405650', lineHeight: 1.6, margin: 0 }}>{topic.how}</p>
      </div>
    </div>
  )
}

export function SubjectPage({ subject }) {
  const [viewMode, setViewMode] = useState('visual') // 'visual' or 'list'
  const [currentUser, setCurrentUser] = useState(() => authService.getCurrentUser())
  const [completedTopics, setCompletedTopics] = useState({})
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [pendingTopicToComplete, setPendingTopicToComplete] = useState(null)

  // Load progress from server (or localStorage fallback) whenever user or subject changes
  useEffect(() => {
    progressService.loadProgress(subject.slug).then(topics => {
      setCompletedTopics(topics)
    })
  }, [subject.slug, currentUser?.id])

  const [activeTopicTitle, setActiveTopicTitle] = useState('')
  const [activePhaseName, setActivePhaseName] = useState(
    subject?.roadmap?.[0]?.phase || ''
  )

  const handleToggleTopic = (topicTitle) => {
    if (!currentUser) {
      setPendingTopicToComplete(topicTitle)
      setAuthModalOpen(true)
      return
    }

    setActiveTopicTitle(topicTitle)
    setCompletedTopics(prev => {
      const updated = { ...prev, [topicTitle]: !prev[topicTitle] }
      progressService.saveProgress(subject.slug, updated)
      return updated
    })
  }

  const [openPhases, setOpenPhases] = useState(() => {
    const init = {}
    subject.roadmap.forEach((_, i) => { init[i] = true })
    return init
  })

  const togglePhase = (i) => setOpenPhases(prev => ({ ...prev, [i]: !prev[i] }))

  // Compute global topic index offset per phase
  const phaseOffsets = subject.roadmap.reduce((acc, phase, i) => {
    acc[i] = i === 0 ? 0 : acc[i - 1] + subject.roadmap[i - 1].topics.length
    return acc
  }, {})

  const totalTopics = subject.roadmap.reduce((s, p) => s + p.topics.length, 0)

  return (
    <div style={{ background: '#f4f7f5', color: '#132f2a', minHeight: '100vh' }}>
      <Nav onAuthChange={setCurrentUser} />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(120deg, #0e2b27 0%, #1f5249 100%)',
          padding: '54px 0 60px',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#d7ff75', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
              Full Learning Roadmap
            </div>
            <h1 style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 'clamp(36px, 6vw, 70px)', color: '#fff', letterSpacing: '-2.5px', margin: '0 0 14px', lineHeight: 1.05, maxWidth: 820 }}>
              {subject.name}
            </h1>
            <p style={{ color: '#c8e0db', fontSize: '16px', maxWidth: 680, lineHeight: 1.7, margin: '0 0 28px' }}>
              {subject.relevance}
            </p>

            {/* Stats bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', paddingTop: '22px', borderTop: '1px solid #3a6e5e' }}>
              <div>
                <b style={{ display: 'block', color: '#d7ff75', fontFamily: 'monospace', fontSize: '11px', textTransform: 'uppercase', marginBottom: '3px' }}>Phases</b>
                <span style={{ color: '#fff', fontSize: '14px' }}>{subject.roadmap.length} phases</span>
              </div>
              <div>
                <b style={{ display: 'block', color: '#d7ff75', fontFamily: 'monospace', fontSize: '11px', textTransform: 'uppercase', marginBottom: '3px' }}>Topics</b>
                <span style={{ color: '#fff', fontSize: '14px' }}>{totalTopics} topics with videos</span>
              </div>
              <div>
                <b style={{ display: 'block', color: '#d7ff75', fontFamily: 'monospace', fontSize: '11px', textTransform: 'uppercase', marginBottom: '3px' }}>Career Paths</b>
                <span style={{ color: '#fff', fontSize: '14px' }}>{subject.roles}</span>
              </div>
              <div>
                <b style={{ display: 'block', color: '#d7ff75', fontFamily: 'monospace', fontSize: '11px', textTransform: 'uppercase', marginBottom: '3px' }}>Companies</b>
                <span style={{ color: '#fff', fontSize: '14px' }}>{subject.companies}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Roadmap ──────────────────────────────────────── */}
        <section style={{ padding: '56px 0 90px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>

            {/* Section header + View Switcher */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginBottom: '36px' }}>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#a94e3a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                  Your Learning Path
                </div>
                <h2 style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1.5px', color: '#132f2a', margin: 0, lineHeight: 1.1 }}>
                  From first concept to real project.
                </h2>
              </div>

              {/* View Toggle Buttons */}
              <div style={{ display: 'inline-flex', background: '#e2ebe6', padding: '4px', borderRadius: '30px', border: '1px solid #c0d2ca', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' }}>
                <button
                  onClick={() => setViewMode('visual')}
                  style={{
                    padding: '9px 20px',
                    borderRadius: '24px',
                    border: 'none',
                    background: viewMode === 'visual' ? '#132f2a' : 'transparent',
                    color: viewMode === 'visual' ? '#fff' : '#435a54',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    boxShadow: viewMode === 'visual' ? '0 2px 8px rgba(19,47,42,0.2)' : 'none',
                  }}
                >
                  <span>🗺️</span> Visual Flowchart
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  style={{
                    padding: '9px 20px',
                    borderRadius: '24px',
                    border: 'none',
                    background: viewMode === 'list' ? '#132f2a' : 'transparent',
                    color: viewMode === 'list' ? '#fff' : '#435a54',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    boxShadow: viewMode === 'list' ? '0 2px 8px rgba(19,47,42,0.2)' : 'none',
                  }}
                >
                  <span>📋</span> Detailed List
                </button>
              </div>
            </div>

            {/* Conditionally Render Visual Roadmap or List View */}
            {viewMode === 'visual' ? (
              <VisualRoadmap
                subject={subject}
                completedTopics={completedTopics}
                onToggleTopic={handleToggleTopic}
                isAuthenticated={Boolean(currentUser)}
                onRequestAuth={handleToggleTopic}
              />
            ) : (
              /* Phase list */
              subject.roadmap.map((phase, phaseIdx) => (
                <div
                  key={phase.phase}
                  style={{
                    marginBottom: '28px',
                    border: '1px solid #ccd7d0',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: '#fff',
                  }}
                >
                  {/* Phase header (clickable) */}
                  <button
                    onClick={() => togglePhase(phaseIdx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '20px 24px',
                      background: phase.bg,
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      borderBottom: openPhases[phaseIdx] ? `2px solid ${phase.accent}20` : 'none',
                      transition: 'background 0.2s',
                    }}
                  >
                    {/* Phase number badge */}
                    <div style={{
                      flexShrink: 0,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: phase.accent,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      fontSize: '14px',
                    }}>
                      {String(phase.phaseNumber).padStart(2, '0')}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: phase.accent, fontWeight: 700 }}>
                          Phase {phase.phaseNumber}
                        </span>
                        <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#7a9e94' }}>
                          {phase.topics.length} topics
                        </span>
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#132f2a', margin: '3px 0 0' }}>
                        {phase.phase}
                      </h3>
                      {openPhases[phaseIdx] && (
                        <p style={{ fontSize: '13px', color: '#435a54', margin: '4px 0 0', lineHeight: 1.5 }}>
                          {phase.description}
                        </p>
                      )}
                    </div>

                    {/* Chevron */}
                    <div style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: '#fff',
                      border: `1px solid ${phase.accent}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.25s',
                      transform: openPhases[phaseIdx] ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: phase.accent,
                      fontSize: '12px',
                    }}>
                      ▼
                    </div>
                  </button>

                  {/* Topic cards grid */}
                  {openPhases[phaseIdx] && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                      gap: '16px',
                      padding: '20px 24px 24px',
                      background: '#fafcfb',
                    }}>
                      {phase.topics.map((topic, topicIdx) => (
                        <TopicCard
                          key={topic.title}
                          topic={topic}
                          globalIndex={phaseOffsets[phaseIdx] + topicIdx}
                          isCompleted={Boolean(completedTopics[topic.title])}
                          onToggle={handleToggleTopic}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}

            {/* Completion CTA */}
            <div style={{
              background: '#173d36',
              borderRadius: '8px',
              padding: '40px',
              color: '#fff',
              marginTop: '20px',
            }}>
              <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#d7ff75', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Roadmap complete · {totalTopics} topics covered
              </div>
              <h2 style={{ fontFamily: 'serif', fontWeight: 700, fontSize: '38px', color: '#fff', margin: '0 0 10px', letterSpacing: '-1px' }}>
                Now make it yours.
              </h2>
              <p style={{ color: '#c8e0db', maxWidth: 580, fontSize: '14px', lineHeight: 1.65, margin: '0 0 24px' }}>
                Turn your learning into evidence: build a focused project, publish it with a clear README, and explain the design choices you made.
              </p>
              <Link
                to="/"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  borderBottom: '1px solid #d7ff75',
                  paddingBottom: '3px',
                }}
              >
                ← Back to all subjects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatBuddy
        subject={subject}
        activePhaseName={activePhaseName}
        activeTopicTitle={activeTopicTitle}
      />
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => {
          setAuthModalOpen(false)
          setPendingTopicToComplete(null)
        }}
        onAuthSuccess={(user) => {
          setCurrentUser(user)
          if (pendingTopicToComplete) {
            setActiveTopicTitle(pendingTopicToComplete)
            setCompletedTopics(prev => {
              const updated = { ...prev, [pendingTopicToComplete]: true }
              progressService.saveProgress(subject.slug, updated)
              return updated
            })
            setPendingTopicToComplete(null)
          }
          setAuthModalOpen(false)
        }}
      />
    </div>
  )
}

export default SubjectPage
