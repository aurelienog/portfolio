import { Link } from "react-router-dom";
import MenuIcon from "../../assets/icons/menu.svg?react";

function Navbar() {
  return (

      <nav className='flex justify-around sticky top-0 font-bold font-sans text-2xl md:w-[80%] max-w-screen-xl  z-50 h-[var(--header-height)] md:grid items-center grid-cols-[auto_2fr] lg:grid-cols-[2fr_4fr] mx-auto'>
          <Link to="/" className='animated-underline w-fit md:ml-8' aria-label='home' >Aurélie Nogueira</Link>
          <label htmlFor='menu' className='md:hidden z-20'>
            <MenuIcon/>
          </label>
          <input id='menu' type='checkbox' className='hidden peer'/>
          <ul className='fixed pt-16 inset-0 space-y-8 text-center md:space-y-0 md:p-0 bg-pink-300 md:bg-background md:relative md:items-center md:flex md:justify-self-end md:gap-32 [clip-path:circle(0%_at_top_right)] peer-checked:[clip-path:circle(65%_at_top_right)] md:[clip-path:circle(150%_at_top_right)] transition-[clip-path] duration-500'>
            <li className='animated-underline'><Link to="/about">Sobre Mí</Link></li>
            <li className='animated-underline'><Link to="/about">Mis proyectos</Link></li>
            <li className='animated-underline'><Link to={{ pathname: '/home', hash: "#contact" }}>Contáctame</Link></li>
          </ul>
      </nav>

    
  )
}

export default Navbar