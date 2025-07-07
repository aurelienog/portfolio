import { illustratedTechnologies } from "../data/data";

function getTechnologiesByName(input) {
  const techNames = Array.isArray(input) ? input : [input];
  return techNames
    .map((name) => 
      illustratedTechnologies.find(
        (tech) => tech.name.toLowerCase() === name.toLowerCase()
      )
    )
    .filter(Boolean); // delete 'undefined' result
}

export default getTechnologiesByName