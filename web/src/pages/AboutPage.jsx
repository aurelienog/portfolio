import { Link } from "react-router-dom";
import me from '../assets/images/me_two.webp';
import SplashIcon from "../components/splash-icon/SplashIcon";
import greenSplash from '../assets/images/splashes/green-circle.webp';
import blueSplash from '../assets/images/splashes/blue-circle.webp';
import redSplash from '../assets/images/splashes/red-circle.webp';
import purpleSplash from '../assets/images/splashes/purple-circle.webp';
import logo42 from '../assets/icons/42.svg';
import paper from '../assets/icons/paper-airplane.svg';
import school from '../assets/icons/school.svg';
import web from '../assets/icons/web.svg';
import plant from '../assets/icons/plant.webp';
import brain from '../assets/icons/brain.webp';
import prod from '../assets/icons/prod.webp';
import view from '../assets/icons/view.webp';

function AboutPage() {
  return (
      <main> 
      <h1>Sobre mí</h1>
      <section className="mb-20 mx-auto max-w-4xl lg:grid grid-cols-2 gap-12">
        <figure className="mx-auto">
          <img src={me} alt="Desarrolladora trabajando frente al ordenador"/>
        </figure>
        <article className='space-y-6 pt-4'>
          <p className='highlight'>Construyo software, desde los fundamentos hasta la puesta en producción.</p>
          <p>Soy desarrolladora en <b className='highlight'>formación en 42</b>, enfocada en backend y resolución de problemas.</p>
          <p>Mi formación combina programación de bajo nivel y fundamentos de informática con desarrollo de software práctico. Trabajo con <b className='highlight'>C, Python, JavaScript y TypeScript</b>, y disfruto entendiendo cómo funcionan los sistemas por debajo de las abstracciones.</p>
        </article>
      </section>
      
      <section aria-labelledby="my-path" className="mb-40 mx-auto max-w-4xl">
        <h2 id="my-path">Mi trayectoria</h2>
        <p className="mb-12">Un viaje de curiosidad, proyectos y aprendizaje constante</p>

        <ul className="timeline-subtle-zigzag relative spiral">
          <li className="timeline-node">
            <figure className="node-icon z-10" aria-hidden="true">
              <SplashIcon splash={greenSplash} icon={school} name=''/>
            </figure>
            <article className="node-content">
              <h3>2024 · Bootcamp Fullstack</h3>
              <p>Comencé mi formación en desarrollo de software con el stack MERN, construyendo aplicaciones de frontend y backend.</p>
            </article>
          </li>
          <li className="timeline-node">
            <figure className="node-icon z-10" aria-hidden="true">
              <SplashIcon splash={blueSplash} icon={web} name=''/>
            </figure>
            <article className="node-content">
              <h3>2025 · Producción</h3>
              <p>Diseñé, desarrollé y desplegué de forma independiente un sitio web para un negocio familiar con Next.js y TypeScript, encargándome de todo el proceso.</p>
            </article>
          </li>
          <li className="timeline-node">
            <figure className="node-icon z-10" aria-hidden="true">
              <SplashIcon splash={purpleSplash} icon={logo42} name=''/>
            </figure>
            <article className="node-content">
              <h3>2026 · Ingeniería de Software</h3>
              <p>Inmersión en la metodología de 42, construyendo bases sólidas en algoritmos, estructuras de datos, gestión de memoria, concurrencia y diseño de software.</p>
            </article>
          </li>
          <li className="timeline-node">
            <figure className="node-icon z-10" aria-hidden="true">
              <SplashIcon splash={redSplash} icon={paper} name=''/>
            </figure>
            <article className="node-content">
              <h3>Ahora · Open to work</h3>
              <p>Busco mi primera oportunidad profesional como Software Developer, donde pueda aplicar estos fundamentos y trabajar en proyectos reales.</p>
            </article>
          </li>
        </ul>
      </section>

      <section aria-labelledby="now" className="max-w-4xl mx-auto relative code-img">
        <h2 id="now">Proyectos destacados</h2>
        <p>Entre mis proyectos recientes se encuentran:</p>
        <ul aria-label="lista de proyectos recientes">
          <li><b className='highlight'>RAG</b> — algoritmos, IA, POO y datos</li>
          <li><b className='highlight'>Pacman</b> — algoritmos, POO y gráficos</li>
          <li><b className='highlight'>Codexion</b> — concurrencia, hilos POSIX y planificación</li>
        </ul>
        <p>Además de 42, continúo desarrollando y manteniendo proyectos de forma independiente.</p>
      </section>

      <section aria-labelledby="what-I-bring" className="mb-20 mx-auto max-w-4xl">
        <h2 id="what-I-bring" className="line relative">Lo que aporto</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          <li className="grid grid-rows-[auto_auto_1fr] md:row-span-3 md:grid-rows-subgrid gap-y-3">
            <img src={brain} alt="" aria-hidden="true"/>
            <h3>Fundamentos sólidos</h3>
            <p>Algoritmos, estructuras de datos, concurrencia, programación orientada a objetos, redes y administración de sistemas.</p>
          </li>
          <li className="grid grid-rows-[auto_auto_1fr] md:row-span-3 md:grid-rows-subgrid gap-y-3">
            <img src={plant} alt="" aria-hidden="true"/>
            <h3>Autonomía y resiliencia (Metodología 42)</h3>
            <p>Más de 23 proyectos validados sin clases teóricas. He aprendido a investigar la documentación oficial, resolver bugs complejos de forma autónoma y colaborar en entornos de revisión por pares (peer-learning).</p>
          </li>
          <li className="grid grid-rows-[auto_auto_1fr] md:row-span-3 md:grid-rows-subgrid gap-y-3">
            <img src={prod} alt="" aria-hidden="true"/>
            <h3>Experiencia real en producción</h3>
            <p>Diseñé, desarrollé y desplegué de forma independiente un sitio web en producción para un negocio familiar utilizando Next.js y TypeScript.</p>
          </li>
          <li className="grid grid-rows-[auto_auto_1fr] md:row-span-3 md:grid-rows-subgrid gap-y-3">
            <img src={view} alt="" aria-hidden="true"/>
            <h3>Visión integral del desarrollo</h3>
            <p>Disfruto moviéndome entre las distintas capas de un proyecto: entender el problema, diseñar la solución, escribir el código y conseguir que funcione en producción.</p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="next" className=" mx-auto max-w-4xl relative build-img mt-60 mb-70 sm:mb-0 sm:mt-0">
        <h2 id="next">¿Qué sigue?</h2>
        <p className="max-w-[40ch]">Estoy buscando mi primera oportunidad profesional como <b className="highlight">Software Developer.</b></p>
        <p>Me interesan especialmente posiciones de backend y desarrollo de software en general.</p>
        <ul aria-label="contact" className="space-y-2 my-6">
          <li>📍 Ubicación: Bilbao / Remoto</li>
          <li>🌍 Idiomas: Francés, Español, Inglés</li>
          <li>✉️ Linkedin: <a href="https://www.linkedin.com/in/aurelie-nogueira" aria-label={'LinkedIn'} className="underline underline-offset-2">aurelie-nogueira</a></li>
        </ul>
        <p>Si crees que podría encajar en tu equipo,<Link to={{ pathname: '/', hash: "#contacto" }} className='mx-2 md:text-xl italic underline-offset-4 underline text-accent font-bold'>no dudes en escribirme !</Link></p>
      </section>
      </main>
  )
}

export default AboutPage

      // <section aria-labelledby="method" className="mb-20 mx-auto max-w-4xl">
      //   <h2 id="method">Cómo trabajo</h2>
      //   <p className="highlight my-12">Del problema a la solución. Paso a paso.</p>

        
      //   <ul className="mx-auto space-y-6">
      //     <li className="md:grid grid-cols-4">
      //       <article className="col-span-3">
      //         <h3>Un código limpio y fácil de entender.</h3>
      //         <p>Cada módulo tiene una responsabilidad clara, las funciones son pequeñas y hacen una tarea concreta.</p>
      //       </article>
      //       <figure className="w-[75%]">
      //         <SplashIcon splash={greenSplash}/>
      //       </figure>
      //     </li>
      //     <li className="md:grid grid-cols-4">
      //       <article className="col-span-3">
      //         <h3>La estructura también forma parte del diseño.</h3>
      //         <p>Organizo el proyecto en carpetas y módulos según sus responsabilidades, y mantengo separadas la lógica de negocio, la interfaz y la persistencia.</p>
      //       </article>
      //       <figure className="w-[75%]">
      //         <SplashIcon splash={greenSplash}/>
      //       </figure>
      //     </li>
      //     <li className="md:grid grid-cols-4">  
      //       <article className="col-span-3">
      //         <h3>El resultado es un software robusto con una arquitectura transparente.</h3>
      //         <p>La estructura de carpetas permite localizar cualquier elemento de forma inmediata. Al leer el código, cualquier desarrollador comprende el funcionamiento del sistema sin necesidad de analizar todo el proyecto.</p>
      //       </article>
      //       <figure className="w-[75%]">
      //         <SplashIcon splash={greenSplash}/>
      //       </figure>
      //     </li>
      //   </ul>
      // </section>