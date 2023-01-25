import React from "react";
import Button from "../../components/button/Button";
import "./Projects.scss";

const Projects = ({setShowPage}) => {

  return (
    <div className="page-projects">
      <Button keyProp="projectsBtn-home" text="HOME" className="page_btn" goTo={["home", setShowPage]} />
      <h1 className="page-title">Projects</h1>
      <Button keyProp="projectsBtn-about" text="ABOUT" className="page_btn" goTo={["about", setShowPage]} />
    </div>
  );
};

export default Projects;
