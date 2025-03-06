import React from 'react'
import github from '../../assets/github.svg';
import linkedIn from '../../assets/linkedin.svg';
import NeonIcon from '../neon-icon/NeonIcon';
import footerMask from '../../assets/footerMask.svg'

function Footer() {
  return (
    <footer style={{ WebkitMaskImage: `url(${footerMask})`, maskImage: `url(${footerMask})` }} className={`bg-black h-[20rem] flex flex-col justify-end text-white/90 p-8 [-webkit-mask-size:100%_140%] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:top]`}>
      <ul className='flex justify-center gap-6 p-4 w-[80%] mx-auto'>
        <li><NeonIcon icon={github} url="https://github.com/aurelienog"/></li>
        <li><NeonIcon icon={linkedIn} url="https://www.linkedin.com/in/aurelie-nogueira"/></li>
      </ul>
      <p className="text-xs text-center text-gray-400">&copy; 2025 Aurélie Nogueira. Todos los derechos reservados. <br></br>
      Ilustraciones por <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Freepik</a>.</p>
    </footer>
  )
}

export default Footer