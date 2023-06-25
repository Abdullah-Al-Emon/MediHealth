import React from 'react';
import './Portfolio.css';
import p1_img from '../../../assets/Images/portfolio-1.png';
import p2_img from '../../../assets/Images/portfolio-2.png';
import p3_img from '../../../assets/Images/portfolio-3.png';
import OwlCarousel from "react-owl-carousel";
import PortfolioCard from '../../../Component/PortfolioCard/PortfolioCard';

const Portfolio = () => {
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
        <div className='portfolio-section'>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-4">
                        <div className="portfolio-title">
                            <h4>Recent Projects</h4>
                            <h2>our case study</h2>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="portfolio-tabs">
                            <ul>
                                <li><a className='active' href="#">All</a></li>
                                <li><a href="#">Neurologists</a></li>
                                <li><a href="#">Orthopedic</a></li>
                                <li><a href="#">COVID-19</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="portfolio-all-card">
                    <OwlCarousel className="owl-theme" nav rewind autoplay responsive={responsive}  >
                        <div className="item">
                            <PortfolioCard
                                img={p3_img}
                                area={'cellulitis, influenza'}
                                title={'Anxiety in children'}
                                desc={'These doctors imaging, including X-rays.'}
                            />
                        </div>
                        <div className="item">
                            <PortfolioCard
                                img={p2_img}
                                area={'tuberculosis, HIV'}
                                title={'Alcohol liver disease'}
                                desc={'These doctors imaging, including X-rays.'}
                            />
                        </div>
                        <div className="item">
                            <PortfolioCard
                                img={p1_img}
                                area={'Parasite Infections'}
                                title={'Lymp venereum (LGV)'}
                                desc={'These doctors imaging, including X-rays.'}
                            />
                        </div>
                        <div className="item">
                            <PortfolioCard
                                img={p3_img}
                                area={'cellulitis, influenza'}
                                title={'Anxiety in children'}
                                desc={'These doctors imaging, including X-rays.'}
                            />
                        </div>
                        <div className="item">
                            <PortfolioCard
                                img={p2_img}
                                area={'tuberculosis, HIV'}
                                title={'Alcohol liver disease'}
                                desc={'These doctors imaging, including X-rays.'}
                            />
                        </div>
                        <div className="item">
                            <PortfolioCard
                                img={p1_img}
                                area={'Parasite Infections'}
                                title={'Lymp venereum (LGV)'}
                                desc={'These doctors imaging, including X-rays.'}
                            />
                        </div>
                    </OwlCarousel>

                </div>
            </div>
        </div>
    )
}

export default Portfolio