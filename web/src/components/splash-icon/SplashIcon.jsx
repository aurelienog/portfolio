import React from 'react'

function SplashIcon({icon, splash}) {

  return (
    <div className='h-25 aspect-square relative flex items-center justify-center '>
      <img src={splash} className=''/>
      <img src={icon} className='absolute h-[50%] object-cover '/>
    </div>
  )
}

export default SplashIcon