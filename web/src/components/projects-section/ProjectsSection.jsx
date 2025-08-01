import { useMemo } from 'react';
import ProjectCard from './ProjectCard';

function ProjectsSection({ projects }) {
  const filteredProjects = useMemo(() => {
    return projects.slice(0, 3); 
  }, [projects]);
  return (
    <section aria-labelledby="proyectos" className='space-y-32'>
      <h2 id='proyectos'>Mis ultimos proyectos</h2>
      {filteredProjects?.map((project, index) => 
      <ProjectCard className='' key={`${index}+${project.id}`} index={index} image={project.images[0]} mockup={project.mockup} {...project}/>)}
    </section>
  )
}

export default ProjectsSection