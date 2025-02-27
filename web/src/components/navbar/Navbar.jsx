import React from 'react'
import { Link } from "react-router-dom"
import MenuIcon from "../../assets/menu.svg?react"

function Navbar() {
  return (

      <nav className='flex justify-around sticky top-0 font-bold font-sans text-2xl uppercase md:w-[80%] max-w-screen-xl bg-background z-50 h-[var(--header-height)] md:grid items-center grid-cols-[auto_2fr] lg:grid-cols-[2fr_4fr] mx-auto'>
        <div className='hover:underline hover:underline-offset-4 decoration-4 md:pl-8' >
          <Link to="/">Aurélie Nogueira</Link>
        </div>

          <label htmlFor='menu' className='md:hidden z-20'>
            <MenuIcon/>
          </label>
          <input id='menu' type='checkbox' className='hidden peer'/>
          <ul className='fixed pt-30 inset-0 space-y-8 text-center md:space-y-0 md:p-0 bg-pink-300 md:bg-background md:relative md:items-center md:flex md:justify-self-end md:gap-32 [clip-path:circle(0%_at_top_right)] peer-checked:[clip-path:circle(60%_at_top_right)] md:[clip-path:circle(150%_at_top_right)] transition-[clip-path] duration-500'>
            <li className='hover:underline underline-offset-4 decoration-4'><Link to="/about">01_ Sobre Mí</Link></li>
            <li className='hover:underline underline-offset-4 decoration-4'><Link to="/about">02_ Mis proyectos</Link></li>
            <li className='hover:underline underline-offset-4 decoration-4'><Link to="/about">03_ Contáctame</Link></li>
          </ul>

        
      </nav>

    
  )
}

export default Navbar