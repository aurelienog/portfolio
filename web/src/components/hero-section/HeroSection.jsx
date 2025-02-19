import React from 'react'
import SplashBackground from '../splash-background/SplashBackground'
import meImg from '../../assets/me-transp.png';
import Button from '../button/Button';



function HeroSection() {
  return (
    <section className='md:grid grid-cols-2 gap-16 pt-10'>
      <figure className='md:order-1'>
        <SplashBackground image={meImg}/>
      </figure>
      <div className='mt-14 px-8'>
        <h1 className='text-6xl md:text-9xl font-bold'>Desarrolladora Full Stack</h1>
        <p className='mt-8 mb-14 leading-normal '> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            suscipit voluptate obcaecati iure, nesciunt quod unde sunt repellat
            similique delectus.</p>
        <Button>Contáctame</Button>
      </div>
    </section>
    
  )
}

export default HeroSection