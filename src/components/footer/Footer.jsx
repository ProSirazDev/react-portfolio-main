import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Juhi</h1>

            <ul className='footer__list'>
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>

                <li>
                    <a href="#qualification" className='footer__link'>Qualification</a>
                </li>

                <li>
                    <a href="#skills" className='footer__link'>Skills</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href="https://www.instagram.com/sabnamsarkar/" className='footer__social-link' target="_blank">
                    <i className="bx bxl-instagram-alt"></i>
                </a>
                
                <a href="https://www.linkedin.com/in/juhi-sarkar-5a9b70200/" target="_blank" className="footer__social-link">
                    <i className="bx bxl-linkedin"></i>
                </a>
                
                <a href="https://github.com/SabnamJuhi" target="_blank" className="footer__social-link">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className='footer__copy'>
                &#169; Juhi {new Date().getFullYear()} All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer;