function Learnings({ learnings }) {
  return (
    <section>
      <h2>Lo que aprendí</h2>
        <ul className="space-y-2">
          {learnings?.map((p, index) => (
            <li key={index} className="list-disc pl-2 text-gray-700">{p}</li>
          ))}
        </ul>
    </section>
  )
}

export default Learnings