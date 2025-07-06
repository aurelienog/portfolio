import HeroSection from '../components/hero-section/HeroSection'
import PageLayout from '../components/layout/PageLayout'
import ContactSection from '../components/contact-section/ContactSection'
import ProjectsSection from '../components/projects-section/ProjectsSection'

function HomePage() {
  return (
    <main>
      <PageLayout>
        <HeroSection />
        <ProjectsSection/>
        <ContactSection/>
      </PageLayout>
    </main>
  
    
  )
}

export default HomePage