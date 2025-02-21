import React from 'react'

function ProjectCard({name, description, image, order}) {
  return (
    <div className='p-10 md: grid grid-cols-2 mt-20'>
      <figure className=' aspect-video'>
        <img src={image} alt="" className='h-full object-cover animate-show'/>
      </figure>
      <article>
        <h3 className='md: text-3xl'>{name}</h3>
        <p>{description}</p>
      </article>
    </div>
    
  )
}

export default ProjectCard