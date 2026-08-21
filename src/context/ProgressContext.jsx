import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { progressService } from '../services/progressService'
import { useAuth } from './AuthContext'
import { subjects } from '../data/subjects'

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const { currentUser } = useAuth()
  const [allProgress, setAllProgress] = useState({})
  const [loading, setLoading] = useState(true)

  const reloadAllProgress = useCallback(async () => {
    setLoading(true)
    try {
      const slugs = subjects.map(s => s.slug)
      const data = await progressService.loadAllProgress(slugs)
      setAllProgress(data || {})
    } catch (err) {
      console.error('Failed to load global progress:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    reloadAllProgress()
  }, [currentUser, reloadAllProgress])

  const toggleTopic = async (subjectSlug, topicTitle) => {
    const currentSubjectProgress = allProgress[subjectSlug] || {}
    const isCompleted = !!currentSubjectProgress[topicTitle]
    const updatedSubjectProgress = {
      ...currentSubjectProgress,
      [topicTitle]: !isCompleted,
    }

    // Optimistic UI update
    setAllProgress(prev => ({
      ...prev,
      [subjectSlug]: updatedSubjectProgress,
    }))

    // Persist to API & localStorage
    await progressService.saveProgress(subjectSlug, updatedSubjectProgress)
  }

  const getSubjectProgress = (subjectSlug) => {
    return allProgress[subjectSlug] || {}
  }

  const isTopicCompleted = (subjectSlug, topicTitle) => {
    return !!(allProgress[subjectSlug] && allProgress[subjectSlug][topicTitle])
  }

  const value = {
    allProgress,
    loading,
    toggleTopic,
    getSubjectProgress,
    isTopicCompleted,
    reloadAllProgress,
  }

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}

export default ProgressContext
