import shelterExpress from '../assets/images/shelterExpress.webp';
import reactShelter from '../assets/images/reactShelter.webp';
import grimm from '../assets/images/grimm.webp';
import expressIcon from '../assets/icons/express.svg';
import hbsIcon from '../assets/icons/hbs.svg';
import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css.svg';
import jsIcon from '../assets/icons/javascript.svg';
import mongoDbIcon from '../assets/icons/mongodb.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import reactIcon from '../assets/icons/react.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';
import redSplash from '../assets/images/redSplash.webp';
import orangeSplash from '../assets/images/orangeSplash.webp';
import greenSplash from '../assets/images/greenSplash.webp';
import pinkSplash from '../assets/images/pinkSplash.webp';
import blueSplash from '../assets/images/blueSplash.webp';
import yellowSplash from '../assets/images/yellowSplash.webp';


export const projects = [{
  id: 1,
  name: "Página de Adopción de Mascotas",
  architecture: "SPA con React",
  description: 'Tras desarrollar la primera versión de Fur-Ever Friends con server-side rendering (HBS), decidí modernizar la plataforma creando una <b>Single Page Application (SPA)</b> con React, optimizando la experiencia del usuario con una navegación más fluida y rápida.',
  image: reactShelter,
  technologies:['MongoDb', 'Express','React', 'Node.js', 'Tailwindcss']
}, {
    id: 2,
    name:"Página de Adopción de Mascotas",
    architecture: "SSR con handlebars",
    description: 'Fur-Ever Friends es un refugio de animales dedicado a encontrar hogares amorosos para mascotas. La web permite a los usuarios explorar animales en adopción, completar solicitudes y gestionar sus perfiles de manera sencilla e intuitiva.',
    image: shelterExpress,
    technologies: ['MongoDb', 'Express','Handlebars', 'Node.js', 'Tailwindcss']
}, {
  id: 3,
  name:"Shooter 2D",
  architecture:"JavaScript y Canvas",
  description:'Grimm Gate es un videojuego de plataformas en 2D, inspirado en Hollow Knight, desarrollado con JavaScript y Canvas API. El jugador controla a <b>un personaje que evoluciona</b> a medida que derrota enemigos, mejorando sus habilidades mientras enfrenta <b>un desafío progresivo y dinámico.',
  image:grimm,
  technologies:['Html', 'Css', 'Javascript']
}]

export const technologies = [{
  name: 'HTML',
  icon: htmlIcon,
  splash: orangeSplash
}, {
  name: 'CSS',
  icon: cssIcon,
  splash: blueSplash
}, {
  name: 'Javascript',
  icon: jsIcon,
  splash: yellowSplash
}, {
  name: 'TailwindCSS',
  icon: tailwindIcon, 
  splash: pinkSplash, 
}, {
  name: 'Node.js',
  icon: nodejsIcon, 
  splash: redSplash, 
}, {
  name: 'Handlebars',
  icon: hbsIcon, 
  splash: orangeSplash, 
}, {
  name: 'Express',
  icon: expressIcon, 
  splash: blueSplash, 
}, {
  name: 'MongoDb',
  icon: mongoDbIcon, 
  splash: greenSplash, 
}, {
  name:'React',
  icon: reactIcon,
  splash: orangeSplash, 
}];