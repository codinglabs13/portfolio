import NotAnnuaire from '../assets/img/notannuaire.svg'
import Portfolio from '../assets/img/portfolio.svg'
import Forum from '../assets/img/Toute les questions 1.svg'
import Login from '../assets/img/login.svg'

const projectData = [
    {
        image: NotAnnuaire,
        title: "Not annuaire",
        description: "NotAnnuaire.app est un site qui facilite la recherche de notaires dans chaque région. Pendant mon stage, j'ai collaboré avec un autre stagiaire pour réaliser une partie administrative destinée aux instances de notaires, afin de leur simplifier la gestion de tous les notaires de leur région.",
        stack: [
            "PHP",
            "Symfony",
            "Javascript",
            "Bootstrap",
            "CSS",
            "MySql"
        ],
        link: "https://notannuaire.app/annuaire-notaires-france/",
        alt: "Not-annuaire.app back-office pour les instances de notaire"
    },
    {
        image: Forum,
        title: "Forum Index éducation",
        description: "Le forum d'Index Éducation est un forum déjà existant où l'on m'a demandé, dans le cadre de mon alternance, d'effectuer une refonte consistant à passer du langage Python au langage PHP. Ce forum est dédié aux enseignants et au personnel scolaire pour qu'ils puissent s'entraider sur l'installation et l'utilisation des logiciels d'Index Éducation, ainsi que sur des domaines liés à l'enseignement.",
        stack: [
            "PHP",
            "Sql-server",
            "Smarty",
            "Javascript",
            "CSS",
            "Ajax",
            "GIT",
            "Gitlab",
            "Sourcetree",
            "Smartgit",
            "Apache"
        ],
        soon: "En cour de dévellopement",
        alt: "Forum d'entraide Index éducation pour les enseignant et les services scolaire"
    },
    {
        image: Portfolio,
        title: "Mon portfolio",
        description: "Ce portfolio a été conçu pour mettre en lumière mon parcour professionnel, mes compétences et mes réalisations dans le domaine du développement logiciel. Il sert à présenter les projets sur lesquels j'ai travaillé.",
        stack: [
            "React",
            "SCSS",
            "Git",
            "Github"
        ],
        link: "dorian-marechal.fr",
        alt: "Portfolio dévellopeur web Dorian Marechal",
        git: "https://github.com/codinglabs13/portfolio"
    },
    {
        image: Login,
        title: "Crmld",
        description: "CRMld.eu est un gestionnaire de collection conçu pour tous les types de collectionneurs. Cette plateforme permet aux utilisateurs d'échanger avec d'autres collectionneurs, d'acheter ou de vendre des articles de leur collection, ou simplement de tenir à jour une liste de leurs possessions.",
        stack: [
            "En cour de conception"
        ],
        alt: "Gestionnaire de collection CRMLD"
    },

]

export default projectData