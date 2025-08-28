import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { DashboardPage } from './pages/DashboardPage'
import { AboutPage } from './pages/AboutPage'
import { AuthPage } from './pages/AuthPage'
import { ExercisesPage } from './pages/ExercisesPage'
import { RehabPage } from './pages/RehabPage'
import { AccountPage } from './pages/AccountPage'
import { HistoryPage } from './pages/HistoryPage'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/rehab" element={<RehabPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App