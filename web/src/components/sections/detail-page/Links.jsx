function Links({ live, github }) {
  return (
    <section>
        <h2>Enlaces</h2>
          <a href={live} target='_blank' rel='noopener noreferrer' className='button mb-4 mr-4'>
            Ver en vivo
          </a>
          <a href={github} target='_blank' rel='noopener noreferrer' className='button'>
            Código en GitHub
          </a>
    </section>
  )
}

export default Links