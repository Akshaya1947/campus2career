// AI Study Buddy Service — sends chat messages to the Campus2Career AI backend

const API_BASE_URL = 'http://localhost:5000/api'

/**
 * Send a chat message to the AI Study Buddy.
 *
 * @param {Array<{role: 'user'|'assistant', content: string}>} messages - Full chat history including the new message
 * @param {{ subjectName: string, subjectDescription: string, phaseName: string, topicTitle: string }} context
 * @returns {Promise<string>} The AI's reply text
 */
export async function sendAIMessage(messages, context = {}) {
  const res = await fetch(`${API_BASE_URL}/ai/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, context }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || 'AI service error')
  }

  const data = await res.json()
  return data.reply
}

export default { sendAIMessage }
