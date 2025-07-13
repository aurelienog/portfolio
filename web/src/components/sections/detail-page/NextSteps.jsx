function NextSteps({ nextSteps }) {
  return (
    <section>
      <h2>Próximos pasos:</h2>
      <ul className="space-y-6 ml-6  leading-tight text-gray-700 list-['➟'] marker:text-accent marker:text-xl">
        {nextSteps?.map((p, index) => (     
        <li key={index}>{p}</li>
        ))}
      </ul>
    </section>
  )
}

export default NextSteps