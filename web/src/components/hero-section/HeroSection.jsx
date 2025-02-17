import React from 'react'
import SplashBackground from '../splash-background/SplashBackground'
import meImg from '../../assets/me-transp.png';
import Button from '../button/Button';



function HeroSection() {
  return (
    <section className='md:grid grid-cols-2 gap-8 pt-10'>
      <div className='md:mt-20'>
        <h1 className='text-5xl font-bold'>Desarrolladora Full Stack</h1>
        <p className='mt-8 mb-16 leading-normal'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            suscipit voluptate obcaecati iure, nesciunt quod unde sunt repellat
            similique delectus.</p>
        <Button>Hire me</Button>
      </div>
      <figure>
        <SplashBackground image={meImg}/>
      </figure>
      
    </section>
  )
}

export default HeroSection