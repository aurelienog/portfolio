import ProjectCard from './ProjectCard'
import { projects } from '../../data/data'

function ProjectsSection() {
  return (
    <section className='mx-auto'>
      <h2 className='lg:mb-8 mt-8'>Mis ultimos proyectos</h2>
      {projects?.map((project, index) => 
      <ProjectCard className='' key={`${index}+${project.id}`} index={index} name={project.name} architecture={project.architecture} description={project.description} image={project.image} technologies={project.technologies}/>)}
    </section>
  )
}

export default ProjectsSection