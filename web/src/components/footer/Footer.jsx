import React from 'react'
import Github from '../../assets/Github.svg?react';
import LinkedIn from '../../assets/linkedin.svg?react';
import NeonIcon from '../neon-icon/NeonIcon';

function Footer() {
  return (
    <footer className='bg-black text-white/90 p-8'>
      {/* <ul className='flex justify-center gap-6 p-4 w-[80%] mx-auto'>
        <li><NeonIcon Icon={Github} url="https://github.com/aurelienog"/></li>
        <li><NeonIcon Icon={LinkedIn} url="https://www.linkedin.com/in/aurelie-nogueira"/></li>
      </ul> */}

      <p className="text-xs text-center text-gray-400">&copy; 2025 Aurélie Nogueira. Todos los derechos reservados. <br></br>
      Ilustraciones por <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Freepik</a>.</p>
    </footer>
  )
}

export default Footer