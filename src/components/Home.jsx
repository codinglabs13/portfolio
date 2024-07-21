import React from 'react'
import { FaLocationCrosshairs, FaSquareGithub } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Picture from '../assets/img/dorian.jpg'
import '../assets/scss/home.scss'



const Home = () => {
  return (
    <div className="home">
        <div className="text">
            <div className="bio">
                <h1>Bonjour, je suis Dorian 👋</h1>
                <p>Je suis un développeur full stack (PHP, Symfony, React.js & MySQL) spécialisé dans la conception et la création d'application,
                accessibles, visuellement attrayants et réactifs. Je viens d'obtenir mon titre professionnel de Concepteur Développeur d'Applications.
                Même après plus de 3 ans à créer des applications web, j'aborde chaque projet avec la même passion qu'au premier jour.</p>
            </div>
            <div className="location-availability">
                <div className="location">
                    <FaLocationCrosshairs />
                    <span>Perpignan, France</span>
                </div>
                <div className="availability">
                    <GoDotFill />
                    <span>Disponible pour de nouveaux projets</span>
                </div>
                
            </div>
            <div className="link-contact">
                <a href="https://github.com/codinglabs13" className='icon-contact'>
                    <FaSquareGithub />
                </a>
            </div>
        </div>
        <div className="picture">
            <img src={Picture} alt="Photo Dorian Marechal" />
            <div className="shadow"></div>
        </div>
    </div>
  )
}

export default Home