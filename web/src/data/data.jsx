//screenshots
import shelterExpress from '../assets/screenshots/express-testimonials.webp';
import reactShelter from '../assets/screenshots/shelter-home.webp';
import expressLogin from '../assets/screenshots/express-login.webp';
import grimm from '../assets/screenshots/grimm.webp';
import grimmSmall from '../assets/screenshots/grimm-small.webp';
import grimmJump from '../assets/screenshots/grimm-jump.webp';
import grimmFly from '../assets/screenshots/grimm-fly.webp';
import grimmShoot from '../assets/screenshots/grimm-shoot.webp';
import grimmEnd from '../assets/screenshots/grimm-end.webp';
import anjHome from '../assets/screenshots/anj-home.webp';
import anjSlider from '../assets/screenshots/anj-slider.webp';
import anjTable from '../assets/screenshots/anj-table.webp';
import anjServices from '../assets/screenshots/anj-services.webp';
import anjGallery from '../assets/screenshots/anj-gallery.webp';
import anjPath from '../assets/screenshots/anj-animated-path.webp';
import laptopAnj from '../assets/images/laptopAnj.webp';
import mobileAnj from '../assets/images/mobileAnj.webp';
import ipadAnj from '../assets/images/ipadAnj.webp';

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
import purpleSplash from '../assets/images/purpleSplash.webp';
import greySplash from '../assets/images/greySplash.webp';


export const projects = [{
  id: '1',
  name: "ANJ Renov",
  architecture: "SSR con Next.Js y hosting en Vercel",
  description: <>Sitio web de ANJ Renov, una empresa familiar especializada en pintura y reformas en Francia. El sitio fue diseñado para ofrecer una <b className='highlight'>experiencia rápida y accesible</b>, con un enfoque en la optimización SEO. Su objetivo es destacar los servicios ofrecidos y transmitir la profesionalidad, cercanía y trayectoria de la empresa.</>,
  overview: [{
      question: '¿Qué es?',
      answer: 'Un sitio web corporativo para una empresa de reformas francesa.'
    }, {
      question: '¿Para qué sirve?',
      answer: 'Mostrar sus servicios, diferenciarse de la competencia y generar confianza para captar clientes.'
    }, {
      question: '¿Por qué lo hice?',
      answer: 'Proyecto real: me encargué del diseño, desarrollo, contenido y despliegue. El objetivo era lograr una web que transmitiera profesionalismo y calidad artesanal.'
    },
  ],
  images: [{
    image: anjHome,
    description: 'Sección principal del sitio web de ANJ RENOV con eslogan, fondo de cocina moderna y botón para solicitar presupuesto gratuito.'
    }, {
      image: anjGallery,
      description: 'Galería de la página "mis realizaciones" en el sitio de ANJ RENOV, con fotos de trabajos terminados de renovación y pintura.'
    }, {
      image: anjPath,
      description: 'Sección "Le processus" del sitio de ANJ RENOV, con las etapas de una renovación y una línea animada que avanza al hacer scroll.'
    }, {
      image: anjServices,
      description: 'Sección que muestra los distintos servicios de ANJ RENOV, con breve descripción, ilustración y botón para ver ejemplos de realizaciones.'
    }, {
      image: anjTable,
      description: 'Tabla comparativa entre artesano, empresa grande y pintor barato, que muestra fortalezas y debilidades de cada tipo de proveedor de servicios.'
    }, {
      image: anjSlider,
      description: 'Captura de slider comparativo antes y después de la renovación, que permite visualizar los cambios al mover el cursor.'
    }],
  mockup: [laptopAnj, ipadAnj, mobileAnj],
  features: [
    <><b>Server-side rendering</b> (Next.js 15)</>,
    <><b>SEO optimizado</b> : meta tags, Lighthouse 100%</>,
    <><b>Accesibilidad</b> : HTML semantico, teclado, contraste, ARIA</>,
    <><b>Animaciones con Framer Motion </b> : contadores, parallax, efectos reveal...</>,
    <><b>Galería de imágenes</b> con carga diferida (lazy loading)</>,
    <><b>Tabla comparativa </b> : artesano vs. multinacional vs. low cost</>,
    <><b>Slider interactivo</b> para comparar imágenes “antes / después”</>,
    <><b>Formulario de contacto</b> con validación (cliente + servidor) y mensajes de error'</>,
  ],
  technologies:['Next.js', 'TypeScript','Css', 'framer motion', 'vercel'],
  learnings:[
    <><b>Manejar un proyecto completo</b>: diseño, frontend, backend y deploy</>,
    <><b>Aplicar renderizado en servidor (SSR) y carga diferida (lazy loading) </b>para equilibrar SEO, rendimiento y experiencia de usuario.</>, 
    <><b>Importancia de los detalles en UX</b>: navegación con teclado (tab index), textos alternativos (alt text), estructura semántica y formularios accesibles con validación</>,
    <><b>Construir contenido persuasivo </b>aplicando técnicas como:
      <ul className='space-y-2 list-disc marker:text-gray-700 ml-6'>
        <li className='mt-2'>Prueba social (fotos de proyectos reales, cifras y estadísticas)</li>
        <li>Jerarquía visual para guiar la atención del usuario</li>
        <li>Navegación impulsada por llamados a la acción (CTAs)</li>
        <li>Uso de storytelling para transmitir valor y generar confianza</li>
      </ul>
    </>,
    ],
  nextSteps: [
    <><b className='ml-2'>Testimonios</b> – Agregar prueba social directa y confiable.</>,
    <><b className='ml-2'>Modo oscuro automático</b> – Adaptado a la preferencia del usuario (`prefers-color-scheme`).</>,
    <><b className='ml-2'>Integrar un CMS </b>(Sanity o Contentful) para facilitar la edición de contenido.</>,
    <><b className='ml-2'>Mejoras móviles</b> – Soporte de gestos (ej: swipe en la galería), animaciones suaves.</>,
    <><b className='ml-2'>Protección contra spam</b> – Implementar reCAPTCHA invisible o técnica honeypot.</>,
  ],
  links: {
    github: 'https://github.com/aurelienog/renov',
    live: 'https://www.anj-renov.fr/',
  },
}, {
  id: '2',
  name: "Página de Adopción de Mascotas",
  architecture: "SPA con React",
  description: <>Tras desarrollar la primera versión de Fur-Ever Friends con server-side rendering (HBS), decidí modernizar la plataforma creando una <b className='highlight'>Single Page Application (SPA)</b> con React, optimizando la experiencia del usuario con una navegación más fluida y rápida.</>,
  overview: [{
      question: '¿Qué es?',
      answer: 'Una aplicación web desarrollada con stack MERN para gestionar un refugio de animales y facilitar su adopción.'
    }, {
      question: '¿Para qué sirve?',
      answer: 'Permite a usuarios explorar animales disponibles y contactar al refugio. Los administradores pueden gestionar el contenido mediante un panel seguro con autenticación y control de acceso.'
    }, {
      question: '¿Por qué lo hice?',
      answer: 'Este proyecto nació como práctica de backend en Node.js y Express, con un enfoque en sesiones, manejo de imágenes y roles de usuario.'
    },
  ],
  images: [{ 
    image: reactShelter, 
    description: 'Sección principal de un refugio de animales con eslogan, botón de llamada a la acción e ilustración de dos chicas riendo junto a un perro.'
  }],
  technologies:['MongoDb', 'Express','React', 'Node.js', 'Tailwindcss'],
  features: [
    <><b>Registro y login</b> de usuarios con sesión (express-session)</>,
    <><b>Contraseñas cifradas</b> con bcrypt</>,
    <><b>Gestión de usuarios con roles</b> : admin / usuario regular</>,
    <><b>Middleware de autorización</b> para restringir rutas de administración</>,
    <><b>Modelo Animal extendido</b> a Dog, Cat y Other usando herencia con Mongoose</>,
    <><b>API RESTful</b> con rutas protegida</>,
    <><b>Gestión robusta de errores en la API</b>:
      <ul className='space-y-2 list-disc marker:text-gray-700 ml-6'>
        <li>Middleware centralizado para capturar y responder con mensajes claros y códigos HTTP apropiados</li>
        <li>Validaciones de Mongoose gestionadas como errores 400</li>
        <li>Errores de casteo como 404 (por IDs inválidas)</li>
        <li>Otros errores convertidos a 500 si no se clasifican</li>
        <li>Mensajes de error estructurados enviados al frontend en formato JSON</li>
      </ul>
    </>,
  ],
    learnings:[
    <><b>Implementar autenticación</b> basada en sesiones con cookies seguras</>,
    <><b>Crear un sistema de roles y rutas protegidas</b> para control de acceso</>, 
    <><b>Utilizar Multer + Cloudinary</b> para subir y servir imágenes desde el backend</>,
    <><b>Estructurar el backend de forma modular</b> con modelos extendidos, controladores y middlewares</>,
    <><b>Validar inputs de forma segura</b> tanto en cliente como en servidor</>,
    ],
  nextSteps: [
    <><b className='ml-2'>Afinar el diseño y la experiencia del usuario</b></>,
    <><b className='ml-2'>Mejorar la accesibilidad</b>: tabindex, ARIA, alt text dinámico...</>,
    <><b className='ml-2'>Confirmaciones visuales tras acciones</b>: eliminación, guardado...</>,
  ],   
  links: {
    github: 'https://github.com/aurelienog/react-shelter',
  },
}, {
  id: '3',
  name:"Shooter 2D",
  architecture:"JavaScript y Canvas",
  description: <>Grimm Gate es un videojuego de plataformas en 2D, inspirado en Hollow Knight. El jugador controla a un <b className='highlight'>personaje que evoluciona</b> a medida que derrota enemigos, mejorando sus habilidades mientras enfrenta <b className='highlight'>un desafío progresivo</b> y dinámico.</>,
  images:[{
    image: grimm,
    description: ''
    }, {
      image: grimmSmall,
      description: ''
    }, {
      image: grimmJump,
      description: ''
    }, {
      image: grimmFly,
      description: ''
    }, {
      image: grimmShoot,
      description: ''
    }, {
      image: grimmEnd,
      description: ''
    }],
  overview: [{
      question: '¿Qué es?',
      answer: 'Un juego de plataformas en 2D desarrollado en JavaScript y renderizado mediante la Canvas API.'
    }, {
      question: '¿Por qué lo hice?',
      answer: <>Este proyecto nació como un desafío personal para:
        <ul className='space-y-2 list-disc marker:text-gray-700 ml-6'>
          <li>Mejorar mi dominio de clases en JavaScript.</li>
          <li>Practicar lógica de programación orientada a objetos.</li>
          <li>Explorar conceptos clave de desarrollo de juegos: físicas, colisiones, animaciones por sprites y diseño modular.</li>
        </ul>
      </>
    },
  ],
  features: [
    <><b>Movimiento fluido del personaje</b>: correr, saltar, volar</>,
    <><b>Animaciones por sprites</b>: correr, saltar, volar, atacar</>,
    <><b>Detección de colisiones</b> con enemigos y disparo de proyectiles</>,
    <><b>Sistema de evolución</b></>,
    <><b>Arquitectura escalable basada en clases</b>: Player, Enemy, Munition, Item...</>
  ],
  technologies:['Html', 'Css', 'Javascript'],
  learnings:[
    <><b>Cómo estructurar un juego</b> desde cero con Canvas API.</>,
    <><b>Uso de clases y herencia</b> para organizar el código de forma escalable y mantenible.</>,
    <><b>Animaciones de sprites</b> sincronizadas con el estado del jugador</>, 
    <><b>Gestión de colisiones complejas</b>: personaje vs. enemigos, balas vs. enemigos/player</>,
  ],
  links: {
    github: 'https://github.com/aurelienog/Game-canvas',
  },
}, {
    id: '4',
    name:"Página de Adopción de Mascotas",
    architecture: "SSR con handlebars",
    description: <>Fur-Ever Friends es un refugio de animales dedicado a encontrar hogares amorosos para mascotas. La web permite a los usuarios explorar animales en adopción, completar solicitudes y gestionar sus perfiles de manera sencilla e intuitiva.</>,
    images: [{
      image: shelterExpress, 
      description: 'Sección "Vidas transformadas gracias a la adopción", con tres testimonios acompañados de fotos de animales adoptados.'
    }, {
      image: expressLogin,
      description: 'Formulario de login con ilustración de funciones destacadas en notas adhesivas.'
    }],
    technologies: ['MongoDb', 'Express','Handlebars', 'Node.js', 'Tailwindcss'],
    features: [
      <><b>Registro y login</b> de usuarios con sesión (express-session)</>,
      <><b>Contraseñas cifradas</b> con bcrypt</>,
      <><b>Gestión de usuarios con roles</b> : admin / usuario regular</>,
      <><b>Subida de imágenes</b> con Multer, guardadas en Cloudinary</>,
      <><b>Página de adopciones con filtros</b> : especie, sexo, edad...</>,
      <><b>Validación de formularios</b> tanto en el cliente como en el servidor</>,
      <><b>API RESTful</b> con rutas protegidas para:
        <ul className='space-y-2 list-disc marker:text-gray-700 ml-6'>
          <li>Crear, leer, actualizar y eliminar animales (CRUD)</li>
          <li>Crear y autenticar usuarios</li>
          <li>Enviar mensajes desde el formulario de contacto</li>
        </ul>
      </>,
      <><b>Gestión robusta de errores </b>en la API</>
    ],
    links: {
    github: 'https://github.com/aurelienog/Shelter-Express',
  },
}]

export const illustratedTechnologies = [{
  name: 'HTML',
  icon: htmlIcon,
  splash: orangeSplash
}, {
  name: 'CSS',
  icon: cssIcon,
  splash: purpleSplash
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
  splash: greySplash, 
}, {
  name:'Next-Auth',
  icon: nextjsIcon,
  splash: orangeSplash, 
},  {
  name:'Vercel',
  icon: vercelIcon,
  splash: greySplash, 
}, {
  name:'EsLint',
  icon: eslintIcon,
  splash: orangeSplash, 
}, {
  name:'framer motion',
  icon: motionIcon,
  splash: yellowSplash, 
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
