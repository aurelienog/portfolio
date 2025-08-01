import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => { setOpen(prev => !prev)};

  return (
      <nav id="main-navigation" className='md:w-[80%] text-[#15080c] mx-auto max-w-screen-xl md:mx-auto px-10 md:px-0 relative font-sans text-2xl flex items-center justify-between'>
          <Link to="/" onClick={() => setOpen(false)}  className='animated-underline z-50' aria-label='home' >Aurélie Nogueira</Link>
          <HamburgerMenu handleClick={ handleClick } open={open}/>
          <ul className={`${open ? 'absolute w-full top-0 left-0 px-10 my-4 py-12 z-40 bg-background shadow-[0_4px_6px_rgba(0,0,0,0.1)] md:shadow-none grid justify-start md:relative md:flex md:justify-end md:my-0 md:p-0 md:gap-20' : 'hidden shadow-none md:relative md:flex md:mt-0 md:p-0 md:gap-20'}`}>
            <li onClick={() => setOpen(false)} className='animated-underline'><Link to="/about">Sobre Mí</Link></li>
            <li onClick={() => setOpen(false)} className='animated-underline'><Link to="/projects">Mis proyectos</Link></li>
            <li onClick={() => setOpen(false)} className='animated-underline'><Link to={{ pathname: '/', hash: "#contacto" }}>Contáctame</Link></li>
          </ul>
      </nav>
  )
}

export default Navbar