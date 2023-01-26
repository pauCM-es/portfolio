import React from 'react'
import "./Button.scss"

const Button = (props) => {
  const {text, className} = props
  const goToSection = props?.goTo[0]
  const goToCallback = props?.goTo[1]

  //goTo -> state que se quiere cambiar, cb -> el setter que correspode a ese state
  const handleClick = (goTo, cb) => () => {
    cb(goTo);
  };

  return (
    <button className={className} onClick={handleClick(goToSection, goToCallback)}>{text}</button>
  )
}

export default Button