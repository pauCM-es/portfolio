import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../buttons/Button';
import ThemeButton from '../buttons/ThemeButton';
import './PageNavbar.scss'

const PageNavbar = ({title, button1, button2, setShowPage}) => {
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 

  return (
    <div className={`navbar ${theme}`}>
        <Button
          key={`${title}Btn-${button1}`}
          text={button1.toUpperCase()}
          className={`page_btn ${theme} primary medium `}
          goTo={[button1, setShowPage]} 
        />
        <h1 className='page-title'>{title}</h1>
        <Button 
          key={`${title}Btn-${button2}`} 
          text={button2.toUpperCase()}
          className={`page_btn ${theme} primary medium `}
          goTo={[button2, setShowPage]} 
        />
        <ThemeButton />
    </div>
  )
}

export default PageNavbar