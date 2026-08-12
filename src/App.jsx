import React, { useEffect, useState } from 'react'
import { subjects } from './data/subjects'
import { Home } from './pages/Home'
import { CareersPage } from './pages/CareersPage'
import { SubjectPage } from './pages/SubjectPage'
import { Dashboard } from './pages/Dashboard'
import { CompanyMatrixPage } from './pages/CompanyMatrixPage'

export function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    window.addEventListener('popstate', update)
    return () => window.removeEventListener('popstate', update)
  }, [])

  const slug = path.split('/')[2]
  const subject = subjects.find((item) => item.slug === slug)

  if (path === '/careers') return <CareersPage />
  if (path === '/dashboard') return <Dashboard />
  if (path === '/placements' || path === '/companies') return <CompanyMatrixPage />
  return subject ? <SubjectPage subject={subject} /> : <Home />
}

export default App
