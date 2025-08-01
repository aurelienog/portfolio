import HeroSection from '../components/hero-section/HeroSection'
import ContactSection from '../components/contact-section/ContactSection'
import ProjectsSection from '../components/projects-section/ProjectsSection'
import SkillsSection from '../components/skills-section/SkillsSection'

function HomePage({ projects }) {
  return (
    <main>
        <HeroSection/>
        <SkillsSection/>
        <ProjectsSection projects={projects}/>
        <ContactSection/>
    </main>
  
    
  )
}

export default HomePage