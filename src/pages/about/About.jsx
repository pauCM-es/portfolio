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
import PageNavbar from "../../components/page-navbar/PageNavbar";

const About = ({setShowPage}) => {
  const {hero, aboutMe, education, experience, skills, languages} = cv
  const [showInfo, setShowInfo] = useState("About me")
  const infoSections = [
    {
      text: "About me",
      component: <AboutMe hero={hero} info={aboutMe} />
    },
    {
      text: "Education",
      component: <Education education={education} />
    },
    {
      text: "Experience",
      component: <Experience experience={experience} />
    },
    {
      text: "Skills",
      component: <Skills skills={skills} languages={languages} />
    },
  ]
  
  return (
    <div className="page-about">
      <PageNavbar
        button1="home"
        button2="projects"
        title="ABOUT"
        setShowPage={setShowPage}
      />

      <section className="page-about_content">
        <section className="page-about_hero">
          <Hero hero={hero} />
        </section>
        <section className="page-about_info">
          <div>
            {infoSections.map((section, index) => {
              return (
                <Button 
                  key={index + section.text} 
                  text={section.text} 
                  className="about-section_link" 
                  goTo={[section.text, setShowInfo]} 
                />
              )
            })}
          </div>
          <div>
            {infoSections.map(section => {
              return (
                section.text === showInfo ? section.component : null
              )
            })}
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
