import HeroSection from '../components/hero-section/HeroSection'
import PageLayout from '../components/layout/PageLayout'
import ContactSection from '../components/contact-section/ContactSection'
import ProjectsSection from '../components/projects-section/ProjectsSection'
import SkillsSection from '../components/skills-section/SkillsSection'

function HomePage() {
  return (
    <main id='hero'>
      <PageLayout>
        <HeroSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </PageLayout>
    </main>
  
    
  )
}

export default HomePage