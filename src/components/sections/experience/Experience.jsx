import React from 'react'
import { useSelector } from 'react-redux';
import './Experience.scss'

const Experience = ({experience}) => {
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 

  return (
    <div className={`experience ${theme}`}>
      <h2 className="experience-header">
        Experience
      </h2>

      <div className="experience-content">

        {experience.map(item => {
            return (
              <div className="experience-content__block">
                <h3>{item.name}</h3>
                <h4>{item.where}</h4>
                <p className='date'>{item.date}</p>
                <p>{item.description}</p>
              </div>
            )
        })}
        
      </div>
    </div>
  )
}

export default Experience