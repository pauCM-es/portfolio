import React from 'react'
import { useSelector } from 'react-redux';
import './Education.scss'

const Education = ({education}) => {
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 

  return (
    <div className={`education ${theme}`}>
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