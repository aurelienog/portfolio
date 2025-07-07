function SplashIcon({ name, icon, splash }) {

  return (
    <div className='h-20 aspect-square relative flex items-center justify-center md:scale-0'>
      <img src={splash} alt='' className='opacity-85'/>
      <img src={icon} alt={name} className='absolute h-[50%] object-cover'/>
    </div>
  )
}

export default SplashIcon