import React from 'react'
import { motion } from "framer-motion"

import "./Button.scss"

const Button = (props) => {
  const {text, className} = props
  const goToSection = props?.goTo[0]
  const goToFunction = props?.goTo[1]
  const delayTime = props?.goTo[2]

  //goTo -> state que se quiere cambiar, cb -> el setter que correspode a ese state
  const handleClick = (goTo, setState, time) => () => {
    setState(goTo, time);
  };

  return (
    <motion.button 
      className={className} 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.4 }}
      whileHover={{ scale: 1.2 }}
      transition={{  type:'spring', damping: 2 }}
      onClick={handleClick(goToSection, goToFunction, delayTime)}
    >{text}</motion.button>
  )
}

export default Button