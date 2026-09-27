import { Link } from "react-router-dom";
import workingImg from '../assets/images/working.jpg';
import SplashIcon from "../components/splash-icon/SplashIcon";
import greenSplash from '../assets/images/greenSplash.webp';

function AboutPage() {
  return (
      <main> 
      <h1>Sobre mí</h1>

      <section aria-labelledby="trayectoria" className="mb-20 mx-auto max-w-4xl">
        
        <h2 id="trayectoria" className="visually-hidden">Mi historia como desarrolladora</h2>
        <figure className="my-20 mx-auto">
          <img src={workingImg} alt="Desarrolladora trabajando frente al ordenador" className="w-full rounded-[var(--border-radius)]"/>
        </figure>
        <article className='space-y-6'>
          <p className='highlight'>Construyo software, desde los fundamentos hasta producción.</p>
          <p>Soy desarrolladora en <b className='highlight'>formación en 42</b>, enfocada en backend y resolución de problemas.</p>
          <p>Mi formación combina programación de bajo nivel y fundamentos de Ciencias de la Computación con desarrollo de software práctico. Trabajo con <b className='highlight'>C, Python, JavaScript y TypeScript</b>, y disfruto entendiendo cómo funcionan los sistemas por debajo de las abstracciones.</p>
        </article>

      </section>
      
      <section aria-labelledby="trayectoria" className="mb-20 max-w-4xl mx-auto">
        <h2 id="trayectoria">Mi trayectoria</h2>

        <ul className="timeline-subtle-zigzag">
          <li className="timeline-node">
            <figure className="node-icon">
              <SplashIcon splash={greenSplash}/>
            </figure>
            <article className="node-content">
              <h3>2024 · MERN</h3>
              <p>Comienzo mi camino en el desarrollo de software especializándome tecnologías frontend y backend con el stack MERN (MongoDB, Express, React y Node.js).</p>
            </article>
          </li>
          <li className="timeline-node">
            <figure className="node-icon">
              <SplashIcon splash={greenSplash}/>
            </figure>
            <article className="node-content">
              <h3>Production · ANJ Renov</h3>
              <p>Diseño, desarrollo y despliegue real de un sitio web en producción para un negocio artesanal, gestionando todo el ciclo de vida del producto.</p>
            </article>
          </li>
          <li className="timeline-node">
            <figure className="node-icon">
              <SplashIcon splash={greenSplash}/>
            </figure>
            <article className="node-content">
              <h3>42 · Ingeniería de Software</h3>
              <p>Inmersión en la metodología de 42, construyendo bases sólidas en algoritmos, estructuras de datos, gestión de memoria de bajo nivel y diseño de sistemas.</p>
            </article>
          </li>
          <li className="timeline-node">
            <figure className="node-icon">
              <SplashIcon splash={greenSplash}/>
            </figure>
            <article className="node-content">
              <h3>Ahora · Open to work</h3>
              <p>Buscando mi primera oportunidad profesional como Software Developer, lista para aportar valor, código limpio y mentalidad de ingeniería a un equipo técnico.</p>
            </article>
          </li>
        </ul>
      </section>

      <section aria-labelledby="actualidad" className="max-w-4xl mx-auto space-y-6">
        <h2 id="method">Cómo me gusta trabajar</h2>
        <ul className=" mx-auto space-y-6">
          <li>
            <p className='highlight'>Priorizo un código limpio y fácil de entender.</p>
            <p>Cada módulo tiene una responsabilidad clara, las funciones son pequeñas y hacen una tarea concreta.</p></li>
          <li>
            <p className='highlight'>La estructura también forma parte del diseño.</p>
            <p>Organizo el proyecto en carpetas y módulos según sus responsabilidades, y mantengo separadas la lógica de negocio, la interfaz y la persistencia.</p></li>
          <li>
            <p className='highlight'>El resultado es un software robusto con una arquitectura transparente.</p>
            <p>La estructura de carpetas permite localizar cualquier elemento de forma inmediata. Al leer el código, cualquier desarrollador comprende el funcionamiento del sistema sin necesidad de analizar todo el proyecto.</p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="actualidad" className="max-w-4xl mx-auto">
        <h2 id="actualidad">Lo que aporto</h2>
        <ul className='space-y-6'>
          <li>
            <p className='highlight'>Fundamentos sólidos</p>
            <p>Algoritmos, estructuras de datos, concurrencia, programación orientada a objetos, redes y administración de sistemas.</p>
          </li>
          <li>
            <p className='highlight'>Autonomía y resiliencia (Metodología 42)</p>
            <p>Más de 23 proyectos validados sin clases teóricas. He aprendido a investigar la documentación oficial, resolver bugs complejos de forma autónoma y colaborar en entornos de revisión por pares (peer-learning).</p>
          </li>
          <li>
            <p className='highlight'>Experiencia real en producción</p>
            <p>Diseñé, desarrollé y desplegué de forma independiente un sitio web en producción para un negocio familiar utilizando Next.js y TypeScript.</p>
          </li>
          <li>
            <p className='highlight'>Visión integral del desarrollo</p>
            <p>Disfruto moviéndome entre las distintas capas de un proyecto: entender el problema, diseñar la solución, escribir el código y conseguir que funcione en producción.</p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="actualidad" className="max-w-4xl mx-auto space-y-6">
        <h2 id="actualidad">En qué estoy trabajando</h2>
        <p>Actualmente estoy completando el Common Core de 42 Bilbao. Llevo más de 1.200 horas de formación práctica y 23 proyectos completados, trabajando con problemas cada vez más complejos.</p>
        <p>Entre mis proyectos recientes se encuentran:</p>
        <ul aria-label="lista de proyectos recientes">
          <li><b className='highlight'>RAG</b> — algoritmos, IA, POO y datos</li>
          <li><b className='highlight'>Pacman</b> — algoritmos, POO y gráficos</li>
          <li><b className='highlight'>Codexion</b> — concurrencia, hilos POSIX y planificación</li>
        </ul>
        <p>Además de 42, continúo desarrollando y manteniendo proyectos de forma independiente.</p>
      </section>

      <section aria-labelledby="actualidad" className="mx-auto max-w-4xl space-y-6">
        <h2 id="actualidad">¿Qué sigue?</h2>
        <p>Estoy buscando mi primera oportunidad profesional como Software Developer.</p>
        <p>Me interesan especialmente posiciones relacionadas con backend o desarrollo de software en general.</p>
        <ul aria-label="">
          <li>📍 Ubicación: Bilbao / Remoto</li>
          <li>🌍 Idiomas: Francés, Español, Inglés</li>
          <li>✉️ Linkedin:</li>
        </ul>
        <p>Si buscas a alguien a quien le guste entender cómo funcionan las cosas, resolver problemas y construir software,<Link to={{ pathname: '/', hash: "#contacto" }} className='mx-2 md:text-xl italic underline-offset-4 underline text-accent font-bold'> no dudes en escribirme</Link>.</p>
      </section>
      </main>
  )
}

export default AboutPage



// Siempre tuve curiosidad por el mundo de la tecnología. En 2024, decidí dar el paso hacia el desarrollo web y me formé a través de un bootcamp basado en el stack MERN.

// Al finalizar, seguí aprendiendo por mi cuenta, profundizando en tecnologías como Next.js y TypeScript.

// Como primer proyecto freelance, diseñé y desarrollé un sitio web completo para un artesano francés, abordando tanto el rendimiento como la accesibilidad y el SEO.

// Hoy, estoy en búsqueda de mi primera oportunidad profesional como desarrolladora Full Stack, donde pueda aplicar lo aprendido y seguir creciendo en un entorno colaborativo.

// Vivo en Bilbao, pero estoy abierta al trabajo en remoto si el proyecto lo permite. Habló francés, español e inglés, lo que me permite integrarme fácilmente en equipos multilingües.

// Si crees que podría encajar en tu equipo, no dudes en escribirmey muchas gracias por llegar hasta aquí !


      // <section aria-labelledby="trayectoria" className="mb-20 max-w-4xl mx-auto">
      //   <h2 id="trayectoria">Mi trayectoria</h2>
      //   <ul className="space-y-6 max-w-5xl">
      //     <li className="md:grid grid-cols-3">
      //       <figure className="md:flex flex-row-reverse md:max-h-40">
      //         <SplashIcon splash={greenSplash}/>
      //       </figure>
      //       <article className="col-span-2">
      //         <h3>2024 · MERN</h3>
      //         <p>Comienzo mi camino en el desarrollo de software especializándome tecnologías frontend y backend con el stack MERN (MongoDB, Express, React y Node.js).</p>
      //       </article>
      //     </li>
      //     <li className="md:grid grid-cols-3">
      //       <figure className="md:flex md:max-h-40">
      //         <SplashIcon splash={greenSplash}/>
      //       </figure>
      //       <article className="col-span-2">
      //         <h3>Production · ANJ Renov</h3>
      //         <p>Diseño, desarrollo y despliegue real de un sitio web en producción para un negocio artesanal, gestionando todo el ciclo de vida del producto.</p>
      //       </article>
      //     </li>
      //     <li  className="md:grid grid-cols-3">
      //       <figure className="md:flex flex-row-reverse md:max-h-40">
      //         <SplashIcon splash={greenSplash}/>
      //       </figure>
      //       <article className="col-span-2">
      //         <h3>42 · Ingeniería de Software</h3>
      //         <p>Inmersión en la metodología de 42, construyendo bases sólidas en algoritmos, estructuras de datos, gestión de memoria de bajo nivel y diseño de sistemas.</p>
      //       </article>
      //     </li>
      //     <li  className="md:grid grid-cols-3">
      //       <figure className="md:flex md:max-h-40">
      //         <SplashIcon splash={greenSplash}/>
      //       </figure>
      //       <article className="col-span-2">
      //         <h3>Ahora · Open to work</h3>
      //         <p>Buscando mi primera oportunidad profesional como Software Developer, lista para aportar valor, código limpio y mentalidad de ingeniería a un equipo técnico.</p>
      //       </article>
      //     </li>
      //   </ul>
      // </section>

      // <section aria-labelledby="actualidad" className="max-w-4xl mx-auto space-y-6">
      //   <h2 id="method">Cómo me gusta trabajar</h2>
      //   <ul className=" mx-auto space-y-6">
      //     <li>
      //       <p className='highlight'>Priorizo un código limpio y fácil de entender.</p>
      //       <p>Cada módulo tiene una responsabilidad clara, las funciones son pequeñas y hacen una tarea concreta.</p></li>
      //     <li>
      //       <p className='highlight'>La estructura también forma parte del diseño.</p>
      //       <p>Organizo el proyecto en carpetas y módulos según sus responsabilidades, y mantengo separadas la lógica de negocio, la interfaz y la persistencia.</p></li>
      //     <li>
      //       <p className='highlight'>El resultado es un software robusto con una arquitectura transparente.</p>
      //       <p>La estructura de carpetas permite localizar cualquier elemento de forma inmediata. Al leer el código, cualquier desarrollador comprende el funcionamiento del sistema sin necesidad de analizar todo el proyecto.</p>
      //     </li>
      //   </ul>
      // </section>

      // <section aria-labelledby="actualidad" className="max-w-4xl mx-auto">
      //   <h2 id="actualidad">Lo que aporto</h2>
      //   <ul className='space-y-6'>
      //     <li>
      //       <p className='highlight'>Fundamentos sólidos</p>
      //       <p>Algoritmos, estructuras de datos, concurrencia, programación orientada a objetos, redes y administración de sistemas.</p>
      //     </li>
      //     <li>
      //       <p className='highlight'>Autonomía y resiliencia (Metodología 42)</p>
      //       <p>Más de 23 proyectos validados sin clases teóricas. He aprendido a investigar la documentación oficial, resolver bugs complejos de forma autónoma y colaborar en entornos de revisión por pares (peer-learning).</p>
      //     </li>
      //     <li>
      //       <p className='highlight'>Experiencia real en producción</p>
      //       <p>Diseñé, desarrollé y desplegué de forma independiente un sitio web en producción para un negocio familiar utilizando Next.js y TypeScript.</p>
      //     </li>
      //     <li>
      //       <p className='highlight'>Visión integral del desarrollo</p>
      //       <p>Disfruto moviéndome entre las distintas capas de un proyecto: entender el problema, diseñar la solución, escribir el código y conseguir que funcione en producción.</p>
      //     </li>
      //   </ul>
      // </section>