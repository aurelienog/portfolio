import React from 'react'
import SplashIcon from '../splash-icon/SplashIcon'

function ProjectCard({name, architecture, description, image, order, technologies}) {
  return (
    <div className='py-10 md:grid grid-cols-2 gap-8'>
      <article className='space-y-4'>
        <div>
          <h3 className='md:text-3xl'>{name}<br></br></h3>
          <h4 className='md:text-2xl'>{architecture}</h4>
        </div>

        <p className='mt-8'>{description}</p>
        <div className='flex animate-splash'>
        {technologies && technologies.map((tech, indice) => (
          <SplashIcon key={indice} icon={tech.tech} splash={tech.splash}/>
        ))}         
        </div>
      </article>
      <figure className={`aspect-video ${order === 'last' ? 'md:order-last' : 'md:order-first'} relative`}>
        <img src={image} alt={`captura de pantalla del proyecto ${name}`} className='h-full object-cover animate-show rounded-2xl'/>
      </figure>
    </div>
    
  )
}

ProjectCard.defaultProps = {
  className: ''
}

export default ProjectCard