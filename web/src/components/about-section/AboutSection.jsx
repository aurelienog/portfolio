import React, { useState } from 'react'
import iaImg from '../../assets/ia.jpg';
import { Link } from "react-router-dom";


function AboutSection() {
  return (
    <section className='bg-black rounded-4xl text-white/90 p-8 md:grid grid-cols-[auto_1fr] items-center'>
      <figure className='p-10 h-96'>
        <img src={iaImg} alt="retrato wireframe / scan de Aurelie" className='h-full object-cover'/>
      </figure>
      <article className='space-y-4'>
        <h2 className='mt-8 text-4xl md:text-6xl text-white/90'>Programando mi futuro</h2>
          <p className='mt-8 text-2xl '>Siempre sentí curiosidad por la tecnología y el <b>desarrollo web</b>, así que decidí dar un giro a mi carrera.</p>
          <p className='leading-6'>Me sumergí en el código, completé un <b>bootcamp intensivo</b> en desarrollo web y desde entonces no he dejado de aprender.</p>
          <p className='leading-6'>Ahora, <b>busco mi primera oportunidad profesional</b> para aplicar mis conocimientos y seguir creciendo en un entorno dinámico e innovador.</p>
          <Link to="/about" className='inline-block mt-12 border rounded-full px-8 py-4 font-bold text-center cursor-pointer'>Más sobre mí</Link>
      </article> 
    </section>
  )
}

export default AboutSection