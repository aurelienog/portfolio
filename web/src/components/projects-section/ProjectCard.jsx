import React from 'react'

function ProjectCard({name, architecture, description, image, order, tech1, tech2, tech3}) {

  return (
    <div className='p-10 md:grid grid-cols-2 items-center'>
      <figure className={`aspect-video ${order === 'last' ? 'md:order-last' : 'md:order-first'} relative`}>
        <img src={image} alt={`captura de pantalla del proyecto ${name}`} className='h-full object-cover animate-show'/>
      </figure>
      <article className='space-y-4 p-10'>
        <h3 className='md:text-3xl'>{name}<br></br>{architecture}</h3>
        <p className='mt-8'>{description}</p>
      </article>
    </div>
    
  )
}

ProjectCard.defaultProps = {
  className: ''
}

export default ProjectCard