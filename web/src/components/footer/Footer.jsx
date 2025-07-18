import Github from '../../assets/icons/github.svg';
import LinkedIn from '../../assets/icons/linkedin.svg';
import NeonIcon from '../neon-icon/NeonIcon';
import { Link } from "react-router-dom";

// #FEF8F4
function Footer() {
  return (
    <footer className='pt-50 relative z-10' style={{
      background: "radial-gradient(150% 85% at 50% 1%, transparent 30%, rgb(255, 160, 146) 120%)",
    }}>

      <ul className='grid justify-center text-center my-8 font-sans text-2xl  md:[&:has(.links:hover)_.links:not(:hover)]:opacity-50'>
        <li className='links'><Link to='/' className='animated-underline outline-0 focus:text-accent '>Top</Link></li>
        <li className='links'><Link to="/about" className='animated-underline outline-0 focus:text-accent '>Sobre Mí</Link></li>
        <li className='links'><Link to="/projects" className='animated-underline outline-0 focus:text-accent '>Mis proyectos</Link></li>
        <li className='links'><Link to="/#contact" className='animated-underline outline-0 focus:text-accent '>Contáctame</Link></li>
      </ul>
      <ul className='flex justify-center gap-6 w-[80%] mx-auto '>
        <li><NeonIcon icon={Github} url="https://github.com/aurelienog" aria={'Github'}/></li>
        <li><NeonIcon icon={LinkedIn} url="https://www.linkedin.com/in/aurelie-nogueira" aria={'LinkedIn'} /></li>
      </ul>
      <p className="text-xs! text-center mt-6">&copy; 2025 Aurélie Nogueira. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer