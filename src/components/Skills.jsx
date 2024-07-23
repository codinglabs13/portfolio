import React from 'react'
import skillsData from '../data/skillsData'
import '../assets/scss/skills.scss'


const Skills = () => {
  return (
    <div className="skills" id='skills'>
        <div className="title">
            <h2 className="badge">
                Mes Compétences
            </h2>
            <span className="subtitle">
                Les compétences, 
                les outils et les technologies que je maîtrise le mieux :
            </span>
        </div>
        <div className="content">
            <ul>
                {skillsData.map((item, index) => (
                    <li key={index}>
                        <div className="icon">
                            <img src={item.icon} alt={item.altText} />
                        </div>
                        <span className="label">
                            {item.label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Skills