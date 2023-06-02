import React from "react";
import projects from "../projects";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  console.log(projects)

  const renderedProjectCards = projects.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        name={project.name}
        about={project.about}
        image={project.image}
        link={project.link}
        phase={project.phase} 
      />
    )
  })

  return (
    <section>
      <h1>All Projects</h1>
      <div className="filters">
        <button>All</button>
        <button>Phase 1</button>
        <button>Phase 2</button>
        <button>Phase 3</button>
        <button>Phase 4</button>
        <button>Phase 5</button>
      </div>
      <ul className="cards">
        {renderedProjectCards}
      </ul>
    </section>
  )
}

export default ProjectList;

// import React from "react";
// import projects from "../projects";
// import ProjectCard from "./ProjectCard";

// function ProjectList() {
//   console.log(projects)

//   const renderedProjectCards = projects.map((project) => {
//     return (
//       <ProjectCard
//         key={project.id}
//         project={project} 
//       />
//     )
//   })

//   return (
//     <section>
//       <h1>All Projects</h1>
//       <div className="filters">
//         <button>All</button>
//         <button>Phase 1</button>
//         <button>Phase 2</button>
//         <button>Phase 3</button>
//         <button>Phase 4</button>
//         <button>Phase 5</button>
//       </div>
//       <ul className="cards">
//         {renderedProjectCards}
//       </ul>
//     </section>
//   )
// }

// export default ProjectList;