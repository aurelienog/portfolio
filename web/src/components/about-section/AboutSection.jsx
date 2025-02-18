import React from 'react'
import PageLayout from '../layout/PageLayout'
import Button from '../button/Button';

function AboutSection() {
  return (
    <section className='relative z-10 bg-black rounded-4xl text-background p-8 md:grid grid-cols-[auto_1fr]'>
      <figure>
        <p></p>
      </figure>
      <article className=''>
        <h2 className='mt-8 md:text-6xl'>Pintando mi futuro</h2>
          <p className='mt-8'>Hace unos años, mi día a día giraba en torno a la gestión de apartamentos turísticos, donde desarrollé habilidades clave como organización, resolución de problemas y trabajo en equipo. Pero siempre sentí curiosidad por la tecnología y el desarrollo web, así que decidí dar un giro a mi carrera.
          Me sumergí en el código, completé un bootcamp intensivo en desarrollo web y desde entonces no he dejado de aprender. Ahora, busco mi primera oportunidad profesional para aplicar mis   conocimientos y seguir creciendo en un entorno dinámico e innovador.</p>
          <button className='mt-12 border rounded-full px-8 py-4 font-bold'>TEXTO</button>
      </article> 
    </section>
  )
}

export default AboutSection