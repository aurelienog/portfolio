import getTechnologiesByName from '../../../lib/getTechnologiesByName';
import SplashIcon from '../../../components/splash-icon/SplashIcon';

function TechStack({ technologies }) {
  return (
    <section>
      <h2>Tecnologías utilizadas</h2>
        <ul className="flex flex-wrap gap-4 justify-center md:justify-start md:gap-8 text-gray-700'">
          
          {technologies?.map((p, index) => {
          const [tech] = getTechnologiesByName(p); 
                return <li key={index} className='grid justify-items-center'>
                          { tech?.icon && <SplashIcon {...tech} height={'h-15 md:h-20'}/>}
                        {p}  
                        </li>})}
        </ul>
    </section>
  )
}

export default TechStack