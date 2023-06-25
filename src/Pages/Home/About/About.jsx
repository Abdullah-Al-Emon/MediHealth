import React from 'react';
import './About.css';
import about_img from '../../../assets/Images/about-img.png';
import number_img from '../../../assets/Images/number.png';
import a4_img from '../../../assets/animated-image/round-4.png';
import a5_img from '../../../assets/animated-image/round-5.png';
import vission_img from '../../../assets/Images/vision.png';
import mission_img from '../../../assets/Images/mission.png';
import Button1 from '../../../Component/Button1/Button1';
import { Icon } from '@iconify/react';

const About = () => {
    return (
        <div className='about-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={about_img} alt="" />
                            <img src={number_img} className='number-img' alt="" />
                            <img src={a4_img} className='a4-img heartbeat' alt="" />
                            <img src={a5_img} className='a5-img' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="about-text-section">
                                <h4>10 years experience</h4>
                                <h2>We Are Best Treatment For our Hospital.</h2>
                                <p>Fusce eu eros nec felis venenatis fermentum sit amet eget turpis. Integer tempus massa ac arcu sollicitudin sollicitudin Vivamus neque urna, iaculis et orci id, euismod tempor arcu semper congue nulla amet finibus.</p>
                                <p>Tempus massa ac arcu sollicitudin sollicitudin Vivamus neque urna, iaculis et orci id, euismod tempor arcu semper congue nulla amet finibus.</p>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="about-card">
                                        <div className="about-card-top">
                                            <div className='about-card-img'><img src={mission_img} alt="" /></div>
                                            <h4>Our Mission</h4>
                                        </div>
                                        <p className="about-card-content">
                                            Donec faucibus erat neque, in consectetu nisl sagittis Cras porttitor molestie.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="about-card">
                                        <div className="about-card-top">
                                            <div className='about-card-img'><img src={vission_img} alt="" /></div>
                                            <h4>Our Vision</h4>
                                        </div>
                                        <p className="about-card-content">
                                            Donec faucibus erat neque, in consectetu nisl sagittis Cras porttitor molestie.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-btn">
                            <Button1 ButtonText={'About More'} />
                            <a href="#" className='video-btn'><Icon height={30} icon="ph:play-fill" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="large-about-text">
                <h3>About <span>.</span> Glenic</h3>
            </div>
        </div>
    )
}

export default About