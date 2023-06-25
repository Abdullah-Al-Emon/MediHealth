import React from 'react';
import './Emergency.css';
import e_img from '../../../assets/Images/emergency-img.png'
import { Icon } from '@iconify/react';

const Emergency = () => {
    return (
        <div className='emergency-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-right">
                        <div className="emergency-image">
                            <img src={e_img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="emergency-right">
                            <div className="emergency-content">
                                <h4>Emergency Helpine</h4>
                                <h2>Need Emergency Contact</h2>
                                <p>Fusce eu eros nec felis venenatis fermentum sit amet eget turpis. Integer tempus massa ac arcu sollicitudin sollicitudin Vivamus neque urna, iaculis et orci id, euismod tempor arcu semper congue nulla amet finibus.</p>
                            </div>
                            <div className="emergency-contacts">
                                <p>24/7 Contact Our Hospital.</p>
                                <p>Emergency Contact Our Phone Number.</p>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="contact-box">
                                        <div className="contact-icon">
                                            <Icon height={30} icon="ph:phone-call-light" />
                                        </div>
                                        <div className="contact-numb">
                                            <span>Phone Number</span>
                                            <h5>(1)245-45678 call</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="contact-box">
                                        <div className="contact-icon">
                                            <Icon height={30} icon="wpf:message-outline" />
                                        </div>
                                        <div className="contact-numb">
                                            <span>Quick You Email!</span>
                                            <h5>Help.info@gmail.com</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emergency