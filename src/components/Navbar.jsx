import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../assets/img/Logo.svg';
import LogoLight from '../assets/img/Logo white.svg';
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import CV from '../assets/CV.pdf';
import '../assets/scss/navbar.scss';

const Navbar = ({ handleOpenMenu, toggleTheme, isDarkTheme }) => {
    const [isSticky, setIsSticky] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsSticky(true);
      } else {
        setTimeout(() => setIsSticky(false), 300);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <ScrollLink to="home" smooth={true} duration={500} className="navbar-brand">
        <img src={isDarkTheme ? LogoLight : Logo} alt="Logo Dorian Marechal" />
      </ScrollLink>

      <div className="mobile-menu-btn">
        <button className="btn btn-mobile" onClick={handleOpenMenu}>
          <p className="line"><span className='text-hidden'>mobile button</span></p>
        </button>
      </div>

      <ul className="nav-links">
        <li className="nav-item">
          <ScrollLink to="about" smooth={true} duration={500} className="nav-link">
            À propos
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="skills" smooth={true} duration={500} className="nav-link">
            Compétence
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="experience" smooth={true} duration={500} className="nav-link">
            Expérience
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="project" smooth={true} duration={500} className="nav-link">
            Projets
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </ScrollLink>
        </li>
        <li className="line"></li>
        <li className="nav-item dark-mode-contact">
          <div className="dark-mode">
            <button className='btn btn-theme' onClick={toggleTheme}>
              <span className="moon">
              {isDarkTheme ? <FaRegMoon /> : <FaRegSun />}
              </span>
              <span className='text-hidden'>Button for change theme dark or light</span>
            </button>
          </div>
          <a href={CV} download='cv-dorian-marechal.pdf' className='btn-download'>
            Télécharger mon CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
