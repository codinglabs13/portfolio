import React from 'react'
import { FaLocationCrosshairs, FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Picture from '../assets/img/dorian.svg'
import '../assets/scss/home.scss'
import LazyLoad from 'react-lazyload';
import ScrollReveal from './ScrollReveal';
import ScrollRevealRightLeft from './ScrollRevealRightLeft';


const Home = () => {

    return (
        <section className='section-home' id='home'>
            <div className="container home">
                <div className="text">
                    <div className="bio">
                        <ScrollReveal>
                            <h1>Bonjour, je m'appel Dorian 👋</h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.50}>
                            <p>Je suis un développeur full stack (PHP, Symfony, React.js & MySQL) spécialisé dans la conception et la création d'applications,
                                Accessibles, visuellement attrayants et réactifs. Je viens d'obtenir mon titre professionnel de Concepteur Développeur d'Applications.
                                Même après plus de 3 ans à créer des applications web, j'aborde chaque projet avec la même passion qu'au premier jour.</p>
                        </ScrollReveal>
                    </div>
                    <div className="location-availability">
                        <div className="location">
                            <ScrollReveal delay={0.75}>
                                <FaLocationCrosshairs />
                                <span>Perpignan, France</span>
                            </ScrollReveal>

                        </div>
                        <div className="availability">
                            <ScrollReveal delay={0.95}>
                                <GoDotFill />
                                <span>Disponible pour de nouveaux projets</span>
                            </ScrollReveal>

                        </div>

                    </div>
                    <div className="link-contact">
                        <a href="https://github.com/codinglabs13" target='_blanc' className='icon-contact'>
                            <ScrollReveal delay={1.15}>
                                <FaSquareGithub />
                                <span className="text-hidden">Github link</span>
                            </ScrollReveal>

                        </a>
                        <a href="https://www.linkedin.com/in/dorian-marechal-325848269/" target='_blanc' className='icon-contact'>
                            <ScrollReveal delay={1.35}>
                                <FaLinkedin />
                                <span className="text-hidden">Linkedin link</span>
                            </ScrollReveal>
                        </a>
                    </div>

                </div>

                <div className="picture">
                    <LazyLoad height={390.3} offset={100}>
                        <img src={Picture} alt="Dorian Marechal développeur web" />
                        <div className="shadow"></div>
                    </LazyLoad>
                </div>
            </div>
        </section>
    )
}

export default Home