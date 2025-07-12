function NextSteps({ nextSteps }) {
  return (
    <section>
      <h2>Próximos pasos:</h2>
      <ul className="space-y-2">
        {nextSteps?.map((p, index) => (     
        <li key={index} className="list-disc pl-2 text-gray-700">{p}</li>
        ))}
      </ul>
    </section>
  )
}

export default NextSteps