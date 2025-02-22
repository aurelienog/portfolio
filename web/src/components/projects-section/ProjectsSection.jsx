import React from 'react'
import ProjectCard from './ProjectCard'
import meImg from '../../assets/me-transp.png';
import grimm from '../../assets/grimm.jpg';

function ProjectsSection() {
  return (
    <section className=''>
      <h2 className='md:mb-20 text-4xl md:text-6xl'>Mis ultimos proyectos</h2>
      <ProjectCard 
        name = "🐾 Fur-Ever Friends "
        architecture="Plataforma de Adopción de Mascotas (SPA con React)"
        description={<>Tras desarrollar la primera versión de Fur-Ever Friends con server-side rendering (HBS), decidí modernizar la plataforma creando una <b>Single Page Application (SPA)</b> con React, optimizando la experiencia del usuario con una navegación más fluida y rápida.</>} 
        image={grimm}
        tech1={meImg}
        tech2={meImg}
        tech3={meImg} />
      <ProjectCard 
        name="🐾 Shelter Express : Server Side Rendering" 
        description="" 
        image={grimm} 
        order="last" />
      <ProjectCard 
        name="🎮 Grimm Gate : Juego con JavaScript y Canvas" 
        description={<>Grimm Gate es un videojuego de plataformas en 2D, inspirado en Hollow Knight, desarrollado con JavaScript y Canvas API. El jugador controla a un personaje que evoluciona a medida que derrota enemigos, mejorando sus habilidades mientras enfrenta un desafío progresivo y dinámico.</>} 
        image={grimm} />
      
    </section>
  )
}

export default ProjectsSection