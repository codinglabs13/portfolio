import React from 'react'
import experienceData from '../data/experienceData'
import '../assets/scss/experience.scss'

const Experience = () => {
  return (
    <div className="experience">
        <div className="title">
            <h2 className="badge">
                Mes Expérience
            </h2>
            <span className="subtitle">
                Voici un bref résumé de mes expériences les plus récentes :
            </span>
        </div>
        <div className="content">
            <ul className='card-list'>
                {experienceData.map((item, index) => (
                    <li className='card' key={index}>
                        <div className="logo">
                            <img src={item.logo} alt={item.logoAlt} />
                        </div>
                        <div className="title-list">
                            <h3>{item.title}</h3>
                            <ul>
                                {item.list.map((child, childIndex) => (
                                    <li key={childIndex}>{child}</li>
                                ))}
                            </ul>
                        </div>
                        <span className="date">
                            {item.date}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Experience