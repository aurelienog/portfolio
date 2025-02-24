import React from 'react'

function Button({children}) {
  return (
    <button className='bg-[#e10505]/90 uppercase outline-2 font-bold text-white/90 rounded-full px-8 py-4 cursor-pointer hover:scale-110 transition-transform shadow-2xl '>{children}</button>
  )
}

export default Button