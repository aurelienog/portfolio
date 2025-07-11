function Features({ features }) {
  return (
    <section>
      <h2>Características principales</h2>
        <ul className="space-y-2">
          {features?.map((p, index) => (
            <li key={index} className="list-disc pl-2 text-gray-700">{p}</li>
          ))}
        </ul>
    </section>
  )
}

export default Features