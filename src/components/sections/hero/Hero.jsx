import React from 'react'
import { motion } from "framer-motion"
import { useSelector } from 'react-redux';
import './Hero.scss'

const Hero = ({hero}) => {
  const {name, description, image, gitHub, linkedIn, email} = hero
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 
  // const lightPrimaryColor = '#85aeb1'

  
  return (
    <div className={`hero ${theme}`}>

      <motion.a 
        href={linkedIn}
        className="hero-profile"
        animate={{ boxShadow: '0 0 15px 0px rgba(0, 0, 0, 0.005)' }}
        transition={{
          type: 'spring',
          duration: 1.3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.img 
        src={image[0]} 
        alt="foto de perfil" 
        className="hero-profile__img"
        />
      </motion.a>

      <div className="hero-header">
        <h1>Hello,</h1>
        <h2>I'm {name}</h2>
        <h3>{description}</h3>
      </div>

      <div className="hero-contact">
        <h4>Contact me:</h4>
        <div className="hero-contact__iconList">
          <a className="hero-contact__icon" href={`mailto:"${email}"`}>
            <motion.img 
            src="./assets/icons/mail4.svg" 
            alt="email icono" 
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring'}}
            />
          </a>
          <a className="hero-contact__icon" href={linkedIn}>
            <motion.img 
            src="./assets/icons/linkedin.svg" 
            alt="linkedIn icono" 
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring'}}
            />
          </a>
          <a className="hero-contact__icon" href={gitHub}>
            <motion.img 
            src="./assets/icons/github.svg" 
            alt="github icono" 
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring'}}
            />
          </a>
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