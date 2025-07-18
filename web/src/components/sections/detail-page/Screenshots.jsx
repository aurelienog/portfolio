import React from 'react'

function Screenshots({ images }) {
  return (
    <section>
      <h2 className="">Screenshots</h2>
      <p className='md:hidden text-center font-sans uppercase'>⬅ deslizar ⮕</p>
      <div className="scroll-layout">
        <div className="carousel">
        <ul className="content">
          {images.map((image, index) => ( 
          <li key={`screenshots-${index}`}>
            <img src={image} alt="" className="h-full w-full object-cover"/>
          </li>))}
        </ul> 
        </div>
        </div>
    </section>
  )
}

export default Screenshots