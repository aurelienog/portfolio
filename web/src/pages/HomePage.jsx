import React from 'react'
import HeroSection from '../components/hero-section/HeroSection'
import PageLayout from '../components/layout/PageLayout'
import ContactSection from '../components/contact-section/ContactSection'
import AboutSection from '../components/about-section/AboutSection'



function HomePage() {
  return (
    <div>
      <PageLayout>
        <HeroSection />
        <AboutSection/>
        <ContactSection/>
      </PageLayout>
    </div>
  
    
  )
}

export default HomePage