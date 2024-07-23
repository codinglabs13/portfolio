import React from 'react';
import { FaXmark } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../assets/img/Logo.svg';
import LogoLight from '../assets/img/Logo white.svg';
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import CV from '../assets/CV.pdf';
import '../assets/scss/sidebar.scss';

const Sidebar = ({ openMenu, handleCloseMenu, toggleTheme, isDarkTheme }) => {
  return (
    <>
      <div className={openMenu ? "overlay active" : "overlay"}></div>

      <div className={openMenu ? "sidebar active" : "sidebar"}>
        <div className="logo-close">
          <ScrollLink to="home" smooth={true} duration={500} className="sidebar-brand">
            <img src={isDarkTheme ? LogoLight : Logo} alt="Logo Dorian Marechal" />
          </ScrollLink>
          <button className="btn btn-close" onClick={handleCloseMenu}>
            <FaXmark />
            <span className="text-hidden">Close button</span>
          </button>
        </div>

        <ul className="sidebar-links">
          <li className="sidebar-item">
            <ScrollLink to="about" smooth={true} duration={500} className="sidebar-link" onClick={handleCloseMenu}>
              À propos
            </ScrollLink>
          </li>
          <li className="sidebar-item">
            <ScrollLink to="project" smooth={true} duration={500} className="sidebar-link" onClick={handleCloseMenu}>
              Projets
            </ScrollLink>
          </li>
          <li className="sidebar-item">
            <ScrollLink to="skills" smooth={true} duration={500} className="sidebar-link" onClick={handleCloseMenu}>
              Compétence
            </ScrollLink>
          </li>
          <li className="sidebar-item">
            <ScrollLink to="experience" smooth={true} duration={500} className="sidebar-link" onClick={handleCloseMenu}>
              Expérience
            </ScrollLink>
          </li>
          <li className="sidebar-item contact">
            <ScrollLink to="contact" smooth={true} duration={500} className="sidebar-link" onClick={handleCloseMenu}>
              Contact
            </ScrollLink>
          </li>
        </ul>
        <div className="sidebar-theme-download">
          <button className='btn btn-theme'>
            <span className="text-change">
              {isDarkTheme ? "Mode sombre" : "Mode clair"}
            </span>
            <button className="icon" onClick={toggleTheme}>
              <span className="moon">
                {isDarkTheme ? <FaRegMoon /> : <FaRegSun />}
              </span>
              <span className='text-hidden'>Button for change theme dark or light</span>
            </button>
          </button>
          <a href={CV} download='cv-dorian-marechal.pdf' className='btn-download'>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
