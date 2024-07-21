import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../assets/img/Logo.svg';
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import CV from '../assets/CV.pdf';
import '../assets/scss/navbar.scss';

const Navbar = ({ handleOpenMenu }) => {
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
        <img src={Logo} alt="Logo Dorian Marechal" />
      </ScrollLink>

      <div className="mobile-menu-btn">
        <button className="btn btn-mobile" onClick={handleOpenMenu}>
          <span className="line"></span>
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
  );
}

export default Navbar;
