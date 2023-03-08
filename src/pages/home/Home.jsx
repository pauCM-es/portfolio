import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Button from '../../components/buttons/Button';
import ThemeButton from '../../components/buttons/ThemeButton';
import Spinner from '../../components/spinner/Spinner';
import "./Home.scss"


const Home = ({setShowPage}) => {

  //.theme viene del store.js y .isDarkTheme de la propiedad del INITIAL_STATE the theme.reducer.js 
  const isDarkTheme = useSelector(state => state.theme.isDarkTheme) 

  // esto es para pasar la className dark/light
  const theme = isDarkTheme ? "dark" : "light" 
  
  //cada vez que se actualiza el estado isDarkTheme ejecuta el console.log. Sin mas...
  useEffect(()=> { 
    console.log("updating: ",isDarkTheme);
  },[isDarkTheme])

  return (
    <div className= {`page-home ${ theme }`}>
      <div className="bg bg-left"></div>
      <div className="bg bg-right"></div>

      <div className='home-content'>

        <section className="home-title">
          <div className="home-title_name">PAULA</div>
          <div className="home-title_surname">COSTA</div>
        </section>

        <section className="home-captcha">
          <div className="home-captcha_description">FULL STACK DEVELOPER</div>
        </section>

      </div>

      <div className={`in-construction ${theme}`}>
        <Spinner theme={theme}/>
        <p>I'm making some improvements.</p>
        <p>It'll be ready monday 13th, but you can find me at 
          <span className='in-construction__link'>
            <a href="https://www.linkedin.com/in/paula-costa-mingarro/">
              <img src=".\assets\icons\linkedin.svg" alt="linkein icon" />
            </a>
          </span>
        </p>
      </div>

      
      {/* <Button 
        key="btn-knowMore"  
        text="KNOW MORE" 
        className={`page_btn accent medium ${theme}`} 
        goTo={["profile", setShowPage]}
      /> */}
      <ThemeButton />

    </div>
  )
}

export default Home