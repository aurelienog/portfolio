import mac from '../../assets/images/mac.webp';

function MacMockup({ image, alt, className, mockup}) {
  return (
    <div className={`${className} aspect-square w-full max-w-xl m-auto`}>
      <figure className='w-full aspect-[4/3] relative'>
        <div className={` relative ${mockup? 'w-[75%] left-[12%] top-[10%]' : 'w-full mx-auto'}`}>
          <img src={mac} alt="" className='w-full h-auto absolute'/>
          <img src={image} alt={alt} className='w-full h-auto p-4 absolute animate-show opacity-0'/>
        </div>
        {mockup && <>
          <img src={mockup[0]} alt="" className='absolute -bottom-[2%] -left-[4%] w-[64%] h-auto '/>
          <img src={mockup[1]} alt="" className='absolute -bottom-[6%] right-[2%] w-[30%] h-auto '/>
          <img src={mockup[2]} alt="" className='absolute -bottom-[8%] right-[25%] w-[13%] h-auto '/>
        </>}
      </figure>
      
    </div>
  )
}

export default MacMockup