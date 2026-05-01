// import { useState } from 'react'
import CTASection from '../components/CTASection'
import Navbar from '../components/NavbarLandingPage'
import HeroSection from '../components/HeroSectionLandingPage'
import FeatureHighlightSection from '../components/FeatureHighlightSection'
import Footer from '../components/FooterLandingPage'
import './App.css'
import './index.css'

function LandingPage() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <HeroSection />
                <FeatureHighlightSection />
                <CTASection />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )

}

export default LandingPage
