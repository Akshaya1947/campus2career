import React, { useEffect, useState } from 'react'
import { subjectsByBranch } from './data/subjects'
import { Home } from './pages/Home'
import { CareersPage } from './pages/CareersPage'
import { SubjectPage } from './pages/SubjectPage'
import { Dashboard } from './pages/Dashboard'
import { CompanyMatrixPage } from './pages/CompanyMatrixPage'
import { AdminLoginPage } from './pages/AdminLoginPage'
import { AdminDashboard } from './pages/AdminDashboard'
import { PersonalizedRoadmap } from './pages/PersonalizedRoadmap'
import { AuthProvider } from './context/AuthContext'
import { ProgressProvider } from './context/ProgressContext'

function AppRoutes() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    window.addEventListener('popstate', update)
    return () => window.removeEventListener('popstate', update)
  }, [])

  // Normalize path (strip trailing slash if not root)
  const cleanPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path

  if (cleanPath === '/admin') return <AdminLoginPage />
  if (cleanPath === '/admin/dashboard') return <AdminDashboard />
  if (cleanPath === '/careers') return <CareersPage />
  if (cleanPath === '/dashboard') return <Dashboard />
  if (cleanPath === '/personalized-roadmap') return <PersonalizedRoadmap />
  if (cleanPath === '/placements' || cleanPath === '/companies') return <CompanyMatrixPage />

  // Extract slug from /subjects/:slug, /subject/:slug, or /:slug
  const segments = cleanPath.split('/').filter(Boolean)
  const candidateSlug = segments[segments.length - 1]
  
  // Flatten all subjects from all branches to find the matching slug
  const allSubjects = Object.values(subjectsByBranch).flat()
  const subject = candidateSlug ? allSubjects.find(s => s.slug === candidateSlug) : null

  return subject ? <SubjectPage subject={subject} /> : <Home />
}

export function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <AppRoutes />
      </ProgressProvider>
    </AuthProvider>
  )
}

export default App
