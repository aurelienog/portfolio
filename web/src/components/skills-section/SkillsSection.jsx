function SkillsSection() {
  return (
    <section className="bg-black p-8 text-white [border-radius:var(--border-radius)]">
      <h2 className="text-center">Stack Tecnológico</h2>
      <div className="xl:flex gap-6 justify-evenly space-y-8">
        <article>
          <h3>Lenguajes & Frameworks</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>    
          </ul>
        </article>
        <article>
          <h3>Estilos & UI</h3>
          <ul>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>Accessibility</li>
          </ul>
        </article>
        <article>
          <h3>Bases de Datos & Autenticación</h3>
          <ul>
            <li>MongoDB</li>
            <li>JWT</li>
            <li>Sessions</li>
          </ul>
        </article>
        <article>
          <h3>Herramientas</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>ESLint</li>
            <li>Postman</li>
            <li>VoiceOver</li>            
            <li>Vercel</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default SkillsSection