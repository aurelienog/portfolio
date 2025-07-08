import PageLayout from '../components/layout/PageLayout';
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <PageLayout>
      <section className="mx-auto">
        <h1 className='text-[54px] md:text-9xl'>Mi viaje hacia la programación</h1>
        <div className='md:grid grid-cols-[2fr_1fr]'>
        <article className='space-y-8'>
          <p>Siempre me atrajo el mundo de la tecnología, pero durante mucho tiempo pensé que no era un camino accesible para mí.</p> <p>En 2024, decidí dar el paso hacia el desarrollo web y me formé a través de un <b className='highlight'>bootcamp full stack</b> basado en el stack <b className='highlight'>MERN</b>. Comenzamos desde los fundamentos de JavaScript (JS Vanilla y lógica de programación), y poco a poco fuimos avanzando hasta trabajar con React, Node.js, Express y MongoDB.</p>
          <p>Al finalizar, seguí aprendiendo por mi cuenta, profundizando en tecnologías como <b className='highlight'>Next.js</b> y <b className='highlight'>TypeScript</b>. Como primer proyecto freelance, diseñé y desarrollé un sitio web completo para un artesano francés, abordando tanto el <b className='highlight'>rendimiento</b> como la <b className='highlight'>accesibilidad</b> y el <b className='highlight'>SEO</b>.</p>
          <p>Hoy, estoy en búsqueda de mi primera oportunidad profesional como desarrolladora Full Stack, donde pueda aplicar lo aprendido, aportar soluciones y seguir creciendo en un <b className='highlight'>entorno colaborativo</b>.</p>
          <p><b className='highlight'>Vivo en Bilbao</b>, pero estoy abierta al trabajo en remoto si el proyecto lo permite.  <b className='highlight'>Habló francés, español e inglés</b>, lo que me permite integrarme fácilmente en equipos multilingües.</p>
          <p>Si crees que podría encajar en tu equipo, 
            <Link to={{ pathname: '/home', hash: "#contact" }} className='md:text-xl italic underline-offset-4 underline text-accent font-bold'> no dudes en escribirme</Link>
            . Muchas gracias por llegar hasta aquí</p>
        </article>
        <figure>

        </figure>
        </div>        
</section>
    </PageLayout>

  )
}

export default AboutPage