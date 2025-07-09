import GalleryCard from "./GalleryCard"

function Gallery({ projects }) {
  console.log(projects)
  return (
    <div className="grid grid-auto-fit p-8 gap-8 w-full">
      { projects?.map((project, index) => (
        <GalleryCard key={index} {...project}/>
      ))}
    </div>
  )
}

export default Gallery