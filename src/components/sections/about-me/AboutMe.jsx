import React from 'react'
import { useSelector } from 'react-redux';
import './AboutMe.scss'

const AboutMe = ({hero, info}) => {
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 

  return (
    <div className={`aboutMe ${theme}`}>

      <div className="aboutMe-header">
        <h2>{hero.name} {hero.surnames[0]} {hero.surnames[1]}</h2>
        <h3>{hero.city}</h3>
      </div>

      <div className="aboutMe-content">
        {info.map(infoElement => <p key={JSON.stringify(infoElement.info)} className="aboutMe-content__p">{infoElement.info}</p> )}
      </div>

    </div>
  )
}

export default AboutMe