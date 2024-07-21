import React from 'react'
import Picture from '../assets/img/about.svg'
import '../assets/scss/about.scss'

const About = () => {
  return (
    <div className="about" id='about'>
        <div className="title">
            <span className="badge">
                À propos de moi
            </span>
        </div>
        <div className="content">
            <div className="picture">
                <img src={Picture} alt="Conception Web, Conception d'application" />
                <div className="shadow"></div>
            </div>
            <div className="text">
                <h2>Curieux de me connaître ? Voici ce qu'il faut savoir :</h2>
                <p>
                    Je suis un développeur passionné qui se spécialise dans la conception et le développement full stack (PHP, Symfony, React.js & MySQL).
                    Je suis très enthousiaste à l'idée de donner vie aux aspects techniques et visuels des produits numériques.
                    L'expérience utilisateur, le design parfait au pixel près, 
                    et l'écriture d'un code clair, lisible et hautement performant comptent pour moi.
                </p>
                <p>
                    J'ai commencé mon parcours en tant que développeur web en 2022, et depuis,
                    j'ai continué à grandir et à évoluer en tant que développeur, 
                    en relevant de nouveaux défis et en apprenant les dernières technologies, 
                    en suivant deux formation un projet professionnelle développeur web ainsi qu'un titre professionnelle de niveau 6 concepteur développeur d'application. 
                    Aujourd'hui, 3 ans après avoir commencé mon parcours de développeur web, 
                    je construis des applications web de pointe en utilisant des technologies modernes telles que react.js, 
                    javascript, wordpress, woocomerce, mysql, php et bien plus encore.
                </p>
                <p>
                    Enfin, quelques brèves informations sur moi.
                </p>
                <ul>
                    <li>Concepteur</li>
                    <li>Dévellopeur</li>
                    <li>Freelance</li>
                    <li>Etudiant</li>
                </ul>
                <p>
                    Une dernière chose, 
                    je suis disponible pour travailler en freelance,
                    je recherche également une entreprise pour pouvoir continuer mon parcours dans le monde du digital,
                    je souhaite suivre une formation de chef de projet digital spécialisation big data, alors n'hésitez pas à me contacter !
                </p>
            </div>
        </div>
    </div>
  )
}

export default About