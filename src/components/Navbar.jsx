import React from 'react'
import Logo from '../assets/img/Logo.svg'
import { FaRegSun, FaRegMoon } from "react-icons/fa6"
import CV from '../assets/CV.pdf'
import '../assets/scss/navbar.scss'

const Navbar = ({handleOpenMenu}) => {
  return (
    <nav>
      <div className="navbar-brand">
        <img src={Logo} alt="Logo Dorian Marechal" />
      </div>

      <div className="mobile-menu-btn">
        <button className="btn btn-mobile" onClick={handleOpenMenu}>
            <span className="line"></span>
        </button>
      </div>

      <ul className="nav-links">
        <li className="nav-item">
            <a href="" className="nav-link">
                À propos
            </a>
        </li>
        <li className="nav-item">
            <a href="" className="nav-link">
                Projets
            </a>
        </li>
        <li className="nav-item">
            <a href="" className="nav-link">
                Testimonials
            </a>
        </li>
        <li className="nav-item">
            <a href="" className="nav-link">
                Contact
            </a>
        </li>
        <li className="line"></li>
        <li className="nav-item dark-mode-contact">
            <div className="dark-mode">
                <button className='btn btn-theme'>
                    <span className="sun">
                        <FaRegSun />
                    </span>
                    <span className="moon">
                        <FaRegMoon />
                    </span>
                </button>
            </div>
            <a href={CV} download='cv-dorian-marechal.pdf' className='btn-download'>
                Télécharger mon CV
            </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
