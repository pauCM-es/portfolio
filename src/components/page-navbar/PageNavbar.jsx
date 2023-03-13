import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../buttons/Button';
import { motion } from "framer-motion"
import ThemeButton from '../buttons/ThemeButton';
import './PageNavbar.scss'

const PageNavbar = ({title, button1, button2, delayShowPage, icon}) => {
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 

  return (
    <div className={`navbar ${theme}`}>
        <motion.div
        className='page-icon'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type:'spring', damping: 4}}
        whileTap={{ scale: 0.5 }}
        onClick={ ()=> delayShowPage(icon, 500) }
        >
          <svg fill='currentColor' version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
            <title>arrow-left</title>
            <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
          </svg>
        </motion.div>
        <Button
          key={`${title}-Btn-${button1}`}
          text={button1.toUpperCase()}
          className={`page_btn ${theme} primary medium `}
          goTo={[button1, delayShowPage, 500]} 
        />
        <h1 className='page-title'>{title}</h1>
        <Button 
          key={`${title}-Btn-${button2}`} 
          text={button2.toUpperCase()}
          className={`page_btn ${theme} primary medium `}
          goTo={[button2, delayShowPage, 500]} 
        />
        <ThemeButton />
    </div>
  )
}

export default PageNavbar