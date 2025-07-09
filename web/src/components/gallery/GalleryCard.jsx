function GalleryCard({ name, architecture, image }) {
  return (
    <article className="cursor-pointer border-2">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{architecture}</p>
    </article>
  )
}

export default GalleryCard