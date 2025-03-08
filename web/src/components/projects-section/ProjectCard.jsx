import React from 'react'
import SplashIcon from '../splash-icon/SplashIcon'
import mac from '../../assets/images/mac.webp';
import Button from '../button/Button'

function ProjectCard({name, architecture, description, image, order, technologies}) {
  return (
    <div className='py-6 md:py-10 md:grid grid-cols-2 md:gap-18'>
      
      <article className='space-y-4 py-8'>
        <div>
          <h3>{name}<br></br></h3>
          <h4>{architecture}</h4>
          <figure className={`md:hidden ${order === 'last' ? 'md:order-last' : 'md:order-first'} mt-4 relative`}>
            <img src={mac} alt="" className='py-4'/>
            <img src={image} alt={`captura de pantalla del proyecto ${name}`} className='top-6 p-2 absolute animate-show'/>
          </figure>          
        </div>

        <p className='mt-8'>{description}</p>

        <div className='grid grid-cols-3 justify-items-center items-center md:flex animate-splash mb-12 w-full'>
        {technologies && technologies.map((tech, indice) => (
          <SplashIcon key={indice} icon={tech.tech} splash={tech.splash}/>
        ))}         
        </div>
        <Button>Más info</Button>
      </article>
      <figure className={`hidden md:block ${order === 'last' ? 'md:order-last' : 'md:order-first'} relative`}>
        <img src={mac} alt="" className='py-4'/>
        <img src={image} alt={`captura de pantalla del proyecto ${name}`} className='top-8 p-6 absolute animate-show'/>
      </figure>
    </div>
    
  )
}

ProjectCard.defaultProps = {
  className: ''
}

export default ProjectCard