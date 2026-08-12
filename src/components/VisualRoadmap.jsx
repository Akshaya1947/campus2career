import React, { useState, useMemo, useEffect } from 'react'

const TAG_STYLES = {
  'Core':      { bg: '#e8f5e2', text: '#2a7a2a', border: '#b8ddb0' },
  'Must Know': { bg: '#fff3cd', text: '#7a5a00', border: '#ffc940' },
  'Important': { bg: '#e8f0fd', text: '#1a3a8a', border: '#a8c0f0' },
  'Advanced':  { bg: '#f3e8fd', text: '#5a1a8a', border: '#c8a0f0' },
  'Practical': { bg: '#fde8f0', text: '#8a1a4a', border: '#f0a0c8' },
  'Project':   { bg: '#173d36', text: '#d7ff75', border: '#3a6e5e' },
}

function CheckIcon() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function VisualRoadmap({ subject, completedTopics = {}, onToggleTopic, isAuthenticated = false, onRequestAuth }) {
  const [activeTopic, setActiveTopic] = useState(null)
  const [materials, setMaterials] = useState([])
  const [isLoadingMaterials, setIsLoadingMaterials] = useState(false)

  // Clear materials when modal opens for a different topic
  useEffect(() => {
    setMaterials([])
    setIsLoadingMaterials(false)
  }, [activeTopic])

  const handleFetchMaterials = async () => {
    if (!activeTopic) return
    setIsLoadingMaterials(true)
    try {
      const res = await fetch(`http://localhost:5000/api/materials?topic=${encodeURIComponent(activeTopic.title)}`)
      const data = await res.json()
      setMaterials(data.links || [])
    } catch (err) {
      console.error(err)
      setMaterials([{ title: 'Error fetching materials. Please try again.', url: '#' }])
    } finally {
      setIsLoadingMaterials(false)
    }
  }

  // Calculate statistics
  const allTopics = useMemo(() => {
    const list = []
    subject.roadmap.forEach((phase, phaseIdx) => {
      phase.topics.forEach((t, topicIdx) => {
        list.push({ ...t, phaseName: phase.phase, phaseNumber: phase.phaseNumber, phaseAccent: phase.accent, phaseIdx, topicIdx })
      })
    })
    return list
  }, [subject])

  const totalCount = allTopics.length
  const completedCount = allTopics.filter(t => completedTopics[t.title]).length
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  const handleCompletionToggle = (topicTitle) => {
    if (!isAuthenticated) {
      onRequestAuth?.(topicTitle)
      return
    }

    onToggleTopic?.(topicTitle)
  }

  return (
    <div style={{ background: '#f8faf9', borderRadius: '12px', border: '1px solid #d5dfd9', padding: '28px 24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
      {/* Top Controls & Progress Bar */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#173d36', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
              Interactive Visual Flowchart
            </div>
            <h3 style={{ fontFamily: 'serif', fontSize: '24px', fontWeight: 700, color: '#132f2a', margin: '4px 0 0' }}>
              Overall Subject Roadmap
            </h3>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
            {/* Progress metric pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#173d36', padding: '10px 18px', borderRadius: '30px', color: '#fff' }}>
              <div style={{ fontSize: '12px', fontWeight: 600 }}>
                Progress: <span style={{ color: '#d7ff75', fontFamily: 'monospace', fontWeight: 700 }}>{completedCount}/{totalCount}</span> ({progressPercent}%)
              </div>
              <div style={{ width: '100px', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${progressPercent}%`, height: '100%', background: '#d7ff75', transition: 'width 0.3s ease' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Graph Layout Container */}
      <div style={{ position: 'relative', width: '100%', overflowX: 'auto', paddingBottom: '20px' }}>
        <div style={{ minWidth: '650px', margin: '0 auto', maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '48px', position: 'relative' }}>
          
          {/* Main Trunk Line in Background */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '50%',
              width: '4px',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(180deg, #ffe600 0%, #173d36 50%, #24685e 100%)',
              borderRadius: '2px',
              zIndex: 0,
            }}
          />

          {subject.roadmap.map((phase) => {
            return (
              <div key={phase.phase} style={{ position: 'relative', zIndex: 1 }}>
                
                {/* Main Phase Node Box (Roadmap.sh Style Bold Yellow Box) */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
                  <div
                    style={{
                      background: '#ffe600',
                      border: '2px solid #132f2a',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                      borderRadius: '8px',
                      padding: '12px 28px',
                      textAlign: 'center',
                      cursor: 'default',
                      position: 'relative',
                    }}
                  >
                    <div style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#132f2a', letterSpacing: '1px' }}>
                      Phase {phase.phaseNumber}
                    </div>
                    <h4 style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 800, color: '#132f2a', margin: '2px 0 0' }}>
                      {phase.phase}
                    </h4>
                  </div>
                </div>

                {/* Sub-Topics Tree Grid (2 columns: left and right branching out) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 48px', position: 'relative' }}>
                  
                  {phase.topics.map((topic, topicIdx) => {
                    const isCompleted = !!completedTopics[topic.title]
                    const isRightSide = topicIdx % 2 === 1
                    const tagStyle = TAG_STYLES[topic.tag] || TAG_STYLES['Core']

                    return (
                      <div
                        key={topic.title}
                        style={{
                          gridColumn: isRightSide ? '2' : '1',
                          display: 'flex',
                          justifyContent: isRightSide ? 'flex-start' : 'flex-end',
                          position: 'relative',
                        }}
                      >
                        {/* Connecting Line from Trunk to Card */}
                        <svg
                          style={{
                            position: 'absolute',
                            top: '50%',
                            [isRightSide ? 'left' : 'right']: '-24px',
                            width: '24px',
                            height: '2px',
                            overflow: 'visible',
                            transform: 'translateY(-50%)',
                            zIndex: 0,
                          }}
                        >
                          <line
                            x1="0"
                            y1="0"
                            x2="24"
                            y2="0"
                            stroke="#132f2a"
                            strokeWidth="2"
                            strokeDasharray={isCompleted ? 'none' : '4 3'}
                          />
                          <circle cx={isRightSide ? '0' : '24'} cy="0" r="3" fill="#132f2a" />
                        </svg>

                        {/* Node Card */}
                        <div
                          onClick={() => setActiveTopic({ ...topic, phaseName: phase.phase, phaseNumber: phase.phaseNumber })}
                          style={{
                            width: '100%',
                            maxWidth: '360px',
                            background: isCompleted ? '#f0f9f4' : '#fff',
                            border: isCompleted ? '2px solid #2a7a2a' : '2px solid #132f2a',
                            borderRadius: '8px',
                            padding: '14px 16px',
                            boxShadow: isCompleted ? '0 2px 8px rgba(42,122,42,0.1)' : '0 4px 12px rgba(0,0,0,0.06)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            position: 'relative',
                            zIndex: 2,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)'
                            e.currentTarget.style.boxShadow = '0 6px 18px rgba(19,47,42,0.15)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)'
                            e.currentTarget.style.boxShadow = isCompleted ? '0 2px 8px rgba(42,122,42,0.1)' : '0 4px 12px rgba(0,0,0,0.06)'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              {/* Toggle Checkmark button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleCompletionToggle(topic.title)
                                }}
                                title={isCompleted ? 'Mark as incomplete' : 'Mark as completed'}
                                style={{
                                  width: '20px',
                                  height: '20px',
                                  borderRadius: '50%',
                                  border: isCompleted ? 'none' : '2px solid #7a9e94',
                                  background: isCompleted ? '#2a7a2a' : '#fff',
                                  color: '#fff',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  cursor: 'pointer',
                                  flexShrink: 0,
                                  transition: 'all 0.15s',
                                }}
                              >
                                {isCompleted && <CheckIcon />}
                              </button>

                              <span style={{
                                fontSize: '9px',
                                fontWeight: 800,
                                fontFamily: 'monospace',
                                textTransform: 'uppercase',
                                padding: '2px 7px',
                                borderRadius: '12px',
                                background: tagStyle.bg,
                                color: tagStyle.text,
                                border: `1px solid ${tagStyle.border}`,
                              }}>
                                {topic.tag}
                              </span>
                            </div>
                          </div>

                          <h5 style={{ fontSize: '14px', fontWeight: 700, color: '#132f2a', margin: '0 0 6px', lineHeight: 1.35 }}>
                            {topic.title}
                          </h5>

                          <p style={{
                            fontSize: '12px',
                            color: '#526b64',
                            margin: 0,
                            lineHeight: 1.4,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {topic.what}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal / Drawer for active topic details */}
      {activeTopic && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(14, 43, 39, 0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
          onClick={() => setActiveTopic(null)}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '12px',
              maxWidth: '560px',
              width: '100%',
              padding: '28px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close X */}
            <button
              onClick={() => setActiveTopic(null)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: '#f0f4f2',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 700,
                color: '#132f2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>

            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#24685e', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>
              Phase {activeTopic.phaseNumber}: {activeTopic.phaseName}
            </div>

            <h3 style={{ fontFamily: 'sans-serif', fontSize: '22px', fontWeight: 800, color: '#132f2a', margin: '0 0 16px', lineHeight: 1.2 }}>
              {activeTopic.title}
            </h3>

            <div style={{ marginBottom: '16px' }}>
              <h6 style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#a94e3a', margin: '0 0 4px', letterSpacing: '0.5px' }}>
                What to learn
              </h6>
              <p style={{ fontSize: '14px', color: '#2c403b', lineHeight: 1.6, margin: 0 }}>
                {activeTopic.what}
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h6 style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#24685e', margin: '0 0 4px', letterSpacing: '0.5px' }}>
                How to practise
              </h6>
              <p style={{ fontSize: '14px', color: '#2c403b', lineHeight: 1.6, margin: 0 }}>
                {activeTopic.how}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #e0e8e4' }}>
              <button
                onClick={() => {
                  handleCompletionToggle(activeTopic.title)
                }}
                style={{
                  padding: '10px 18px',
                  borderRadius: '6px',
                  border: completedTopics[activeTopic.title] ? '1px solid #2a7a2a' : '1px solid #132f2a',
                  background: completedTopics[activeTopic.title] ? '#e8f5e2' : '#132f2a',
                  color: completedTopics[activeTopic.title] ? '#2a7a2a' : '#fff',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                {completedTopics[activeTopic.title] ? '✓ Mark as Incomplete' : '✓ Mark as Completed'}
              </button>

              <button
                onClick={handleFetchMaterials}
                disabled={isLoadingMaterials}
                style={{
                  padding: '10px 18px',
                  borderRadius: '6px',
                  border: '1px solid #24685e',
                  background: 'transparent',
                  color: '#24685e',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: isLoadingMaterials ? 'wait' : 'pointer',
                  opacity: isLoadingMaterials ? 0.6 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {isLoadingMaterials ? 'Loading...' : '📚 Find Materials'}
              </button>
            </div>

            {/* Materials List */}
            {materials.length > 0 && (
              <div style={{ marginTop: '16px', padding: '12px', background: '#f5f9f8', borderRadius: '8px', border: '1px solid #d5dfd9' }}>
                <h6 style={{ fontSize: '12px', fontWeight: 700, color: '#132f2a', margin: '0 0 8px' }}>Recommended Resources:</h6>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#2c403b' }}>
                  {materials.map((m, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>
                      <a href={m.url} target="_blank" rel="noreferrer" style={{ color: '#24685e', fontWeight: 600, textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
                        {m.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default VisualRoadmap
