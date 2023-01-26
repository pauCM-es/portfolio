import React from 'react'

const Education = ({education}) => {


  
  return (
    <div className='education'>
      <h2 className="education-header">
        Education
      </h2>

      <div className="education-content">

        {education.map(item => {
            return (
              <div className="education-content__block">
                <h3>{item.name}</h3>
                <h4>{item.where}</h4>
                <p>{item.date}</p>
              </div>
            )
        })}
        
      </div>
    </div>
  )
}

export default Education