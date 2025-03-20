import React from 'react'
import ProjectCard from './ProjectCard'
import shelterExpress from '../../assets/images/shelterExpress.webp';
import reactShelter from '../../assets/images/reactShelter.webp';
import grimm from '../../assets/images/grimm.webp';
import express from '../../assets/icons/express.svg';
import hbs from '../../assets/icons/hbs.svg';
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import js from '../../assets/icons/javascript.svg';
import mongodb from '../../assets/icons/mongodb.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import react from '../../assets/icons/react.svg';
import tailwind from '../../assets/icons/tailwind.svg';
import redSplash from '../../assets/images/redSplash.webp';
import orangeSplash from '../../assets/images/orangeSplash.webp';
import greenSplash from '../../assets/images/greenSplash.webp';
import pinkSplash from '../../assets/images/pinkSplash.webp';
import blueSplash from '../../assets/images/blueSplash.webp';
import yellowSplash from '../../assets/images/yellowSplash.webp';

function ProjectsSection() {
  return (
    <section className='px-8 mx-auto'>
      <h2 className='lg:mb-8 mt-8'>Mis ultimos proyectos</h2>
      <ProjectCard 
        name = "Página de Adopción de Mascotas"
        architecture="SPA con React"
        description={<>Tras desarrollar la primera versión de Fur-Ever Friends con server-side rendering (HBS), decidí modernizar la plataforma creando una <b>Single Page Application (SPA)</b> con React, optimizando la experiencia del usuario con una navegación más fluida y rápida.</>} 
        image={reactShelter}
        technologies={[{tech:mongodb, splash:greenSplash, name:'MongoDb'}, {tech:express, splash:blueSplash, name:'Express'}, {tech:react, splash:orangeSplash, name:'React'}, {tech:nodejs, splash:redSplash, name:'Node.js'}, {tech:tailwind, splash:pinkSplash, name:'Tailwindcss'}]} />
      <ProjectCard 
        name="Página de Adopción de Mascotas" 
        architecture="SSR con handlebars"
        description={<>Fur-Ever Friends es un <b>refugio de animales</b> dedicado a encontrar hogares amorosos para mascotas. La web permite a los usuarios explorar animales en adopción, completar solicitudes y gestionar sus perfiles de manera sencilla e intuitiva."</>} 
        image={shelterExpress} 
        order="last"
        technologies={[{tech:mongodb, splash:greenSplash, name:'MongoDb'}, {tech:express, splash:blueSplash, name:'Express'}, {tech:hbs, splash:orangeSplash, name:'Handlebars'}, {tech:nodejs, splash:redSplash, name:'Node.js'}, {tech:tailwind, splash:pinkSplash, name:'Tailwindcss'}]} />
      <ProjectCard 
        name="Shooter 2D" 
        architecture="JavaScript y Canvas"
        description={<>Grimm Gate es un videojuego de plataformas en 2D, inspirado en Hollow Knight, desarrollado con JavaScript y Canvas API. El jugador controla a <b>un personaje que evoluciona</b> a medida que derrota enemigos, mejorando sus habilidades mientras enfrenta <b>un desafío progresivo y dinámico</b>.</>} 
        image={grimm}
        technologies={[ {tech:html, splash:orangeSplash, name:'Html'}, {tech:css, splash:blueSplash, name:'Css'}, {tech:js, splash:yellowSplash, name:'Javascript'} ]} />
      
    </section>
  )
}

export default ProjectsSection