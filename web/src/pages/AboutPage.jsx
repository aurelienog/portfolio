import { Link } from "react-router-dom";
import workingImg from '../assets/images/working.jpg';

function AboutPage() {
  return (
      <main> 
      <h1>Sobre mí</h1>

      <section aria-labelledby="trayectoria" className="mb-20 max-w-3xl mx-auto">
        
        <h2 id="trayectoria" className="visually-hidden">Mi historia como desarrolladora</h2>
        <figure className="my-20 max-w-3xl mx-auto">
          <img src={workingImg} alt="Desarrolladora trabajando frente al ordenador" className="w-full rounded-[var(--border-radius)]"/>
        </figure>
        <article className='space-y-6'>
          <p className='highlight'>Construyo software, desde los fundamentos hasta producción.</p>
          <p>Soy desarrolladora en <b className='highlight'>formación en 42</b>, enfocada en backend y resolución de problemas.</p>
          <p>Mi formación combina programación de bajo nivel y fundamentos de Ciencias de la Computación con desarrollo de software práctico. Trabajo con <b className='highlight'>C, Python, JavaScript y TypeScript</b>, y disfruto entendiendo cómo funcionan los sistemas por debajo de las abstracciones.</p>
        </article>

      </section>

      <section aria-labelledby="actualidad" className="max-w-3xl mx-auto space-y-6">
        <h2 id="method">Cómo me gusta trabajar</h2>
        <ul className="max-w-3xl mx-auto space-y-6">
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

      <section aria-labelledby="actualidad" className="max-w-3xl mx-auto">
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

      <section aria-labelledby="actualidad" className="max-w-3xl mx-auto space-y-6">
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

      <section aria-labelledby="actualidad" className="max-w-3xl mx-auto space-y-6">
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