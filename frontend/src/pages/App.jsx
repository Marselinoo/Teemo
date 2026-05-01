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

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />


        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
  )
}

export default App;