import React from 'react';
import Button from '../buttons/Button';
import './PageNavbar.scss'

const PageNavbar = ({title, button1, button2, setShowPage}) => {
  return (
    <div className='navbar'>
        <Button
          key={`${title}Btn-${button1}`}
          text={button1.toUpperCase()}
          className="page_btn" 
          goTo={[button1, setShowPage]} 
        />
        <h1 className="page-title">{title}</h1>
        <Button 
          key={`${title}Btn-${button2}`} 
          text={button2.toUpperCase()}
          className="page_btn" 
          goTo={[button2, setShowPage]} 
        />
    </div>
  )
}

export default PageNavbar