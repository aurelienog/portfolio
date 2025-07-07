import PageLayout from '../components/layout/PageLayout';
function AboutPage() {
  return (
    <PageLayout>
      <section className="mx-auto">
        <h1>Mi viaje hacia la programación</h1>
        <div className='md:grid grid-cols-[2fr_1fr]'>
        <article className='space-y-8'>
          <p>Durante varios años trabajé en la gestión de apartamentos turísticos, desarrollando habilidades de organización, autonomía y atención al detalle. Con el tiempo, descubrí un gran interés por el desarrollo web.</p>
          <p>Me formé a través de un  <b className='highlight'>bootcamp full stack </b> y seguí aprendiendo por mi cuenta, profundizando en tecnologías como <b className='highlight'>Next.js</b> y <b className='highlight'>TypeScript</b>. <span className='block'>Como primer proyecto freelance, diseñé y desarrollé un sitio web completo para un artesano francés, abordando tanto el rendimiento como la <b className='highlight'>accesibilidad</b> y el <b className='highlight'>SEO</b>.</span></p>
          <p>Hoy, estoy en búsqueda de mi primera oportunidad profesional como desarrolladora Full Stack, donde pueda aplicar lo aprendido, aportar soluciones y seguir creciendo en un entorno colaborativo.</p>
          <p><b className='highlight'>Vivo en Bilbao</b>, pero estoy abierta al trabajo en remoto si el proyecto lo permite.  <b className='highlight'>Habló francés, español e inglés</b>, lo que me permite integrarme fácilmente en equipos multilingües.</p>
        </article>
        <figure>

        </figure>
        </div>        
</section>
    </PageLayout>

  )
}

export default AboutPage