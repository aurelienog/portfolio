import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/data";
import LandingDetail from '../components/sections/detail-page/LandingDetail';
import Overview from '../components/sections/detail-page/Overview';
import Features from "../components/sections/detail-page/Features";
import TechStack from "../components/sections/detail-page/TechStack";
import SoftSkills from "../components/sections/detail-page/SoftSkills";
import Learnings from "../components/sections/detail-page/Learnings";
import NextSteps from "../components/sections/detail-page/NextSteps";
import Links from "../components/sections/detail-page/Links";

function ProjectDetailPage() {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundProject = projects.find((p) => String(p.id) === String(id));
    setProject(foundProject);
  }, [id]);


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

      <div className="grid gap-6 md:grid-cols-[3fr_2fr] mb-44 md:mb-0">
        <Features features={project.features}/>
        <TechStack technologies={project.technologies}/>
      </div>

      {project.softSkills && <SoftSkills softSkills={ project.softSkills }/>}
      {project.learnings && <Learnings learnings={project.learnings}/>}
      {project.nextSteps && <NextSteps nextSteps={project.nextSteps}/>}
      <Links {...project.links}/>

      {/* Desafíos & soluciones
      {/* Capturas / Galería (slider) */}
    </main>
  )
}

export default ProjectDetailPage