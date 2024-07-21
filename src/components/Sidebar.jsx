import React from 'react'
import { FaXmark } from "react-icons/fa6";
import Logo from '../assets/img/Logo.svg'
import { FaRegSun, FaRegMoon } from "react-icons/fa6"
import CV from '../assets/CV.pdf'
import '../assets/scss/sidebar.scss'

const Sidebar = ({openMenu, handleCloseMenu}) => {
  return (
    <>
        <div className={openMenu ? "overlay active" : "overlay"}></div>

        <div className={openMenu ? "sidebar active" : "sidebar"}>
            <div className="logo-close">
                <div className="sidebar-brand">
                    <img src={Logo} alt="Logo Dorian Marechal" />
                </div>
                <button className="btn btn-close" onClick={handleCloseMenu}>
                    <FaXmark />
                </button>
            </div>

            <ul className="sidebar-links">
                <li className="sidebar-item">
                    <a href="" className="sidebar-link">
                        À propos
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="" className="sidebar-link">
                        Projets
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="" className="sidebar-link">
                        Testimonials
                    </a>
                </li>
                <li className="sidebar-item contact">
                    <a href="" className="sidebar-link">
                        Contact
                    </a>
                </li>
            </ul>
            <div className="sidebar-theme-download">
                    <button className='btn btn-theme'>
                        <span className="text-change">
                            Mode sombre
                        </span>
                        <div className="icon">
                            <span className="sun">
                                <FaRegSun />
                            </span>
                            <span className="moon">
                                <FaRegMoon />
                            </span>
                        </div>
                    </button>
                    <a href={CV} download='cv-dorian-marechal.pdf' className='btn-download'>
                        Télécharger mon CV
                    </a>
            </div>
        </div>
    </>
  )
}

export default Sidebar