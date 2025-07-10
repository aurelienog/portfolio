import ProjectCard from './ProjectCard'
import { projects } from '../../data/data'

function ProjectsSection() {
  const filteredProjects = projects.slice(0, 3)
  return (
    <section>
      <h2>Mis ultimos proyectos</h2>
      {filteredProjects?.map((project, index) => 
      <ProjectCard className='' key={`${index}+${project.id}`} index={index} name={project.name} architecture={project.architecture} description={project.description} image={project.image} technologies={project.technologies}/>)}
    </section>
  )
}

export default ProjectsSection