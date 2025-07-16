import mac from '../../assets/images/mac.webp';


function MacMockup({ image, alt, className, mockup}) {
  return (
    <div className={`${className} aspect-square w-full max-w-xl m-auto`}>
      <figure className='w-full aspect-video relative'>
        <div className={` relative ${mockup? 'w-[80%] left-[10%]' : ' w-full mx-auto'}`}>
          <img src={mac} alt="" className='w-full h-auto absolute'/>
          <img src={image} alt={alt} className='w-full h-auto p-4 absolute animate-show opacity-0'/>
        </div>
        {mockup && <>
          <img src={mockup[0]} alt="" className='absolute -bottom-[42%] -left-[4%] w-[50%] h-auto '/>
          <img src={mockup[1]} alt="" className='absolute -bottom-[45%] left-[54%] w-[60%] h-auto '/>
          <img src={mockup[2]} alt="" className='absolute -bottom-[44%] left-[52%] w-[40%] h-auto '/>
        </>}
      </figure>
      
    </div>
  )
}

export default MacMockup