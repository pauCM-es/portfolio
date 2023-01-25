import React from "react";
import {useState} from "react";
import "./About.scss";
import Education from '../../components/education/Education';
import Experience from '../../components/experience/Experience';
import Skills from '../../components/skills/Skills';
import AboutMe from "../../components/about-me/AboutMe";
import Hero from "../../components/hero/Hero";
import Button from "../../components/button/Button";
import cv from "../../cv";

const About = ({setShowPage}) => {

  const [showInfo, setShowInfo] = useState("education")
  const infoSections = ["About me", "Education", "Experience", "Skills"]

  
  return (
    <div className="page-about">

      <section className="page-about_header">
        <Button key="aboutBtn-home" text="HOME" className="page_btn" goTo={["home", setShowPage]} />
        <h1 className="page-title">About</h1>
        <Button key="aboutBtn-projects" text="PROJECTS" className="page_btn" goTo={["projects", setShowPage]} />
      </section>


      <section className="page-about_content">

        <section className="page-about_hero">
          <Hero/>
        </section>

        <section className="page-about_info">
          <div>
            {infoSections.map((section, index) => {
              const goTo = section.toLowerCase()
              return <Button key={index + goTo} text={section} className="about-section_link" goTo={[goTo, setShowInfo]} />
            })}
          </div>
          <section>
            {showInfo === "about me" && <AboutMe/>}
            {showInfo === "education" && <Education/>}
            {showInfo === "experience" && <Experience/>}
            {showInfo === "skills" && <Skills/>}
          </section>
        </section>

      </section>
    </div>
  );
};

export default About;
