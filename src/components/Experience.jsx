import React from 'react'
import experienceData from '../data/experienceData'
import '../assets/scss/experience.scss'
import LazyLoad from 'react-lazyload'
import ScrollRevealRightLeft from './ScrollRevealRightLeft'

const Experience = () => {
    return (
        <section className="experience" id='experience'>
            <div className="container">
                <div className="title">
                    <h2 className="badge">
                        Mes Expériences
                    </h2>
                    <span className="subtitle">
                        Voici un bref résumé de mes expériences les plus récentes :
                    </span>
                </div>
                <div className="content">
                    <ul className='card-list'>
                        {experienceData.map((item, index) => (
                            <ScrollRevealRightLeft delay={0.25} move={item.move} height={"455px"} key={index}>
                                    <div className="logo">
                                        <LazyLoad height={44} offset={100}>
                                            <img src={item.logo} alt={item.logoAlt} />
                                        </LazyLoad>

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
                            </ScrollRevealRightLeft>


                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience