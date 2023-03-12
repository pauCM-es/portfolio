import React from "react";
import "./Projects.scss";
import { projects } from "../../projects";
import ProjectCard from "../../components/cards/ProjectCard";
import PageNavbar from "../../components/page-navbar/PageNavbar";
import { useSelector } from "react-redux";

const Projects = ({delayShowPage}) => {
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 

  return (
    <div className={`page-projects ${theme}`}>
      <PageNavbar
        button1="home"
        button2="profile"
        title="PROJECTS"
        delayShowPage={delayShowPage}
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
