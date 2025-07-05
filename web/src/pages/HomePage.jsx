import HeroSection from '../components/hero-section/HeroSection'
import PageLayout from '../components/layout/PageLayout'
import ContactSection from '../components/contact-section/ContactSection'
import AboutSection from '../components/about-section/AboutSection'
import ProjectsSection from '../components/projects-section/ProjectsSection'

function HomePage() {
  return (
    <main>
      <PageLayout>
        <HeroSection />
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
      </PageLayout>
    </main>
  
    
  )
}

export default HomePage