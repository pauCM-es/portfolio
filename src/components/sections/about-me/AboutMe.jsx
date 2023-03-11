import React from 'react'
import { useSelector } from 'react-redux';
import './AboutMe.scss'
import {carouselImg} from '../../../other-info'
import CarouselPrints from '../../carousel/CarouselPrints';
import useVisible from '../../../hooks/useVisible'

const AboutMe = ({hero, info}) => {
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const [carouselIsVisible, setCarouselVisibility] = useVisible(true)
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

      <button onClick={() => {setCarouselVisibility()}}>click me</button>
      {
        carouselIsVisible && <CarouselPrints images={carouselImg}></CarouselPrints>
        }
    </div>
  )
}

export default AboutMe