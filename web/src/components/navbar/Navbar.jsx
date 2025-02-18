import React from 'react'
import { Link} from "react-router-dom"
import PageLayout from '../layout/PageLayout'

function Navbar() {
  return (

      <nav className='sticky top-0  md:w-[90%] bg-background z-50 h-[var(--header-height)] grid items-center grid-cols-[auto_2fr] lg:grid-cols-[2fr_4fr] gap-16 md:mx-auto'>
        <div className='font-bold'><Link to="/">Aurélie Nogueira</Link></div>
        <ol className='flex justify-evenly'>
          <li className='font-bold font-bebas-neue text-2xl hover:underline underline-offset-4 decoration-4 uppercase'><Link to="/about">01_ Sobre Mí</Link></li>
          <li className='font-bold font-bebas-neue text-2xl hover:underline underline-offset-4 decoration-4 uppercase'><Link to="/about">02_ Mis proyectos</Link></li>
          <li className='font-bold font-bebas-neue text-2xl hover:underline underline-offset-4 decoration-4 uppercase'><Link to="/about">03_ Contáctame</Link></li>
        </ol>
      </nav>

    
  )
}

export default Navbar