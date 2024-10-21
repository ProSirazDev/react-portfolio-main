import React from 'react';
import './About.css';
import AboutImg from '../../assets/profile.png';
import CV from '../../assets/Juhi-CV.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
    
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">
                    Web developer, with extensive knowledge and years of experience, working in web technologies and UI / Ux designs, delivering quality work.
                </p>

                <a download="" href={CV} className='button button--flex'>
                    Download CV <i className="uil uil-file-download-alt button__icon"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About;