import React from 'react'
import { useSelector } from 'react-redux';
import './Hero.scss'

const Hero = ({hero}) => {
  const {name, description, image} = hero
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 
  // const lightPrimaryColor = '#85aeb1'

  
  return (
    <div className={`hero ${theme}`}>

      <div className="hero-profile">
        <img src={image[0]} alt="foto de perfil" className="hero-profile__img"/>
      </div>

      <div className="hero-header">
        <h1>Hello,</h1>
        <h2>I'm {name}</h2>
        <h3>{description}</h3>
      </div>

      <div className="hero-contact">
        <h4>Contact me:</h4>
        <div className="hero-contact__iconList">
          <div className="hero-contact__icon">
            <img src="./assets/icons/mail4.svg" alt="email icono" />
          </div>
          <div className="hero-contact__icon">
            <img src="./assets/icons/linkedin.svg" alt="linkedIn icono" />
          </div>
          <div className="hero-contact__icon">
            <img src="./assets/icons/github.svg" alt="github icono" />
          </div>
        </div>
      </div>
      {/* <div className="hero__color">
        <label htmlFor="light-primary">Pick color</label>
        <input type="color" name="light-primary" id="light-primary"  value={lightPrimaryColor}/>
      </div> */}
    </div>
  )
}

export default Hero