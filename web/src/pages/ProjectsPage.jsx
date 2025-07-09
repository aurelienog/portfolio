import Gallery from '../components/gallery/Gallery';
import { projects } from '../data/data'

function ProjectsPage() {
  return (
      <main>
        <section>
          <h1>Mis proyectos</h1>
          <Gallery projects={ projects }/>
        </section>     
      </main>
  )
}

export default ProjectsPage