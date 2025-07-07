//screenshots
import shelterExpress from '../assets/images/shelterExpress.webp';
import reactShelter from '../assets/images/reactShelter.webp';
import grimm from '../assets/images/grimm.webp';

// icons
import expressIcon from '../assets/icons/express.svg';
import hbsIcon from '../assets/icons/hbs.svg';
import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css.svg';
import jsIcon from '../assets/icons/javascript.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import mongoDbIcon from '../assets/icons/mongodb.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import reactIcon from '../assets/icons/react.svg';
import nextjsIcon from '../assets/icons/nextjs.svg';
import vercelIcon from '../assets/icons/vercel.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';
import motionIcon from '../assets/icons/motion.svg';
import postmanIcon from '../assets/icons/postman.svg';
import eslintIcon from '../assets/icons/eslint.svg';
import githubIcon from '../assets/icons/github.svg';
import appleIcon from '../assets/icons/apple.svg';
import accessibilityIcon from '../assets/icons/accessibility.svg';
import jwtIcon from '../assets/icons/jwt.svg';

// splashes
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
  description: <p>Tras desarrollar la primera versión de Fur-Ever Friends con server-side rendering (HBS), decidí modernizar la plataforma creando una <b>Single Page Application (SPA)</b> con React, optimizando la experiencia del usuario con una navegación más fluida y rápida.</p>,
  image: reactShelter,
  technologies:['MongoDb', 'Express','React', 'Node.js', 'Tailwindcss']
}, {
    id: 2,
    name:"Página de Adopción de Mascotas",
    architecture: "SSR con handlebars",
    description: <p>Fur-Ever Friends es un refugio de animales dedicado a encontrar hogares amorosos para mascotas. La web permite a los usuarios explorar animales en adopción, completar solicitudes y gestionar sus perfiles de manera sencilla e intuitiva.</p>,
    image: shelterExpress,
    technologies: ['MongoDb', 'Express','Handlebars', 'Node.js', 'Tailwindcss']
}, {
  id: 3,
  name:"Shooter 2D",
  architecture:"JavaScript y Canvas",
  description: <p>Grimm Gate es un videojuego de plataformas en 2D, inspirado en Hollow Knight, desarrollado con JavaScript y Canvas API. El jugador controla a un <b>personaje que evoluciona</b> a medida que derrota enemigos, mejorando sus habilidades mientras enfrenta <b>un desafío progresivo</b> y dinámico.</p>,
  image:grimm,
  technologies:['Html', 'Css', 'Javascript']
}]

export const illustratedTechnologies = [{
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
  name: 'TypeScript',
  icon: typescriptIcon,
  splash: blueSplash
}, {
  name: 'tailwindcss',
  icon: tailwindIcon, 
  splash: pinkSplash, 
}, {
  name: 'Node.js',
  icon: nodejsIcon, 
  splash: redSplash, 
}, {
  name:'Postman',
  icon: postmanIcon,
  splash: orangeSplash, 
}, {
  name: 'Handlebars',
  icon: hbsIcon, 
  splash: orangeSplash, 
}, {
  name: 'Express',
  icon: expressIcon, 
  splash: blueSplash, 
}, {
  name:'Sessions',
  icon: expressIcon,
  splash: orangeSplash, 
}, {
  name:'JWT',
  icon: jwtIcon,
  splash: orangeSplash, 
}, {
  name: 'MongoDb',
  icon: mongoDbIcon, 
  splash: greenSplash, 
}, {
  name:'React',
  icon: reactIcon,
  splash: orangeSplash, 
}, {
  name:'Next.js',
  icon: nextjsIcon,
  splash: orangeSplash, 
}, {
  name:'Next-Auth',
  icon: nextjsIcon,
  splash: orangeSplash, 
},  {
  name:'Vercel',
  icon: vercelIcon,
  splash: orangeSplash, 
}, {
  name:'EsLint',
  icon: eslintIcon,
  splash: orangeSplash, 
}, {
  name:'framer motion',
  icon: motionIcon,
  splash: orangeSplash, 
}, {
  name:'Git & Github',
  icon: githubIcon,
  splash: orangeSplash, 
}, {
  name:'Accessibility',
  icon: accessibilityIcon,
  splash: orangeSplash, 
}, {
  name:'VoiceOver',
  icon: appleIcon,
  splash: orangeSplash, 
}];

export const techStacks = [{
  name: 'Lenguajes & Frameworks',
  skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express'],
}, {
  name: 'Estilos & UI',
  skills: ['CSS', 'tailwindcss', 'Framer Motion', 'Accessibility'] 
}, {
  name: 'Bases de Datos & Autenticación',
  skills: ['MongoDB', 'JWT', 'Sessions', 'next-auth']
}, {
  name: 'Herramientas',
  skills: ['Git & GitHub', 'ESLint', 'Postman', 'Vercel', 'VoiceOver']
}]
