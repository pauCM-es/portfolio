import React from 'react'
import './ProjectCard.scss'

const ProjectCard = ({project}) => {
  
  const {title, subtitle, image, description, github, link, icons} = project
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
    <div className='card'>
      <div className="card__img-container">
        <img src={image} alt="captura de pantalla del proyecto" />
      </div>
      <h2 className='card__title'>{title}</h2>
      <h3 className='card__subtitle'>{subtitle}</h3>
      <div className='card__icon-list'>
        {icons.map(icon => {
          return <span className='card__icon-list__icon'><img src={svgIcons[icon]} alt={`${icon} icono`} /></span>
        })}
      </div>
      <div className="card__links">
        {github && <span className='card__links__link'><a href={github}><img src={svgIcons.github} alt="link to repositorio github" /></a></span> }
        {link && <span className='card__links__link'><a href={link}><img src="./assets/icons/link.svg" alt="link to app" /></a></span> }
      </div>
      <div className='card__description'>
        <p>{description}</p>
      </div>
    </div>
  )
}


export default ProjectCard