function LandingDetail({ name, images }) {
  return (
    <section>
      <h1>{name}</h1>
      <figure>
        <img src={images[0]} alt="" className="rounded-(--border-radius)"/>
      </figure>
    </section>
  )
}

export default LandingDetail