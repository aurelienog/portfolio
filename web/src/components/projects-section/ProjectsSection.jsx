import React from 'react'
import ProjectCard from './ProjectCard'
import grimm from '../../assets/grimm.jpg';
import express from '../../assets/express.svg';
import hbs from '../../assets/hbs.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import js from '../../assets/javascript.svg';
import mongodb from '../../assets/mongodb.svg';
import nodejs from '../../assets/nodejs.svg';
import react from '../../assets/react.svg';
import tailwind from '../../assets/tailwind.svg';
import splash from '../../assets/splash2.png';

function ProjectsSection() {
  return (
    <section className='p-8'>
      <h2 className='md:mb-8 mb:text-4xl md:text-6xl mt-8'>Mis ultimos proyectos</h2>
      <ProjectCard 
        name = "Página de Adopción de Mascotas 🐾"
        architecture="SPA con React"
        description={<>Tras desarrollar la primera versión de Fur-Ever Friends con server-side rendering (HBS), decidí modernizar la plataforma creando una <b>Single Page Application (SPA)</b> con React, optimizando la experiencia del usuario con una navegación más fluida y rápida.</>} 
        image={grimm}
        technologies={[{tech:mongodb, splash:splash}, {tech:express, splash:splash}, {tech:react, splash:splash}, {tech:nodejs, splash:splash}, {tech:tailwind, splash:splash}]} />
      <ProjectCard 
        name="Página de Adopción de Mascotas 🐾" 
        architecture="SSR con handlebars"
        description="Fur-Ever Friends es un refugio de animales dedicado a encontrar hogares amorosos para mascotas. La web permite a los usuarios explorar animales en adopción, completar solicitudes y gestionar sus perfiles de manera sencilla e intuitiva." 
        image={grimm} 
        order="last"
        technologies={[{tech:mongodb, splash:splash}, {tech:express, splash:splash}, {tech:hbs, splash:splash}, {tech:nodejs, splash:splash}, {tech:tailwind, splash:splash}]} />
      <ProjectCard 
        name="Shooter 2D 🎮" 
        architecture="JavaScript y Canvas"
        description={<>Grimm Gate es un videojuego de plataformas en 2D, inspirado en Hollow Knight, desarrollado con JavaScript y Canvas API. El jugador controla a un personaje que evoluciona a medida que derrota enemigos, mejorando sus habilidades mientras enfrenta un desafío progresivo y dinámico.</>} 
        image={grimm}
        technologies={[ {tech:html, splash:splash}, {tech:css, splash:splash}, {tech:js, splash:splash} ]} />
      
    </section>
  )
}

export default ProjectsSection