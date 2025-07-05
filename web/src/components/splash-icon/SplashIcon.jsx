function SplashIcon({icon, splash, name}) {

  return (
    <div className='h-25 aspect-square relative flex items-center justify-center md:scale-0'>
      <img src={splash} alt='' className='opacity-85'/>
      <img src={icon} alt={name} className='absolute h-[50%] object-cover'/>
    </div>
  )
}

export default SplashIcon