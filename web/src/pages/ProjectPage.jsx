import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/data";

function ProjectPage() {
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
      <h1>{project?.name}</h1>
    </main>
  )
}

export default ProjectPage