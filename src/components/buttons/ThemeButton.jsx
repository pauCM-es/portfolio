import React from 'react'
import { useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/theme/theme.action';
import '../../components/buttons/ThemeButton.scss'



const ThemeButton = () => {
  //store - theme, lo guardo en la constante theme.
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 

  //Esto seria lo mismo=> const {theme}  = useSelector(state => state)
  // theme = { isDarkTheme: false }    -> es un objeto

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