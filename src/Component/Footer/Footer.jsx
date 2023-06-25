import React from 'react'
import './Footer.css'
import logo2 from '../../assets/Images/logo2.png'
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-top'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className='footer-text'>
                                <h3>Get Newsletter MediHealth</h3>
                                <h2>I'll Help You Get Back to Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 align-self-end">
                            <div className="footer-email-form">
                                <form action="">
                                    <input placeholder='Enter Your Newsletter...' type="text" />
                                    <button type='submit'>
                                        <span><Icon height={20} icon="ph:arrow-right-bold" /></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-line"></div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-single-content">
                                <div className="footer-logo">
                                    <a href="#">
                                        <img src={logo2} alt="" />
                                    </a>
                                </div>
                                <p>In velit arcu posuere integer. Dolor sit am, consectetur nun adipiscing elit.</p>
                                <div className="social-icon">
                                    <span><a href="#"><Icon height={20} icon="ic:outline-facebook" /></a></span>
                                    <span><a href="#"><Icon height={20} icon="mdi:twitter" /></a></span>
                                    <span><a href="#"><Icon height={20} icon="mdi:instagram" /></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="footer-single-content">
                                <h3 className='title'>
                                    Quick Links
                                </h3>
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Aboute Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Portfolios</a>
                                    </li>
                                    <li>
                                        <a href="#">Blogs</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="footer-single-content">
                                <h3 className='title'>Service Links</h3>
                                <ul>
                                    <li><a href="#">Vaccination</a></li>
                                    <li><a href="#">Home visit</a></li>
                                    <li><a href="#">Delivery of analyzes</a></li>
                                    <li><a href="#">Diagnostics</a></li>
                                    <li><a href="#">Gynecology</a></li>
                                    <li><a href="#">Immunology</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-single-content">
                                <h3 className='title'>Contact Info</h3>
                                <ul className='contact-info'>
                                    <li>
                                        <Icon height={20} icon="carbon:location-filled" />
                                        <span>#22-00 Locust Chicago, Illinois</span>
                                        <span>#66-22 Los Angeles, California</span>
                                    </li>
                                    <li>
                                        <Icon height={20} icon="ion:call" />
                                        <a>(+66)-233-666-555</a>
                                        <a>(+99)-222-455-4444</a>
                                    </li>
                                    <li>
                                        <Icon height={20} icon="wpf:message" />
                                        <a>contactinfo@Zaviagmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <div className='copy-right-text'>
                                <a href="#">MediHelth</a> <p>© Copyright-2023 All Rights Reserved.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer