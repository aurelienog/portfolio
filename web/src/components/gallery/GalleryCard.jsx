import getTechnologiesByName from "../../lib/getTechnologiesByName"
import SplashIcon from "../splash-icon/SplashIcon"

function GalleryCard({ name, architecture, technologies, description, image }) {
  const technologyObjects = getTechnologiesByName(technologies);

  return (
    <article className="galleryCard md:hover:scale-105 transition-[filter_scale]  duration-300 cursor-pointer bg-background shadow-2xl overflow-hidden rounded-[var(--border-radius)]">
      <figure>
        <img src={image} alt="" className="rounded-[1.5rem_1.5rem_0_0] block w-full aspect-video object-cover object-center" />
      </figure>  
      <h2 className="text-2xl pb-0 pt-6 p-4 mb-0">{name}</h2>
      <p className="px-4 mb-3 text-xl font-sans">{architecture}</p>
      <p className="px-4 pt-2 text-sm h-auto [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden overflow-ellipsis">{description}</p>
      <div className='p-4 flex flex-wrap justify-center md:justify-start w-full'>
        {technologyObjects.map((tech, index) => (
          <SplashIcon key={index} {...tech} height={'h-13'}/>
        ))}         
        </div>
    </article>
  )
}

export default GalleryCard