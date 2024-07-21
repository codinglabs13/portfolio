import React from 'react'

const Project = () => {
  return (
    <div className="project"> 
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

export default Project