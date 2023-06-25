import React from 'react'
import './MainService.css';
import ms1_img from '../../../assets/Images/main-service-1.png';
import ms2_img from '../../../assets/Images/main-service-2.png';
import ms3_img from '../../../assets/Images/main-service-3.png';
import ms4_img from '../../../assets/Images/main-service-4.png';
import ms5_img from '../../../assets/Images/main-service-5.png';
import ms6_img from '../../../assets/Images/service-1.png';

const MainService = () => {
    return (
        <div className='main-service-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="main-service-title">
                            <h4>Why Choose Us</h4>
                            <h2>Trusted by 10 Lakh Customers across 36k+ Visitors hospital.</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="main-service-card">
                            <div className="main-service-card-img">
                                <img src={ms5_img} alt="" />
                            </div>
                            <div className="main-service-card-content">
                                <h3>Friendly Enviroment</h3>
                                <p>Fusce convallis sem lorem ment Phasellus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="main-service-card">
                            <div className="main-service-card-img">
                                <img src={ms4_img} alt="" />
                            </div>
                            <div className="main-service-card-content">
                                <h3>Medical & Health</h3>
                                <p>Fusce convallis sem lorem ment Phasellus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="main-service-card">
                            <div className="main-service-card-img">
                                <img src={ms3_img} alt="" />
                            </div>
                            <div className="main-service-card-content">
                                <h3>Medical & Health</h3>
                                <p>Fusce convallis sem lorem ment Phasellus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="main-service-card">
                            <div className="main-service-card-img">
                                <img src={ms6_img} alt="" />
                            </div>
                            <div className="main-service-card-content">
                                <h3>Quality Treatment</h3>
                                <p>Fusce convallis sem lorem ment Phasellus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="main-service-card">
                            <div className="main-service-card-img">
                                <img src={ms1_img} alt="" />
                            </div>
                            <div className="main-service-card-content">
                                <h3>Modern Equipment</h3>
                                <p>Fusce convallis sem lorem ment Phasellus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="main-service-card">
                            <div className="main-service-card-img">
                                <img src={ms2_img} alt="" />
                            </div>
                            <div className="main-service-card-content">
                                <h3>Exclusive Supports</h3>
                                <p>Fusce convallis sem lorem ment Phasellus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainService