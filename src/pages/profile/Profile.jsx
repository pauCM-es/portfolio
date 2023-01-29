import React from "react";
import {useState } from "react";
import { useSelector } from "react-redux";
import Education from '../../components/sections/education/Education';
import Experience from '../../components/sections/experience/Experience';
import Skills from '../../components/sections/skills/Skills';
import AboutMe from "../../components/sections/about-me/AboutMe";
import Hero from "../../components/sections/hero/Hero";
import Button from "../../components/buttons/Button";
import PageNavbar from "../../components/page-navbar/PageNavbar";
import { cv } from '../../cv'
import "./Profile.scss";

const Profile = ({setShowPage}) => {
  const {hero, aboutMe, education, experience, skills, languages} = cv
  const [sectionShowing, setSectionShowing] = useState("Skills")
  const infoSections = [
    {
      text: "About me",
      component: <AboutMe hero={hero} info={aboutMe} />,
    },
    {
      text: "Education",
      component: <Education education={education} />,
    },
    {
      text: "Experience",
      component: <Experience experience={experience} />,
    },
    {
      text: "Skills",
      component: <Skills skills={skills} languages={languages} />,
    },
  ]

  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 
  

  return (
    <div className={`page-about ${theme}`}>
      <PageNavbar
        button1="home"
        button2="projects"
        title="PROFILE"
        setShowPage={setShowPage}
      />

      <section className="page-about_content">
        <section className="page-about_hero">
          <Hero hero={hero} />
        </section>
        <section className="page-about_info">
          <div className="about-info_buttons">
            {infoSections.map((section, index) => {
              return (
                <Button 
                  key={index + section.text} 
                  text={section.text} 
                  className={`about-info_btn ${section.text === sectionShowing ? "selected" : '' }`} 
                  goTo={[section.text, setSectionShowing]} 
                />
              )
            })}
          </div>
          <div className="about-info_section`">
            {infoSections.map(section => {
              return (
                section.text === sectionShowing ? section.component : null
              )
            })}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Profile;
