import mac from '../../assets/images/mac.webp';

function MacMockup({ image, alt, className}) {
  return (
    <figure className={`${className} relative`}>
      <img src={mac} alt="" className='py-4'/>
      <img src={image} alt={alt} className='top-8 p-6 absolute animate-show opacity-0'/>
    </figure>
  )
}

export default MacMockup