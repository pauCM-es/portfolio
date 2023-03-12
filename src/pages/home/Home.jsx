import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Button from '../../components/buttons/Button';
import ThemeButton from '../../components/buttons/ThemeButton';
// import Spinner from '../../components/spinner/Spinner';
import "./Home.scss"
import { motion } from "framer-motion"


const Home = ({delayShowPage}) => {

  const [exitAnimation, setExitAnimation] = useState(false)
  const isDarkTheme = useSelector(state => state.theme.isDarkTheme) 
  const theme = isDarkTheme ? "dark" : "light" 
  
  useEffect(() => {
    console.log("loading componente:",exitAnimation);
  }, [exitAnimation])
  

  return (
    <div className= {`page-home ${ theme }`}>
      <div className="bg bg-left"></div>
      <div className="bg bg-right"></div>

      <div className='home-content'>

        <section className="home-title">
          <motion.div 
            className="home-title_name"
            initial={{x:-1000}}
            animate={{x:0}}
          >PAULA</motion.div>

          <motion.div 
          className="home-title_surname"
          initial={{x:1300}}
          animate={{x:0}}
          >COSTA</motion.div>

        </section>

        <section className="home-captcha">
          <motion.div 
          className="home-captcha_description"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            duration: 0.5,
            delay: 0.5
          }}
          >FULL STACK DEVELOPER</motion.div>
        </section>


        {/* <div className={`in-construction ${theme}`}>
          <Spinner theme={theme}/>
          <p>I'm making some improvements.</p>
          <p>It'll be ready monday 13th, but you can find me at 
            <span className='in-construction__link'>
              <a href="https://www.linkedin.com/in/paula-costa-mingarro/">
                <img src=".\assets\icons\linkedin.svg" alt="linkein icon" />
              </a>
            </span>
          </p>
        </div> */}

        <div className="home-btn">
          <Button 
            key="btn-knowMore"  
            text="KNOW MORE" 
            className={`page_btn accent medium ${theme}`} 
            goTo={["profile", delayShowPage, 700]}
            exitAnimation={setExitAnimation}
            />
        </div>
      </div>

      <ThemeButton />

    </div>
  )
}

export default Home