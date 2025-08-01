import getTechnologiesByName from '../../lib/getTechnologiesByName';
import { techStacks } from '../../data/data';

function SkillsSection() {
  return (
    <section aria-labelledby="tecnologias" className="bg-black p-8 text-white [border-radius:var(--border-radius)]">
      <h2 id='tecnologias' className="text-center text-white">Stack Tecnológico</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:justify-items-center space-y-8">
        {techStacks.map((stack, index) => {
          return <article key={index}>
            <h3 className='text-white max-w-40'>{stack.name}</h3>
            <ul className='space-y-1'>
              {stack.skills.map((skill, i) => {
                const [tech] = getTechnologiesByName(skill); 
                return <li key={i} className='flex items-end gap-2'>
                          { tech?.icon && <img src={tech.icon} width={24} height={24} className="invert-100" alt=''/> }
                        {skill}  
                        </li>})}
            </ul>
          </article>
        })}
      </div>
    </section>
  )
}

export default SkillsSection