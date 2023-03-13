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
import { motion } from "framer-motion"

import { cv } from '../../cv'
import "./Profile.scss";

const Profile = ({delayShowPage}) => {
  const {hero, aboutMe, education, experience, skills, languages} = cv
  const [sectionShowing, setSectionShowing] = useState("About me")
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
        icon="home"
        button1="home"
        button2="projects"
        title="PROFILE"
        delayShowPage={delayShowPage}
      />

      <section className="page-about_content">
        <section className="page-about_hero">
          <Hero hero={hero} />
        </section>

        <motion.button
          className="page-about_btn"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type:'spring', damping: 4 }}
          whileTap={{ scale: 0.5 }}
          onClick={()=> delayShowPage('projects', 500)}
          
        >See my projects -&gt;
        </motion.button>

        <section className="page-about_info">
          <div className="about-info_buttons">
            {infoSections.map((section, index) => {
              return (
                <button 
                  key={index + section.text} 
                  className={`about-info_btn ${section.text === sectionShowing ? "selected" : '' }`} 
                  onClick={()=> setSectionShowing(section.text)}
                >{section.text}</button>
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
