// import { useState } from 'react'
// import CTASection from '../components/CTASection'
// import Navbar from '../components/navbarLandingPage'
// import HeroSection from '../components/heroSectionLandingPage'
// import FeatureHighlightSection from '../components/FeatureHighlightSection'
// import Footer from '../components/FooterLandingPage'
import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import NotFoundPage from './NotFoundPage'
import LoginPage from './LoginPage'
import DashboardPage from './DashboardPage'
import FeedPage from './FeedPage'
import CompetitionPage from './CompetitionPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/feed' element={<FeedPage />} />
        <Route path='/competitions' element={<CompetitionPage />} />
        
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
  )
}

export default App;