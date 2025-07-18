function LandingDetail({ name, images, description }) {
  return (
    <section className="mb-32 md:mb-44">
      <h1>{name}</h1>
      <figure className="aspect-video w-full mb-8">
        <img src={images[0]} alt="" className="rounded-(--border-radius) w-full h-full object-cover"/>
      </figure>
      <p>{description}</p>
    </section>
  )
}

export default LandingDetail