import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// sections
import LandingDetail from '../components/sections/detail-page/LandingDetail';
import Overview from '../components/sections/detail-page/Overview';
import Features from "../components/sections/detail-page/Features";
import TechStack from "../components/sections/detail-page/TechStack";
import Learnings from "../components/sections/detail-page/Learnings";
import NextSteps from "../components/sections/detail-page/NextSteps";
import Screenshots from "../components/sections/detail-page/Screenshots";
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
      {project.images && <Screenshots images={project.images}/>}
      <Links {...project.links}/>  

      {/* Desafíos & soluciones */}
    </main>
  )
}

export default ProjectDetailPage