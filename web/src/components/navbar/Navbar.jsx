import React from 'react'
import { Link } from "react-router-dom"
import MenuIcon from "../../assets/menu.svg?react"

function Navbar() {
  return (

      <nav className='sticky top-0 font-bold font-bebas-neue text-2xl px-8 uppercase md:w-[80%] max-w-screen-xl  bg-background z-50 h-[var(--header-height)] flex justify-between md:grid items-center grid-cols-[auto_2fr] lg:grid-cols-[2fr_4fr] mx-auto'>
        <div className='hover:underline hover:underline-offset-4 decoration-4'>
          <Link to="/">Aurélie Nogueira</Link>
        </div>
        <div>
          <label htmlFor='menu' className='md:hidden'>
            <MenuIcon/>
          </label>
          <input id='menu' type='checkbox' className='hidden peer'/>
          <ul className='hidden md:flex justify-self-end gap-32'>
            <li className='hover:underline underline-offset-4 decoration-4'><Link to="/about">01_ Sobre Mí</Link></li>
            <li className='hover:underline underline-offset-4 decoration-4'><Link to="/about">02_ Mis proyectos</Link></li>
            <li className='hover:underline underline-offset-4 decoration-4'><Link to="/about">03_ Contáctame</Link></li>
          </ul>
        </div>
        
      </nav>

    
  )
}

export default Navbar