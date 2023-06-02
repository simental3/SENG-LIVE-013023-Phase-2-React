import React from "react";

function ProjectCard({ name, image, about, link, phase }) {
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={`${name} screenshot`} />
      </figure>
      <section className="details">
        <h4>{about}</h4>
        <p>{about}</p>
        <p><a href={link}>Live Demo</a></p>
      </section>
      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  )
}

export default ProjectCard;

// import React from "react";

// function ProjectCard({ project }) {
//   console.log(project)

//   return (
//     <li className="card">
//       <figure className="image">
//         <img src={project.image} alt={`${project.name} screenshot`} />
//       </figure>
//       <section className="details">
//         <h4>{project.about}</h4>
//         <p>{project.about}</p>
//         <p><a href={project.link}>Live Demo</a></p>
//       </section>
//       <footer className="extra">
//         <span className="badge blue">Phase {project.phase}</span>
//       </footer>
//     </li>
//   )
// }

// export default ProjectCard;