import { Link } from "react-router-dom";
import workingImg from '../assets/images/working.jpg';

function AboutPage() {
  return (
      <main> 
      <h1>Mi viaje hacia la programación</h1>     
      <section aria-labelledby="trayectoria" className="mb-20 max-w-3xl mx-auto">
        <h2 id="trayectoria" className="visually-hidden">Mi historia como desarrolladora</h2>
        <article className='space-y-10'>
          <p>Siempre tuve curiosidad por el mundo de la tecnología. En 2024, decidí dar el paso hacia el desarrollo web y me formé a través de un <b className='highlight'>bootcamp</b> basado en el <b className='highlight'>stack MERN</b>.</p>
          <p>Al finalizar, seguí aprendiendo por mi cuenta, profundizando en tecnologías como <b className='highlight'>Next.js</b> y <b className='highlight'>TypeScript</b>.</p>
          <p>Como primer proyecto freelance, diseñé y desarrollé un sitio web completo para un artesano francés, abordando tanto el <b className='highlight'>rendimiento</b> como la <b className='highlight'>accesibilidad</b> y el <b className='highlight'>SEO</b>.</p>
        </article>
        <figure className="my-20 max-w-3xl mx-auto">
          <img src={workingImg} alt="Desarrolladora trabajando frente al ordenador" className="w-full rounded-[var(--border-radius)]"/>
        </figure>
      </section>

      <section aria-labelledby="actualidad" className="max-w-3xl mx-auto">
        <article className="space-y-10">
          <h2 id="actualidad" className="visually-hidden">Mi situación actual y objetivos</h2>
          <p>Hoy, estoy <b className='highlight'>en búsqueda de </b>mi primera oportunidad profesional como desarrolladora Full Stack, donde pueda aplicar lo aprendido y seguir creciendo en <b className='highlight'>un entorno colaborativo</b>.</p>
          <p>Vivo en Bilbao, pero estoy abierta al trabajo en remoto si el proyecto lo permite.<b className='highlight'> Habló francés, español e inglés</b>, lo que me permite integrarme fácilmente en equipos multilingües.</p>
          <p>Si crees que podría encajar en tu equipo, 
            <Link to={{ pathname: '/', hash: "#contacto" }} className='mx-2 md:text-xl italic underline-offset-4 underline text-accent font-bold'> no dudes en escribirme</Link>
            y muchas gracias por llegar hasta aquí !
          </p>
        </article>
      </section>
      </main>


  )
}

export default AboutPage