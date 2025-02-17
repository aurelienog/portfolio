import React from 'react'

function Button({children}) {
  return (
    <button className='bg-black text-white rounded-full px-4 py-2 cursor-pointer '>{children}</button>
  )
}

export default Button