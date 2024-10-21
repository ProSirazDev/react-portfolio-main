import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yrruezp', 'template_qhxxbvf', form.current, 'E_X8JrpYWhnp5wE-C')
        e.target.reset();
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact me</h2>
            <span className="section__subtitle">Get in touch</span>
        
            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3 className="contact__title">Reach me</h3>
                
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-phone contact__card-icon"></i>
                            
                            <h3 className='contact__card-title'>Phone</h3>
                            <span className='contact__card-data'>+91 999 8888 111</span>

                            <button className='contact__button'>
                                Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </button>
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-envelope contact__card-icon"></i>
                            
                            <h3 className='contact__card-title'>E-mail</h3>
                            <span className='contact__card-data'>user@gmail.com</span>

                            <button className='contact__button'>
                                Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </button>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            
                            <h3 className='contact__card-title'>Whatsapp</h3>
                            <span className='contact__card-data'>+91 999 8888 111</span>

                            <button className='contact__button'>
                                Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='contact__content'>
                    <h3 className="contact__title">For More</h3>

                    <form ref={form} onSubmit={sendEmail} className='contact__form'>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Name</label>
                            <input type="text" name="name" className='contact__form-input' placeholder='Enter your name' />
                        </div>

                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Email</label>
                            <input type="email" name="email" className='contact__form-input' placeholder='Enter your email' />
                        </div>

                        <div className='contact__form-div contact__form-area'>
                            <label className='contact__form-tag'>Message</label>
                            <textarea name="message" className='contact__form-input' cols="30" rows="10" placeholder='Write your message here...'></textarea>
                        </div>

                        <button className="button button--flex">
                            Send Message <i className="uil uil-message button__icon"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;