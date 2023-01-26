import React from "react";
import {useState} from "react";
import "./About.scss";
import Education from '../../components/sections/education/Education';
import Experience from '../../components/sections/experience/Experience';
import Skills from '../../components/sections/skills/Skills';
import AboutMe from "../../components/sections/about-me/AboutMe";
import Hero from "../../components/sections/hero/Hero";
import Button from "../../components/buttons/Button";
import { cv } from '../../cv'

const About = ({setShowPage}) => {

  const [showInfo, setShowInfo] = useState("skills")
  const infoSections = ["About me", "Education", "Experience", "Skills"]
  const {hero, aboutMe, education, experience, skills, languages} = cv
  
  return (
    <div className="page-about">
      <section className="page-about_header">
        <Button key="aboutBtn-home" text="HOME" className="page_btn" goTo={["home", setShowPage]} />
        <h1 className="page-title">About</h1>
        <Button key="aboutBtn-projects" text="PROJECTS" className="page_btn" goTo={["projects", setShowPage]} />
      </section>

      <section className="page-about_content">
        <section className="page-about_hero">
          <Hero hero={hero} />
        </section>
        <section className="page-about_info">
          <div>
            {infoSections.map((section, index) => {
              const goTo = section.toLowerCase()
              return <Button key={index + goTo} text={section} className="about-section_link" goTo={[goTo, setShowInfo]} />
            })}
          </div>
          <section>
            {showInfo === "about me" && <AboutMe hero={hero} info={aboutMe} />}
            {showInfo === "education" && <Education education={education} />}
            {showInfo === "experience" && <Experience experience={experience} />}
            {showInfo === "skills" && <Skills skills={skills} languages={languages} />}
          </section>
        </section>
      </section>
    </div>
  );
};

export default About;
