import React from 'react'
import { useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/theme/theme.action';
import '../../components/buttons/ThemeButton.scss'



const ThemeButton = () => {

  const {isDarkTheme}  = useSelector(state => state.theme)
  const theme = isDarkTheme ? "dark" : "light" 


  return (
    <button 
      className= {`themeBtn ${theme}`}
      onClick={()=> {toggleTheme(!isDarkTheme)}}
    >{isDarkTheme ? "🌞" : "🌙"}</button>
  )
}

export default ThemeButton