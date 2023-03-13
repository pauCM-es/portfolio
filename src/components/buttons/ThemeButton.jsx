import React from 'react'
import { useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/theme/theme.action';
import { motion } from "framer-motion"
import '../../components/buttons/ThemeButton.scss'



const ThemeButton = () => {

  const {isDarkTheme}  = useSelector(state => state.theme)
  const theme = isDarkTheme ? "dark" : "light" 


  return (
    <motion.button 
      className= {`themeBtn ${theme}`}
      whileTap={{ scale: 0.7 }}
      onClick={()=> {toggleTheme(!isDarkTheme)}}
    >{isDarkTheme ? "🌞" : "🌙"}</motion.button>
  )
}

export default ThemeButton