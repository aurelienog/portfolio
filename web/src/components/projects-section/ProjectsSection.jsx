import React from 'react'
import ProjectCard from './ProjectCard'
import meImg from '../../assets/me-transp.png';

function ProjectsSection() {
  return (
    <section className=''>
      <h2 className='space-y-4 mt-8 text-4xl md:text-6xl'>Mis ultimos proyectos</h2>
      <ProjectCard 
        name = "React shelter : Single Page Application" 
        description="" 
        image={meImg} />
      <ProjectCard 
        name="Shelter Express : Server Side Rendering" 
        description="" 
        image={meImg} 
        order="2" />
      <ProjectCard 
        name="Grimm Gate : juego javascript con canvas " 
        description="" 
        image={meImg} />
      
    </section>
  )
}

export default ProjectsSection