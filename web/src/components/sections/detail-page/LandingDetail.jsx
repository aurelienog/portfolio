function LandingDetail({ name, images }) {
  return (
    <section className="mb-32 md:mb-44">
      <h1 className="mb-12 md:mb-32">{name}</h1>
      <figure className="aspect-video w-full">
        <img src={images[0]} alt="" className="rounded-(--border-radius) w-full h-full object-cover"/>
      </figure>
    </section>
  )
}

export default LandingDetail