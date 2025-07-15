import splash from '../../assets/images/splash.webp';
import splash2 from '../../assets/images/splash2.webp';

function SplashBackground({image}) {
  return (
      <div className='h-full relative'>
        <img src={splash2} alt="" fetchPriority="high" className='starting:opacity-0 transition-opacity delay-600 duration-700 ease-in-out  opacity-100 absolute w-full scale-135 translate-y-4 md:translate-y-16 [aria-hidden:"true"] object-cover '/>
        <img src={splash} alt="" fetchPriority="high" className='starting:opacity-0 transition-opacity delay-200 duration-700 ease-in-out opacity-100 absolute w-full rotate-180 [aria-hidden:"true"] object-cover '/>
        <img src={image} fetchPriority="high" alt="Retrato de Aurelie sobre un fondo de manchas de acuarela" className={`saturate-125 w-full object-cover [-webkit-mask-image:linear-gradient(rgb(0_0_0_/1),rgb(0_0_0_/0.99),rgb(0_0_0_/0))] [mask-image:linear-gradient(rgb(0_0_0_/1),rgb(0_0_0_/1),rgb(0_0_0_/1),rgb(0_0_0_/0.9),rgb(0_0_0_/0),rgb(0_0_0_/0))]`} />
      </div>
  )
}

export default SplashBackground