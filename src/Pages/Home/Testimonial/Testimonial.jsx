import React from 'react';
import './Testimonial.css';
import t1_img from '../../../assets/Images/testimonial-img.png';
import OwlCarousel from "react-owl-carousel";

const Testimonial = () => {
    const responsive = {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
    return (
        <div className='testimonial-section'>
            <div className="container">
            <div className="testimonial-title">
                <h4>Our Testimonials</h4>
                <h2>What Clients Say?</h2>
            </div>
            <OwlCarousel className="owl-theme" rewind autoplay responsive={responsive}  >
                <div className="item">
                    <div className="testimonial-card">
                        <div className="testimonial-top">
                            <div className="testimonial-img">
                                <img src={t1_img} alt="" />
                            </div>
                            <div className="testimonial-card-title">
                                <h4>Jems Bonrnli Era</h4>
                                <span>Glenic CEO</span>
                            </div>
                        </div>
                        <p>Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-card">
                        <div className="testimonial-top">
                            <div className="testimonial-img">
                                <img src={t1_img} alt="" />
                            </div>
                            <div className="testimonial-card-title">
                                <h4>Jems Bonrnli Era</h4>
                                <span>Glenic CEO</span>
                            </div>
                        </div>
                        <p>Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-card">
                        <div className="testimonial-top">
                            <div className="testimonial-img">
                                <img src={t1_img} alt="" />
                            </div>
                            <div className="testimonial-card-title">
                                <h4>Jems Bonrnli Era</h4>
                                <span>Glenic CEO</span>
                            </div>
                        </div>
                        <p>Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-card">
                        <div className="testimonial-top">
                            <div className="testimonial-img">
                                <img src={t1_img} alt="" />
                            </div>
                            <div className="testimonial-card-title">
                                <h4>Jems Bonrnli Era</h4>
                                <span>Glenic CEO</span>
                            </div>
                        </div>
                        <p>Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-card">
                        <div className="testimonial-top">
                            <div className="testimonial-img">
                                <img src={t1_img} alt="" />
                            </div>
                            <div className="testimonial-card-title">
                                <h4>Jems Bonrnli Era</h4>
                                <span>Glenic CEO</span>
                            </div>
                        </div>
                        <p>Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-card">
                        <div className="testimonial-top">
                            <div className="testimonial-img">
                                <img src={t1_img} alt="" />
                            </div>
                            <div className="testimonial-card-title">
                                <h4>Jems Bonrnli Era</h4>
                                <span>Glenic CEO</span>
                            </div>
                        </div>
                        <p>Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna.</p>
                    </div>
                </div>
            </OwlCarousel>
            </div>
        </div>
    )
}

export default Testimonial