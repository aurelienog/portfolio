import { technologies } from "../data/data";

function getTechnologiesByName(techNames) {
  return techNames
    .map((name) => 
      technologies.find(
        (tech) => tech.name.toLowerCase() === name.toLowerCase()
      )
    )
    .filter(Boolean); // delete 'undefined' result
}

export default getTechnologiesByName