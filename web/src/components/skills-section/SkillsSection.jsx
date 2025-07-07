import getTechnologiesByName from '../../lib/getTechnologiesByName';
import { techStacks } from '../../data/data';

function SkillsSection() {
  return (
    <section className="bg-black p-8 text-white [border-radius:var(--border-radius)]">
      <h2 className="text-center">Stack Tecnológico</h2>
      <div className="xl:flex gap-6 justify-evenly space-y-8">
        {techStacks.map((stack, index) => {
          return <article key={index}>
            <h3>{stack.name}</h3>
            <ul className='space-y-1'>
              {stack.skills.map((skill, i) => {
                const [tech] = getTechnologiesByName(skill); 
                return <li key={i} className='flex items-end gap-2'>
                          { tech?.icon && <img src={tech.icon} width={32} height={32} className="invert-100" alt={tech.name}/> }
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