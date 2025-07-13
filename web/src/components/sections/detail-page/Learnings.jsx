function Learnings({ learnings }) {
  return (
    <section>
      <h2>Aprendizajes clave</h2>
      <ul className="space-y-6 list-['✓'] ml-4 marker:text-xl marker:text-accent text-gray-700">
        {learnings?.map((p, index) => (     
        <li key={index} className="pl-2">{p}</li>
        ))}
      </ul>
    </section>
  )
}

export default Learnings