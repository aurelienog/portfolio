import React from 'react'
import { Link} from "react-router-dom"
import PageLayout from '../layout/PageLayout'

function Navbar() {
  return (
    <PageLayout>
      <nav className='fixed bg-white top-0 z-50 h-[var(--header-height)] grid items-center grid-cols-[auto_2fr] lg:grid-cols-[2fr_4fr] gap-18 md:w-[90%] md:mx-auto'>
        <div className=''><Link to="/">Aurélie</Link></div>
        <ul className='flex justify-evenly'>
          <li><Link to="/about">Acerca de mi</Link></li>
          <li><Link to="/about">Mis proyectos</Link></li>
          <li><Link to="/about">contactame</Link></li>
        </ul>
      </nav>
    </PageLayout>
    
  )
}

export default Navbar