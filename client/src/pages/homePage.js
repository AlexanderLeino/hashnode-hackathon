import React from 'react'
import './HomePage.css'
import SidebarCategories from '../components/SidebarCategories'
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
            <div className='box-two'>
              <SidebarCategories />
            </div>
          </div>
        <HeroSection />
        <AboutSection />
        <Footer />
    </div>
    )
}

export default HomePage;


