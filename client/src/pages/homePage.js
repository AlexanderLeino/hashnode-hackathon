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
            <div className='box-one'>
              <DashboardMenu />
            </div>
          </div>
        <HeroSection />
        <AboutSection />
        <Footer />
    </div>
    )
}

export default HomePage;


