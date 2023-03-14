import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './ProjectCard.scss'

const ProjectCard = ({project}) => {
  const isDarkTheme  = useSelector(state => state.theme.isDarkTheme)
  const theme = isDarkTheme ? "dark" : "light" 
  
  const {title, subtitle, date, image, video,intro, inConstruction, description, github, link, icons} = project
  const [isVisible, setIsVisible] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  const svgIcons = {
    github: "./assets/icons/github.svg",
    js: "./assets/icons/javascript-original.svg",
    angular: "./assets/icons/angularjs-plain.svg",
    react: "./assets/icons/react-original.svg",
    html: "./assets/icons/html5-plain.svg",
    css: "./assets/icons/css3-plain.svg",
    sass: "./assets/icons/sass-original.svg",
    node: "./assets/icons/nodejs-plain.svg",
    mongo: "./assets/icons/mongodb-original-wordmark.svg",
    redux: "./assets/icons/redux-original.svg",
    tailwind: "./assets/icons/tailwindcss-plain.svg",
  }


  return (
    <div className={`card ${theme}`}>
      {
      isVisible && <div className="card__img-container">
        {
          video.includes('http') && isPlaying
          ? <video src={video} width='300px' autoplay controls loop poster={image}>Sorry, your browser doesn't support embedded videos</video> 
          : <img src={image} alt="captura de pantalla del proyecto" />
        }
        
        { inConstruction && <span><img className='card__img-container--in-construction' src="https://res.cloudinary.com/didwvaeha/image/upload/v1678737571/portfolio/under-construction_hnqbdt.png" alt="in construction tag" /></span>}
      </div>
      }
      
      <h2 className='card__title'>{title}
      </h2>
      <section className='card__content'>
        <p className='card__date'>{date}</p>
        {
          isVisible && <h3 className='card__subtitle'>{subtitle}</h3>
        }
        <div className='card__list'>
          <div className="card__list-icons">
          {icons.map(icon => {
            return <span className='icon'><img src={svgIcons[icon]} alt={`${icon} icono`} /></span>
          })}
          </div>
          <div className="card__list-links">
            {
            video.includes('http') && 
              <span className='link' onClick={() => setIsPlaying(!isPlaying)}>
                <img src="./assets/icons/play2.svg" alt="icon to play video" />
              </span>
            }
            {github && <span className='link'><a href={github} target="_blank"><img src={svgIcons.github} alt="link to repositorio github" /></a></span> }
            {link && <span className='link'><a href={link} target="_blank"><img src="./assets/icons/link.svg" alt="link to app" /></a></span> }
          </div>
        </div>
        {
          !isVisible && <div className='card__description'>
          {
          intro.map(paraf => { return <p className='card__description__intro'>{paraf}</p> })
          }
          {
          description.map(paraf => { return <p>{paraf}</p> })
          }
        </div>
        }
        
        <button onClick={() => {setIsVisible(!isVisible)}} className='card__btn--more'>{ isVisible ? 'READ MORE' : 'SHOW LESS'}</button>
        
      </section>
    </div>
  )
}


export default ProjectCard