import GalleryCard from "./GalleryCard"
import { Link } from 'react-router-dom';

function Gallery({ projects }) {
  return (
    <div className="grid grid-auto-fit gap-8 w-full [&:has(.galleryCard:hover)_.galleryCard:not(:hover)]:grayscale [&:has(.galleryCard:hover)_.galleryCard:not(:hover)]:brightness-50">
      { projects?.map((project, index) => (
        <Link to={`/projects/${project.id}`} key={index}>
          <GalleryCard  {...project}/>
        </Link>
        
      ))}
    </div>
  )
}

export default Gallery