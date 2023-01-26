import React from "react";
import "./Projects.scss";
import { projects } from "../../projects";
import ProjectCard from "../../components/cards/ProjectCard";
import PageNavbar from "../../components/page-navbar/PageNavbar";

const Projects = ({setShowPage}) => {

  return (
    <div className="page-projects">
      <PageNavbar
        button1="home"
        button2="about"
        title="PROJECTS"
        setShowPage={setShowPage}
      />

      <section className="projects-content">
        {projects.map(project => {
          return (
            <ProjectCard key={`${project.title}-${project.subtitle}`} project={project} />
          )
        })}
      </section>
    </div>
  );
};

export default Projects;
