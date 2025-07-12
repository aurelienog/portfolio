import SplashIcon from '../splash-icon/SplashIcon';
import MacMockup from '../mac-mockup/MacMockup';
import getTechnologiesByName from '../../lib/getTechnologiesByName';
import { Link } from 'react-router-dom';

function ProjectCard({name, architecture, id, description, image, index, technologies}) {
  const isOdd = index % 2 !==0;
  const technologyObjects = getTechnologiesByName(technologies)

  return (
    <div className='grid lg:grid-cols-2 md:gap-24 mt-18'>
      <MacMockup image={image} alt={`Captura de pantalla del proyecto ${name}`} className={` ${isOdd? 'md:order-last' : 'md:order-first'}`}/>
      <article className='pt-8'>
        <h3 className='mb-0'>{name}<br></br></h3>
        <h4>{architecture}</h4>
        <p className='my-4'>{description}</p>
        <div className='flex flex-wrap justify-start animate-splash mb-10 w-full'>
        {technologyObjects.map((tech, index) => (
          <SplashIcon key={index} {...tech} height={'h-15 md:h-20'}/>
        ))}         
        </div>
        <Link to={`/projects/${id}`} className='button'>Más info<span className='visually hidden'>sobre el proyecto {name}</span></Link>
      </article>
    </div>
    
  )
}

ProjectCard.defaultProps = {
  className: ''
}

export default ProjectCard