import React from 'react'

const Experience = ({experience}) => {

  
  
  return (
    <div className='experience'>
      <h2 className="experience-header">
        Experience
      </h2>

      <div className="experience-content">

        {experience.map(item => {
            return (
              <div className="experience-content__block">
                <h3>{item.name}</h3>
                <h4>{item.where}</h4>
                <p>{item.date}</p>
                <p>{item.description}</p>
              </div>
            )
        })}
        
      </div>
    </div>
  )
}

export default Experience