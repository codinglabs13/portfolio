import React from 'react'
import Picture from '../assets/img/about.svg'
import '../assets/scss/about.scss'
import LazyLoad from 'react-lazyload'
import ScrollReveal from './ScrollReveal'

const About = () => {
  return (
    <section className="about" id='about'>
       <div className="container">
        <div className="title">
            <ScrollReveal>
                <span className="badge">
                    À propos de moi
                </span>
            </ScrollReveal>
           
        </div>
        <div className="content">
            <div className="picture">
                <LazyLoad height={711.42} offset={100}></LazyLoad>
                <img src={Picture} alt="Conception Web, Conception d'application" />
            </div>
            <div className="text">
                <ScrollReveal>
                    <h2>Curieux de me connaître ? Voici ce qu'il faut savoir :</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.50}>
                <p>
                    Je suis un développeur passionné qui se spécialise dans la conception et le développement full stack (PHP, Symfony, React.js & MySQL).
                    Je suis très enthousiaste à l'idée de donner vie aux aspects techniques et visuels des produits numériques.
                    L'expérience utilisateur, le design parfait au pixel près, 
                    et l'écriture d'un code clair, lisible et hautement performant comptent pour moi.
                </p>
                </ScrollReveal>
                <ScrollReveal delay={0.75}>
                <p>
                    J'ai commencé mon parcours en tant que développeur web en 2022, et depuis,
                    j'ai continué à grandir et à évoluer en tant que développeur, 
                    en relevant de nouveaux défis et en apprenant les dernières technologies, 
                    en suivant deux formation un projet professionnelle développeur web ainsi qu'un titre professionnelle de niveau 6 concepteur développeur d'application. 
                    Aujourd'hui, 3 ans après avoir commencé mon parcours de développeur web, 
                    je construis des applications web de pointe en utilisant des technologies modernes telles que react.js, 
                    javascript, wordpress, woocomerce, mysql, php et bien plus encore.
                </p>
                </ScrollReveal>
                <ScrollReveal delay={1}>
                <p>
                    Enfin, quelques brèves informations sur moi.
                </p>
                </ScrollReveal>
               
               
                
                <ul>
                    <li><ScrollReveal delay={1.25}>Concepteur</ScrollReveal></li>
                    <li><ScrollReveal delay={1.50}>Dévellopeur</ScrollReveal></li>
                    <li><ScrollReveal delay={1.75}>Freelance</ScrollReveal></li>
                    <li><ScrollReveal delay={2}>Etudiant</ScrollReveal></li>
                </ul>
                <ScrollReveal delay={2.25}>
                <p>
                    Une dernière chose, 
                    je suis disponible pour travailler en freelance,
                    je recherche également une entreprise pour pouvoir continuer mon parcours dans le monde du digital,
                    je souhaite suivre une formation de chef de projet digital spécialisation big data, alors n'hésitez pas à me contacter !
                </p>
                </ScrollReveal>
                
            </div>
        </div>
        </div>
    </section>
  )
}

export default About