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
      onClick={()=> {toggleTheme(!isDarkTheme)}} //uso la funcion declarada en archivo theme.action.js
      // para cambiar el estado al valor contrario de lo que tenga theme.isDarkside con el simbolo !.
      //la funcion toggleTheme modifica el valor de la propiedad isDarkTheme.
    >{isDarkTheme ? "🌞" : "🌙"}</button>
  )
}

export default ThemeButton