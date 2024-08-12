import React from 'react'
import skillsData from '../data/skillsData'
import '../assets/scss/skills.scss'
import LazyLoad from 'react-lazyload'
import ScrollReveal from './ScrollReveal'


const Skills = ({isDarkTheme}) => {
  return (
    <section className="skills" id='skills'>
        <div className="container">
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
                        <ScrollReveal delay={item.delay}>
                        <div className="icon">
                            <LazyLoad height={64} offset={100}>
                                <img src={item.iconDark && isDarkTheme ? item.iconDark : item.icon} alt={item.altText} />
                            </LazyLoad>

                        </div>
                        </ScrollReveal>
                        <ScrollReveal delay={item.delay}>
                        <span className="label">
                            {item.label}
                        </span>
                        </ScrollReveal>
                        
                    </li>
                ))}
            </ul>
        </div>
        </div>
    </section>
  )
}

export default Skills