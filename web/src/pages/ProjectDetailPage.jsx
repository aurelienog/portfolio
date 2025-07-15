import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// sections
import LandingDetail from '../components/sections/detail-page/LandingDetail';
import Overview from '../components/sections/detail-page/Overview';
import Features from "../components/sections/detail-page/Features";
import TechStack from "../components/sections/detail-page/TechStack";
import Learnings from "../components/sections/detail-page/Learnings";
import NextSteps from "../components/sections/detail-page/NextSteps";
import Links from "../components/sections/detail-page/Links";

function ProjectDetailPage({ projects } ) {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundProject = projects.find((p) => String(p.id) === String(id));
    setProject(foundProject);
  }, [id, projects]);


  if (!project) {
    return (
      <main>
        <h1>Proyecto no encontrado</h1>
      </main>
    );
  }

  return (
    <main>
      <LandingDetail {...project}/>
      { project.overview && <Overview overview={project.overview}/>}
      <Features features={project.features}/>
      <TechStack technologies={project.technologies}/>
      {project.learnings && <Learnings learnings={project.learnings}/>}
      {project.nextSteps && <NextSteps nextSteps={project.nextSteps}/>}

      <section>
        <h2 className="">Screenshots</h2>

      <div className="scroll-layout">
        <div className="carousel">
        <ul className="content">
          {project.images.map((image, index) => ( 
          <li key={`screenshots-${project.id}-${index}`}>
            <img src={image} alt="" className="h-full w-full object-cover"/>
          </li>))}
        </ul> 
        </div>
        </div>
      </section>
      
        <Links {...project.links}/>  

      {/* Desafíos & soluciones
      {/* Capturas / Galería (slider) */}
    </main>
  )
}

export default ProjectDetailPage