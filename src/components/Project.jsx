import React from 'react'
import projectData from '../data/ProjectData'
import { FaLink, FaGithub } from "react-icons/fa6"
import '../assets/scss/project.scss'
import LazyLoad from 'react-lazyload'
import ScrollReveal from './ScrollReveal'
import ScrollRevealRightLeft from './ScrollRevealRightLeft'

const Project = () => {
  return (
    <section className="project" id='project'> 
        <div className="container">
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
                    <ScrollRevealRightLeft move={item.move} height={"500"} key={index}>
                    <li className='card' >
                        <div className="img-content">
                            <LazyLoad height={342.34} offset={100}>
                                <img src={item.image} alt={item.alt} />
                            </LazyLoad>
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
                                {item.link && 
                                <a className='link' target='_blanc' href={item.link}>
                                    <FaLink />
                                    <span className="text-hidden">Link to website {item.title}</span>
                                </a>}
                                {item.git && 
                                <a className='link' target='_blanc' href={item.git}>
                                    <FaGithub />
                                    <span className="text-hidden">Link to github {item.title}</span>
                                </a>}
                            </div>
                            {item.soon && <span className='badge'>{item.soon}</span>}
                        </div>
                    </li>
                    </ScrollRevealRightLeft>
                ))}
            </ul>
        </div>
        </div>
    </section>
  )
}

export default Project