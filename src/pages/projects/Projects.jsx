import React from "react";
import Button from "../../components/buttons/Button";
import "./Projects.scss";
import { projects } from "../../projects";
import ProjectCard from "../../components/cards/ProjectCard";

const Projects = ({setShowPage}) => {

  return (
    <div className="page-projects">
      <Button keyProp="projectsBtn-home" text="HOME" className="page_btn" goTo={["home", setShowPage]} />
      <h1 className="page-title">Projects</h1>
      <Button keyProp="projectsBtn-about" text="ABOUT" className="page_btn" goTo={["about", setShowPage]} />

      <section className="projects-content">
        {projects.map(project => {
          return (
            <ProjectCard project={project} />
          )
        })}
      </section>
    </div>
  );
};

export default Projects;
