import React from 'react'
import { useSelector } from 'react-redux';
import './Skill.scss'

const Skills = ({skills, languages}) => {
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 

  return (
    <div className={`skills ${theme}`}>
      <h2 className="skills-header">Skills</h2>


      <section className="skills-content">

        <div className="skills-languages">
          <h3>Languages</h3>
          {languages.map(item => {
            return (
              <div className="skills-languages__item">
                <h4>{item.language}</h4>
                <p>Level: {item.level.general}</p>
              </div>
            )
          })}
        </div>

        <div className="skills-list">
          <h3>Skills</h3>
          <div className="skills-list__block">
            {skills.map(item => {
              return (
                <div className="skills-list__item">
                  <h4>{item.type}</h4>
                  {item.list.map(skill => <p>{skill}</p> )}
                </div>
              )
            })}
          </div>
        </div>

      </section>

    </div>
  )
}

export default Skills