import GalleryCard from "./GalleryCard"
import { Link } from 'react-router-dom';

function Gallery({ projects }) {
  return (
    <div className="grid grid-auto-fit p-8 gap-8 w-full">
      { projects?.map((project, index) => (
        <Link to={`/projects/${project.id}`} key={index}>
          <GalleryCard  {...project}/>
        </Link>
        
      ))}
    </div>
  )
}

export default Gallery