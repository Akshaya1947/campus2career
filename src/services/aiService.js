// AI Study Buddy & Materials Service

import { apiClient } from './apiClient'

/**
 * Send a chat message to the AI Study Buddy.
 *
 * @param {Array<{role: 'user'|'assistant', content: string}>} messages - Full chat history including the new message
 * @param {{ subjectName: string, subjectDescription: string, phaseName: string, topicTitle: string }} context
 * @returns {Promise<string>} The AI's reply text
 */
export async function sendAIMessage(messages, context = {}) {
  const res = await apiClient.post('/ai/chat', { messages, context })

  if (!res.success) {
    throw new Error(res.error || 'AI service is currently unavailable.')
  }

  return res.reply
}

/**
 * Fetch educational links and LeetCode problems for a specific topic.
 *
 * @param {string} topicTitle
 * @returns {Promise<Array<{ title: string, url: string }>>}
 */
export async function getTopicMaterials(topicTitle) {
  const res = await apiClient.get(`/ai/materials?topic=${encodeURIComponent(topicTitle)}`)

  if (res.success && Array.isArray(res.links)) {
    return res.links
  }

  // Graceful fallback
  return [
    { title: `Read about ${topicTitle} on GeeksforGeeks`, url: `https://www.geeksforgeeks.org/search/?q=${encodeURIComponent(topicTitle)}` },
    { title: `Search ${topicTitle} on LeetCode`, url: `https://leetcode.com/problemset/all/?search=${encodeURIComponent(topicTitle)}` }
  ]
}

export default {
  sendAIMessage,
  getTopicMaterials,
}
