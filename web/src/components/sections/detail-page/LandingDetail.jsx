function LandingDetail({ name, image }) {
  return (
    <section>
      <h1>{name}</h1>
      <figure>
        <img src={image} alt="" className="rounded-(--border-radius)"/>
      </figure>
    </section>
  )
}

export default LandingDetail