import Gallery from '../components/gallery/Gallery';

function ProjectsPage({ projects }) {
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