import React from 'react'

const Skills = ({skills, languages}) => {


  return (
    <div className='skills'>
      <h2 className="skills-header">Skills</h2>


      <section className="skills-content">

        <div className="skills-languages">
          {languages.map(item => {
            return (
              <div className="skills-languages__item">
                <h4>{item.language}</h4>
                <p>Level: {item.level.general}</p>
              </div>
            )
          })}
        </div>

        <div className="skills-skills">
          {skills.map(item => {
            return (
              <div className="skills-skills__item">
                <h4>{item.type}</h4>
                {item.list.map(skill => <p>{skill}</p> )}
              </div>
            )
          })}
        </div>

      </section>

    </div>
  )
}

export default Skills