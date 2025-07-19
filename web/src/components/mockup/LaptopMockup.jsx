import laptop from '../../assets/images/macbook.webp';

function LaptopMockup({ image, alt}) {
  return (
    <figure className='w-full aspect-[4/3] relative max-w-xl m-auto'>  
    <img src={laptop} alt="" className='w-full h-auto absolute'/>  
      <div className='w-[75%] relative top-[5%] aspect-[4/2.5] m-auto'>
        <img src={image.image} alt={alt} className='w-full h-full object-cover absolute animate-show opacity-0'/>
      </div>
    </figure>
  )
}

export default LaptopMockup