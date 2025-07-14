import { useMemo } from "react";
import GalleryCard from "./GalleryCard"
import { Link } from 'react-router-dom';
function Gallery({ projects }) {
  const projectsList = useMemo(() => {
    return projects?.map((project, index) => (
        <Link to={`/projects/${project.id}`} key={index}>
          <GalleryCard  {...project} image={project.images[0]}/>
        </Link>
      ));
    }, [projects]) 
  return (
    <div className="grid grid-auto-fit gap-8 w-full md:[&:has(.galleryCard:hover)_.galleryCard:not(:hover)]:grayscale md:[&:has(.galleryCard:hover)_.galleryCard:not(:hover)]:brightness-50">
      {projectsList}
    </div>
  )
}

export default Gallery