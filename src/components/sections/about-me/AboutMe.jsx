import React from 'react'
import './AboutMe.scss'

const AboutMe = ({hero, info}) => {


  return (
    <div className="aboutMe">

      <div className="aboutMe-header">
        <h2>{hero.name} {hero.surnames[0]} {hero.surnames[1]}</h2>
        <h3>{hero.city}</h3>
      </div>

      <div className="aboutMe-content">
        {info.map(infoElement => <div className="aboutMe-content__p">{infoElement.info}</div> )}
      </div>

    </div>
  )
}

export default AboutMe