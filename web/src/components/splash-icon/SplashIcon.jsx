function SplashIcon({ name, icon, splash, height }) {

  return (
    <div className={`${height} aspect-square relative flex items-center justify-center`}>
      <img src={splash} alt='' className='opacity-85' style={{ width: '100%', maxWidth: '100px', height: 'auto' }}/>
      <img src={icon} alt={name} className='absolute h-[50%] object-cover'/>
    </div>
  )
}

export default SplashIcon