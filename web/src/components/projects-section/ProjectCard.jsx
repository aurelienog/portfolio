import SplashIcon from '../splash-icon/SplashIcon';
import Button from '../button/Button';
import MacMockup from '../mac-mockup/MacMockup';
import getTechnologiesByName from '../../lib/getTechnologiesByName';

function ProjectCard({name, architecture, description, image, index, technologies}) {
  const isOdd = index % 2 !==0;
  const technologyObjects = getTechnologiesByName(technologies)

  return (
    <div className='py-6 md:py-10 grid lg:grid-cols-2 md:gap-18'>
      <MacMockup image={image} alt={`Captura de pantalla del proyecto ${name}`} className={isOdd? 'md:order-last' : 'md:order-first'}/>
      <article className='py-8'>
        <h3>{name}<br></br></h3>
        <h4>{architecture}</h4>
        <p className='mt-8'>{description}</p>

        <div className='grid grid-cols-3 justify-items-center items-center md:flex animate-splash mb-12 w-full'>
        {technologyObjects.map((tech, index) => (
          <SplashIcon key={index} {...tech}/>
        ))}         
        </div>
        
        <Button>Más info</Button>
      </article>
    </div>
    
  )
}

ProjectCard.defaultProps = {
  className: ''
}

export default ProjectCard