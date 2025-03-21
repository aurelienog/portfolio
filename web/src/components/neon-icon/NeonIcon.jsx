import React from 'react'

function NeonIcon({icon, url, aria}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className='inline-block transition-colors transition-transform transition-outline duration-300 ease-in-out rounded-full aspect-square bg-white/50 content-center text-white/60 hover:scale-125 hover:text-purple-500 w-12 cursor-pointer mx-auto hover:outline-2 hover:shadow-[0_0_5px_theme(colors.purple.200),_0_0_20px_theme(colors.purple.700)]'>
      <img src = {`${icon}`} alt={aria} className="w-[70%] h-auto mx-auto"/>
    </a>
  )
}

export default NeonIcon