import React from 'react'
import Github from '../../assets/icons/github.svg';
import LinkedIn from '../../assets/icons/linkedin.svg';
import NeonIcon from '../neon-icon/NeonIcon';
import footerMask from '../../assets/images/footerMask.webp'


function Footer() {
  return (
    <footer style={{ WebkitMaskImage: `url(${footerMask})`, maskImage: `url(${footerMask})` }} className={`bg-[url(../../footerImg.png)] bg-bottom bg-cover h-[20rem] flex flex-col justify-end p-8 [-webkit-mask-size:auto_100%] md:[-webkit-mask-size:100%_100%] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]`}>
      <ul className='flex justify-center gap-6 p-4 w-[80%] mx-auto'>
        <li><NeonIcon icon={Github} url="https://github.com/aurelienog"/></li>
        <li><NeonIcon icon={LinkedIn} url="https://www.linkedin.com/in/aurelie-nogueira"/></li>
      </ul>
      <p className="text-xs text-center">&copy; 2025 Aurélie Nogueira. Todos los derechos reservados. <br></br>
      Ilustraciones por <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Freepik</a>.</p>
    </footer>
  )
}

export default Footer