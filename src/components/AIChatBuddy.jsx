import React, { useState, useEffect, useRef } from 'react'
import { sendAIMessage } from '../services/aiService'
import { subjects } from '../data/subjects'

// ── Helpers ───────────────────────────────────────────────────────────────────

function SparkleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L13.5 9H21L15 13.5L17 21L12 17L7 21L9 13.5L3 9H10.5L12 2Z"
        fill="currentColor" opacity="0.9" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center', padding: '4px 0' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 7, height: 7, borderRadius: '50%',
          background: '#d7ff75',
          animation: `aiBuddy_bounce 1.2s infinite ease-in-out`,
          animationDelay: `${i * 0.2}s`,
        }} />
      ))}
    </div>
  )
}

function formatMarkdown(text) {
  // Very lightweight: bold (**text**) and code (`code`) rendering
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} style={{ background: 'rgba(215,255,117,0.15)', color: '#d7ff75', padding: '1px 5px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '12px' }}>{part.slice(1, -1)}</code>
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: '#fff' }}>{part.slice(2, -2)}</strong>
    }
    // Handle newlines
    return part.split('\n').map((line, j, arr) => (
      j < arr.length - 1 ? <React.Fragment key={`${i}-${j}`}>{line}<br /></React.Fragment> : <React.Fragment key={`${i}-${j}`}>{line}</React.Fragment>
    ))
  })
}

// ── Quick Prompt Chips ─────────────────────────────────────────────────────────

const QUICK_PROMPTS = [
  { label: '💡 Explain this topic', text: 'Explain the current topic in simple terms with an analogy.' },
  { label: '🧪 Quiz me', text: 'Quiz me on this topic. Ask me one question.' },
  { label: '🌍 Real-world example', text: 'Give me a concrete real-world example of this topic.' },
  { label: '⚡ What to learn next', text: 'What should I focus on learning next after this topic?' },
]

// ── Message Bubble ─────────────────────────────────────────────────────────────

function MessageBubble({ message }) {
  const isUser = message.role === 'user'
  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: '12px',
    }}>
      {!isUser && (
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: 'linear-gradient(135deg, #24685e, #d7ff75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '13px', flexShrink: 0, marginRight: '8px', marginTop: '2px',
        }}>✨</div>
      )}
      <div style={{
        maxWidth: '82%',
        padding: '10px 14px',
        borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        background: isUser
          ? 'linear-gradient(135deg, #e8622a, #f5a07a)'
          : 'rgba(255,255,255,0.08)',
        border: isUser ? 'none' : '1px solid rgba(255,255,255,0.1)',
        color: '#fff',
        fontSize: '13.5px',
        lineHeight: 1.6,
        backdropFilter: isUser ? 'none' : 'blur(4px)',
      }}>
        {formatMarkdown(message.content)}
      </div>
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────────

export function AIChatBuddy({ subject, activePhaseName, activeTopicTitle }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const chatPanelRef = useRef(null)

  const context = {
    subjectName: subject?.name || '',
    subjectDescription: subject?.description || '',
    phaseName: activePhaseName || '',
    topicTitle: activeTopicTitle || '',
  }

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoading, isOpen])

  // Handle click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && chatPanelRef.current && !chatPanelRef.current.contains(event.target)) {
        if (!event.target.closest('#chat-toggle-btn')) {
          setIsOpen(false)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200)
      // Send a greeting on first open
      if (!hasGreeted) {
        setHasGreeted(true)
        const greeting = {
          role: 'assistant',
          content: `Hey there! 👋 I'm your AI Study Buddy for **${subject?.name || 'this subject'}**.\n\nI can explain concepts, quiz you, give real-world examples, or answer any questions you have. What would you like help with?`,
        }
        setMessages([greeting])
      }
    }
  }, [isOpen])

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return

    // Roadmap Check & Redirect
    const lowerText = text.toLowerCase()
    if (lowerText.includes('roadmap')) {
      const matchedSubject = subjects.find(s => 
        lowerText.includes(s.name.toLowerCase()) || 
        lowerText.includes(s.slug.replace(/-/g, ' '))
      )
      if (matchedSubject) {
        setMessages(prev => [...prev, { role: 'user', content: text.trim() }, { role: 'assistant', content: `Redirecting you to the ${matchedSubject.name} Roadmap...` }])
        setTimeout(() => {
          window.location.href = `/subject/${matchedSubject.slug}`
        }, 1200)
        return
      }
    }

    const userMessage = { role: 'user', content: text.trim() }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      const reply = await sendAIMessage(updatedMessages, context)
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `⚠️ ${err.message || 'Something went wrong. Please try again.'}`,
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <>
      {/* ── Keyframe Animations (injected once) ── */}
      <style>{`
        @keyframes aiBuddy_bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes aiBuddy_pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(215,255,117,0.4), 0 8px 32px rgba(0,0,0,0.4); }
          50% { box-shadow: 0 0 0 10px rgba(215,255,117,0), 0 8px 32px rgba(0,0,0,0.4); }
        }
        @keyframes aiBuddy_slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes aiBuddy_fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* ── Floating Toggle Button ── */}
      {!isOpen && (
        <button
          id="chat-toggle-btn"
          onClick={() => setIsOpen(true)}
          title="AI Study Buddy"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '58px',
            height: '58px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #132f2a 0%, #24685e 100%)',
            color: '#d7ff75',
            border: '2px solid rgba(215,255,117,0.35)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            animation: 'aiBuddy_pulse 2.5s infinite',
            transition: 'transform 0.2s, background 0.2s',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
        >
          <SparkleIcon />
        </button>
      )}

      {/* ── Chat Panel ── */}
      {isOpen && (
        <div
          ref={chatPanelRef}
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '28px',
            width: '380px',
            height: '540px',
            borderRadius: '20px',
            background: 'rgba(8, 24, 20, 0.97)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(215,255,117,0.2)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 9998,
            animation: 'aiBuddy_slideUp 0.25s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          {/* Panel Header */}
          <div style={{
            padding: '16px 18px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            background: 'linear-gradient(135deg, rgba(36,104,94,0.4), rgba(19,47,42,0.6))',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexShrink: 0,
            position: 'relative',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, #24685e, #d7ff75)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '17px', flexShrink: 0,
              boxShadow: '0 4px 12px rgba(215,255,117,0.3)',
            }}>✨</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '14px', lineHeight: 1.2 }}>
                AI Study Buddy
              </div>
              <div style={{
                fontSize: '11px', color: '#d7ff75', fontFamily: 'monospace',
                textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',
              }}>
                {subject?.name || 'Computer Science'}
              </div>
            </div>
            {/* Live indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', paddingRight: '20px' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#d7ff75' }} />
              <span style={{ fontSize: '10px', color: '#7a9e94', fontFamily: 'monospace' }}>online</span>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '26px',
                height: '26px',
                color: '#b8d4cf',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.color = '#b8d4cf'
              }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Context pill */}
          {(activePhaseName || activeTopicTitle) && (
            <div style={{
              padding: '8px 14px',
              background: 'rgba(36,104,94,0.15)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              flexShrink: 0,
            }}>
              <span style={{
                fontSize: '11px', color: '#7a9e94', fontFamily: 'monospace',
              }}>
                📍 {[activePhaseName, activeTopicTitle].filter(Boolean).join(' › ')}
              </span>
            </div>
          )}

          {/* Messages Area */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px 14px',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.1) transparent',
          }}>
            {messages.length === 0 && (
              <div style={{
                textAlign: 'center', color: '#405650', fontSize: '13px',
                padding: '40px 20px', animation: 'aiBuddy_fadeIn 0.4s',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>✨</div>
                <div>Ask me anything about <strong style={{ color: '#7a9e94' }}>{subject?.name}</strong>!</div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} style={{ animation: 'aiBuddy_fadeIn 0.3s' }}>
                <MessageBubble message={msg} />
              </div>
            ))}

            {isLoading && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px', animation: 'aiBuddy_fadeIn 0.3s' }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #24685e, #d7ff75)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', flexShrink: 0,
                }}>✨</div>
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '18px 18px 18px 4px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts (shown only when chat is empty or just greeting) */}
          {messages.length <= 1 && !isLoading && (
            <div style={{
              padding: '8px 12px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              flexShrink: 0,
              animation: 'aiBuddy_fadeIn 0.4s',
            }}>
              {QUICK_PROMPTS.map(chip => (
                <button
                  key={chip.label}
                  onClick={() => sendMessage(chip.text)}
                  style={{
                    padding: '5px 10px',
                    background: 'rgba(36,104,94,0.2)',
                    border: '1px solid rgba(215,255,117,0.15)',
                    borderRadius: '20px',
                    color: '#b8d4cf',
                    fontSize: '11px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(36,104,94,0.5)'
                    e.currentTarget.style.color = '#d7ff75'
                    e.currentTarget.style.borderColor = 'rgba(215,255,117,0.4)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(36,104,94,0.2)'
                    e.currentTarget.style.color = '#b8d4cf'
                    e.currentTarget.style.borderColor = 'rgba(215,255,117,0.15)'
                  }}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div style={{
            padding: '12px 14px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            gap: '8px',
            alignItems: 'flex-end',
            background: 'rgba(0,0,0,0.2)',
            flexShrink: 0,
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about this topic..."
              rows={1}
              disabled={isLoading}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                padding: '10px 14px',
                color: '#fff',
                fontSize: '13px',
                lineHeight: 1.5,
                outline: 'none',
                resize: 'none',
                fontFamily: 'inherit',
                maxHeight: '96px',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => { e.target.style.borderColor = 'rgba(215,255,117,0.4)' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)' }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={isLoading || !input.trim()}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: input.trim() && !isLoading
                  ? 'linear-gradient(135deg, #24685e, #d7ff75)'
                  : 'rgba(255,255,255,0.07)',
                border: 'none',
                cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                color: input.trim() && !isLoading ? '#132f2a' : '#405650',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                if (input.trim() && !isLoading) e.currentTarget.style.transform = 'scale(1.08)'
              }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <SendIcon />
            </button>
          </div>

          {/* Footer note */}
          <div style={{
            padding: '6px 14px 10px',
            textAlign: 'center',
            fontSize: '10px',
            color: '#2a4a44',
            fontFamily: 'monospace',
            flexShrink: 0,
          }}>
            Powered by Google Gemini · Campus2Career
          </div>
        </div>
      )}
    </>
  )
}

export default AIChatBuddy
