import React from 'react'
import SplashBackground from '../splash-background/SplashBackground'
import meImg from '../../assets/me-transp.png';
import Button from '../button/Button';
import extraSplash from '../../assets/extraSplash.png';


function HeroSection() {
  return (
    <section className='md:grid grid-cols-2 gap-16 pt-6 px-8 items-center'>
      <figure className='md:order-1 relative'>
        <SplashBackground image={meImg}/>
        <img src={extraSplash} className='hidden md:block absolute w-32 -bottom-48 right-12 starting:opacity-0 transition-opacity delay-600 duration-700 ease-in-out opacity-100 [aria-hidden:"true"]'/>
      </figure>
      <div className='mt-8'>
        <h1 className='text-5xl md:text-9xl font-bold'>Hola ! Soy Aurélie </h1>
        <p className='mt-8 mb-20 leading-normal text-xl'>Desarrolladora Full Stack con mentalidad analítica y resolutiva. Busco mi primera oportunidad laboral en Bilbao para crear soluciones con JavaScript en un entorno dinámico y desafiante.</p>
        <Button>Contáctame</Button>
      </div>
    </section>
    
  )
}

export default HeroSection