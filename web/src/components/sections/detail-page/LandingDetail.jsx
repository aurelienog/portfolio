function LandingDetail({ name, images, description }) {
  return (
    <section className="mb-32 md:mb-44">
      <h1>{name}</h1>
      <figure className="aspect-video w-full mb-8">
        <img src={images[0].image} alt={images[0].description} className="rounded-(--border-radius) w-full h-full object-cover"/>
      </figure>
      <p>{description}</p>
    </section>
  )
}

export default LandingDetail