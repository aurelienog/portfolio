import ProjectCard from './ProjectCard'
import { projects } from '../../data/data'


function ProjectsSection() {
  const filteredProjects = projects.slice(0, 3)
  return (
    <section>
      <h2>Mis ultimos proyectos</h2>
      {filteredProjects?.map((project, index) => 
      <ProjectCard className='' key={`${index}+${project.id}`} index={index} {...project}/>)}
    </section>
  )
}

export default ProjectsSection