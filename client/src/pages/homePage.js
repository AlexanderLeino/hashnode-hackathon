import React from 'react'
import './HomePage.css'
import SearchBar from '../components/SearchBar'
import HeroSection from '../components/HeroSection'
import DashboardMenu from '../components/DashboardMenu'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>
        <SearchBar />
          <div className='wrapper'>
            <div>
              <DashboardMenu />
            </div>
            <div className='box-two'>
              <HeroSection />
            </div>
          </div>
        <AboutSection />
        <Footer />
    </div>
    )
}

export default HomePage;


