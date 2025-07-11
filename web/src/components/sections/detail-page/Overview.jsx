function Overview({ overview }) {
  return (
    <section className="">
        <h2>Resumen del proyecto</h2>
        {overview?.map((p, index) => ( 
          <article key={index} className="mb-8 space-y-2">
            <p className="font-bold">{p.question}</p>
            <p>{p.answer}</p>
          </article>
        ))}
      </section>
  )
}

export default Overview