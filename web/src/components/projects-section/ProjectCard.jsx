import React from 'react'
import SplashIcon from '../splash-icon/SplashIcon'
import mac from '../../assets/mac.png';
import Button from '../button/Button'

function ProjectCard({name, architecture, description, image, order, technologies}) {
  return (
    <div className='py-10 md:grid grid-cols-2 gap-8'>
      
      <article className='space-y-4 p-8'>
        <div>
          <h3 className='md:text-3xl'>{name}<br></br></h3>
          <h4 className='md:text-2xl'>{architecture}</h4>          
        </div>

        <p className='mt-8'>{description}</p>
        <div className='flex animate-splash mb-12'>
        {technologies && technologies.map((tech, indice) => (
          <SplashIcon key={indice} icon={tech.tech} splash={tech.splash}/>
        ))}         
        </div>
        <Button>Más info</Button>
      </article>
      <figure className={`${order === 'last' ? 'md:order-last' : 'md:order-first'} relative`}>
        <img src={mac} alt="" className='py-4'/>
        <img src={image} alt={`captura de pantalla del proyecto ${name}`} className='top-8 p-6 absolute animate-show rounded-2xl'/>
      </figure>
    </div>
    
  )
}

ProjectCard.defaultProps = {
  className: ''
}

export default ProjectCard