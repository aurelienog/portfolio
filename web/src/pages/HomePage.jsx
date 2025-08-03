import ContactSection from "../components/sections/homepage/contact-section/ContactSection"
import HeroSection from "../components/sections/homepage/hero-section/HeroSection"
import SkillsSection from "../components/sections/homepage/skills-section/SkillsSection"
import ProjectsSection from "../components/sections/homepage/projects-section/ProjectsSection"


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