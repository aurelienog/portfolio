import React from 'react'
import splash from '../../assets/splash.png';
import splash2 from '../../assets/splash2.png';

function SplashBackground({image}) {
  return (
      <div className='h-full relative'>
        <img src={splash2} alt="" className='starting:opacity-0 transition-opacity delay-600 duration-700 ease-in-out  opacity-100 absolute h-full scale-135 translate-y-16 -rotate-12 [aria-hidden:"true"] '/>
        <img src={splash} alt="" className='starting:opacity-0 transition-opacity delay-200 duration-700 ease-in-out opacity-100 absolute h-full rotate-180 [aria-hidden:"true"] '/>
        <img src={image} alt="Retrato de Aurelie sobre un fondo de manchas de acuarela" className={`saturate-125 h-full object-cover [-webkit-mask-image:linear-gradient(rgb(0_0_0_/1),rgb(0_0_0_/0.99),rgb(0_0_0_/0))] [mask-image:linear-gradient(rgb(0_0_0_/1),rgb(0_0_0_/1),rgb(0_0_0_/1),rgb(0_0_0_/0.9),rgb(0_0_0_/0),rgb(0_0_0_/0))]`} />
      </div>
  )
}

export default SplashBackground