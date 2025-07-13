function Features({ features }) {
  return (
    <section>
      <h2>Características principales</h2>
        <ul className="space-y-6 list-['✓'] ml-4 marker:text-xl marker:text-accent text-gray-700">
          {features?.map((p, index) => (
            <li key={index} className="pl-2">{p}</li>
          ))}
        </ul>
    </section>
  )
}

export default Features