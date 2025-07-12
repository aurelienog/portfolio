function Links({ live, github }) {
  return (
    <section>
        <h2>Enlaces</h2>
        <div className='flex gap-4'>
          {live && <a href={live} target='_blank' rel='noopener noreferrer' className='button'>
            Ver en vivo
          </a>}
          <a href={github} target='_blank' rel='noopener noreferrer' className='button'>
            Código en GitHub
          </a>
        </div>
    </section>
  )
}

export default Links