import SplashBackground from '../splash-background/SplashBackground'
import meImg from '../../assets/images/me-hero.webp';
import extraSplash from '../../assets/images/extraSplash.webp';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <section aria-labelledby="inicio" className='lg:grid grid-cols-2 pt-10 items-center'>
      <figure className='md:order-1 mx-8 mb-14 md:mb-0 relative h-auto aspect-square'>
        <SplashBackground image={meImg}/>
        <img src={extraSplash} alt="" fetchPriority="high" className='hidden md:block absolute w-32 -bottom-48 right-12 starting:opacity-0 transition-opacity delay-600 duration-700 ease-in-out opacity-100 [aria-hidden:"true"]'/>
      </figure>
      <article>
        <h1 id='inicio' className='mb-0 text-6xl! md:text-9xl! text-start'>Hola ! Soy Aurélie </h1>
        <p className='mt-8 mb-12 text-xl md:text-2xl'> Desarrolladora Full Stack enfocada en crear interfaces rápidas, accesibles y con una experiencia de usuario óptima.</p>
        <Link to={{
          pathname: '/',
          hash: "#contacto"
        }} className='button'>Contáctame</Link>
      </article>
    </section>
    
  )
}

export default HeroSection