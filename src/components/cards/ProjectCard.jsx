import React from 'react'
import './ProjectCard.scss'

const ProjectCard = ({project}) => {
  
  const {title, subtitle, image, description, github, link} = project
  const githubIcon = "./assets/icons/github.svg"

  return (
    <div className='projectCard'>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <div className="image-container">
        <img src={image} alt="captura de pantalla del proyecto" />
      </div>
      {github && <div><a href={github}><img src={githubIcon} alt="link to repositorio github" /></a></div> }
      {link && <p>Link to app: {link}</p> }
    </div>
  )
}


export default ProjectCard