import React from 'react'
import projectData from '../data/ProjectData'
import { FaLink, FaGithub } from "react-icons/fa6"
import '../assets/scss/project.scss'

const Project = () => {
  return (
    <div className="project" id='project'> 
        <div className="title">
            <h2 className="badge">
                Mes Projets
            </h2>
            <span className="subtitle">
                Quelques-uns des projets que j'ai réaliser :
            </span>
        </div>
        <div className="content">
            <ul className='card-list'>
                {projectData.map((item, index) => (
                    <li className='card' key={index}>
                        <div className="img-content">
                            <img src={item.image} alt={item.alt} />
                        </div>
                        <div className="text-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="group-stack">
                                {item.stack.map((child, index) => (
                                    <span className='badge' key={index}>{child}</span>
                                ))}
                            </div>
                            <div className="links">
                                {item.link && <a className='link' target='_blanc' href={item.link}><FaLink /></a>}
                                {item.git && <a className='link' target='_blanc' href={item.git}><FaGithub /></a>}
                            </div>
                            {item.soon && <span className='badge'>{item.soon}</span>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Project