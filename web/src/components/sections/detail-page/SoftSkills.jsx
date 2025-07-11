function SoftSkills({ softSkills }) {
  return (
    <section>
      <h2>Soft Skills Reflejadas</h2>
      <ul className="space-y-2">
        {softSkills?.map((p, index) => (
          <li key={index} className="list-disc pl-2 text-gray-700">{p}</li>
        ))}
      </ul>
    </section>
  )
}

export default SoftSkills