import React from 'react'
import ProjectCard from './ProjectCard'
import shelterExpress from '../../assets/images/shelterExpress.webp';
import reactShelter from '../../assets/images/reactShelter.webp';
import grimm from '../../assets/images/grimm.webp';
import express from '../../assets/express.svg';
import hbs from '../../assets/hbs.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import js from '../../assets/javascript.svg';
import mongodb from '../../assets/mongodb.svg';
import nodejs from '../../assets/nodejs.svg';
import react from '../../assets/react.svg';
import tailwind from '../../assets/tailwind.svg';
import redSplash from '../../assets/images/redSplash.webp';
import orangeSplash from '../../assets/images/orangeSplash.webp';
import greenSplash from '../../assets/images/greenSplash.webp';
import pinkSplash from '../../assets/images/pinkSplash.webp';
import blueSplash from '../../assets/images/blueSplash.webp';
import yellowSplash from '../../assets/images/yellowSplash.webp';

function ProjectsSection() {
  return (
    <section className='px-8 mx-auto'>
      <h2 className='md:mb-8 mt-8'>Mis ultimos proyectos</h2>
      <ProjectCard 
        name = "Página de Adopción de Mascotas"
        architecture="SPA con React"
        description={<>Tras desarrollar la primera versión de Fur-Ever Friends con server-side rendering (HBS), decidí modernizar la plataforma creando una <b>Single Page Application (SPA)</b> con React, optimizando la experiencia del usuario con una navegación más fluida y rápida.</>} 
        image={reactShelter}
        technologies={[{tech:mongodb, splash:greenSplash}, {tech:express, splash:blueSplash}, {tech:react, splash:orangeSplash}, {tech:nodejs, splash:redSplash}, {tech:tailwind, splash:pinkSplash}]} />
      <ProjectCard 
        name="Página de Adopción de Mascotas" 
        architecture="SSR con handlebars"
        description={<>Fur-Ever Friends es un <b>refugio de animales</b> dedicado a encontrar hogares amorosos para mascotas. La web permite a los usuarios explorar animales en adopción, completar solicitudes y gestionar sus perfiles de manera sencilla e intuitiva."</>} 
        image={shelterExpress} 
        order="last"
        technologies={[{tech:mongodb, splash:greenSplash}, {tech:express, splash:blueSplash}, {tech:hbs, splash:orangeSplash}, {tech:nodejs, splash:redSplash}, {tech:tailwind, splash:pinkSplash}]} />
      <ProjectCard 
        name="Shooter 2D" 
        architecture="JavaScript y Canvas"
        description={<>Grimm Gate es un videojuego de plataformas en 2D, inspirado en Hollow Knight, desarrollado con JavaScript y Canvas API. El jugador controla a <b>un personaje que evoluciona</b> a medida que derrota enemigos, mejorando sus habilidades mientras enfrenta <b>un desafío progresivo y dinámico</b>.</>} 
        image={grimm}
        technologies={[ {tech:html, splash:orangeSplash}, {tech:css, splash:blueSplash}, {tech:js, splash:yellowSplash} ]} />
      
    </section>
  )
}

export default ProjectsSection