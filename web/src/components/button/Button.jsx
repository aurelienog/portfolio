import React from 'react'

function Button({children}) {
  return (
    <button className='bg-black text-white font-bold rounded-full px-8 py-4 cursor-pointer hover:scale-110 transition-transform shadow-2xl '>{children}</button>
  )
}

export default Button