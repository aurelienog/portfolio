import React, { useState } from 'react'
import iaImg from '../../assets/ia.jpg';
import { Link } from "react-router-dom";


function AboutSection() {
  return (
    <section className='bg-black rounded-4xl text-white/90 p-8 md:grid grid-cols-[auto_1fr] items-center'>
      <figure className='p-10 h-96 [aria-hidden:"true"]'>
        <img src={iaImg} alt="" className='h-full object-cover'/>
      </figure>
      <article className='space-y-4'>
        <h2 className='mt-8 text-4xl md:text-6xl text-white/90'>Mi salto al desarrollo</h2>
          <p className='mt-8 text-xl '>Siempre sentí curiosidad por la tecnología y la programación, así que decidí dar un giro a mi carrera.</p>
          <p className='leading-6'>Me sumergí en el código, completé un <b className='text-purple-400'>bootcamp intensivo</b> en desarrollo web y desde entonces no he dejado de aprender.</p>
          <p className='leading-6'>Hablo <b className='text-purple-400'>francés, español e inglés </b>lo que me permite integrarme fácilmente en equipos multilingües.</p>
          <Link to="/about" className='shadow-[0_0_5px_theme(colors.purple.200),_0_0_20px_theme(colors.purple.700)] inline-block mt-12 rounded-full px-8 py-4 mb-8 font-bold bg-black text-white/90 text-center cursor-pointer hover:scale-110 transition-transform hover:outline-2 outline-purple-500 hover:shadow-[0_0_5px_theme(colors.purple.200),_0_0_20px_theme(colors.purple.700)]'>Más sobre mí</Link>
      </article> 
    </section>
  )
}

export default AboutSection