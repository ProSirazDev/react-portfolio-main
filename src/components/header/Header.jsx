import React, { useState } from 'react';
import './Header.css'

const Header = () => {

    window.addEventListener("scroll", function() {
        const heads = document.querySelector(".header");

        if(this.scrollY >= 80) {
            heads.classList.add("scroll-header");
        }
        else {
            heads.classList.remove("scroll-header");
        }
    })

    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className='nav__logo'>Portfolio</a>
            
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className='nav__item'>
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? 'nav__link active-link' : 'nav__link'}>
                                <i className='uli uil-estate nav__icon'></i> Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'nav__link active-link' : 'nav__link'}>
                                <i className='uil uil-user nav__icon'></i> About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? 'nav__link active-link' : 'nav__link'}>
                                <i className='uli uil-file-info-alt nav__icon'></i> Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#qualification" onClick={() => setActiveNav("#qualification")} className={activeNav === "#qualification" ? 'nav__link active-link' : 'nav__link'}>
                                <i className='uli uil-scenery nav__icon'></i> Qualification
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'nav__link active-link' : 'nav__link'}>
                                <i className='uli uil-message nav__icon'></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;