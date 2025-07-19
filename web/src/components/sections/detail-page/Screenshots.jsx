import React from 'react'

function Screenshots({ images }) {
  return (
    <section>
      <h2 className="">Screenshots</h2>
      <figcaption className='md:hidden text-center font-sans uppercase'>
        <span role="img" aria-label="flecha-izquierda">&#x2B05;</span> 
        desliza para ver más fotos 
        <span role="img" aria-label="flecha-derecha">&#x27A1;</span>
      </figcaption>
      <figure className="scroll-layout">
        <div className="carousel">
        <ul className="content">
          {images.map((image, index) => ( 
          <li key={`screenshots-${index}`}>
            <img src={image.image} alt={image.description} className="h-full w-full object-cover"/>
          </li>))}
        </ul> 
        </div>
        </figure>
    </section>
  )
}

export default Screenshots