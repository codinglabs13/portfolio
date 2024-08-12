import Canva from '../assets/img/canva-icon.svg'
import Bootstrap from '../assets/img/getbootstrap-icon 1.svg'
import Express from '../assets/img/icon-express.svg'
import ExpressLight from '../assets/img/icon-expressLight.svg'
import Javascript from '../assets/img/icon-javascript.svg'
import NodeJs from '../assets/img/icon-nodejs.svg'
import Figma from '../assets/img/icon-figma.svg'
import Git from '../assets/img/icon-git.svg'
import Gitlab from '../assets/img/gitlab-icon 1.svg'
import ReactIcons from '../assets/img/icon-react.svg'
import Sass from '../assets/img/icon-sass.svg'
import Tailwind from '../assets/img/icon-tailwindcss.svg'
import Github from '../assets/img/FaGithubSquare.svg'
import GithubLight from '../assets/img/FaGithubSquareLight.svg'
import Php from '../assets/img/php-icon 1.svg'
import MySql from '../assets/img/mysql-icon 1.svg'
import MySqlServer from '../assets/img/sql-server.svg'
import Wordpress from '../assets/img/wordpress-icon 1.svg'
import { delay } from 'framer-motion'

const skillsData = [
  { 
    label: 'Canva', 
    icon: Canva,
    altText: "Logo Canva",
    delay: 0.25 

  },
  { 
    label: 'Bootstrap', 
    icon: Bootstrap,
    altText: "Logo Bootstrap",
    delay: 0.50

  },
  { 
    label: 'Express', 
    icon: Express,
    altText: "Logo Express", 
    iconDark: ExpressLight,
    delay: 0.75
  },
  { 
    label: 'JavaScript', 
    icon: Javascript,
    altText: "Logo JavaScript",
    delay: 1
  },
  { 
    label: 'Node.js', 
    icon: NodeJs,
    altText: "Logo Node.js",
    delay: 1.25
  },
  { 
    label: 'Figma', 
    icon: Figma,
    altText: "Logo Figma",
    delay: 1.50 

  },
  { 
    label: 'Git', 
    icon: Git,
    altText: "Logo Git", 
    delay: 1.75
  },
  { 
    label: 'GitLab', 
    icon: Gitlab,
    altText: "Logo GitLab", 
    delay: 2
  },
  { 
    label: 'React', 
    icon: ReactIcons,
    altText: "Logo React",
    delay: 2.25
  },
  { 
    label: 'Sass', 
    icon: Sass,
    altText: "Logo Sass",
    delay: 2.50 

  },
  { 
    label: 'Tailwind', 
    icon: Tailwind,
    altText: "Logo Tailwind", 
    delay: 2.75
  },
  { 
    label: 'GitHub', 
    icon: Github,
    altText: "Logo GitHub", 
    iconDark: GithubLight,
    delay: 3
  },
  { 
    label: 'PHP', 
    icon: Php,
    altText: "Logo PHP",
    delay: 3.25 

  },
  { 
    label: 'MySQL', 
    icon: MySql,
    altText: "Logo MySQL",
    delay: 3.50  

  },
  { 
    label: 'SQL Server', 
    icon: MySqlServer,
    altText: "Logo SQL Server",
    delay: 3.75

  },
  { 
    label: 'WordPress', 
    icon: Wordpress,
    altText: "Logo WordPress",
    delay: 4

  }
];

export default skillsData;