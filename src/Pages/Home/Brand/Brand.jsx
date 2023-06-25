import React from 'react';
import './Brand.css';
import brand_img from '../../../assets/Images/brand-img.png';
import OwlCarousel from "react-owl-carousel";

const Brand = () => {
    const responsive = {
        0: {
            items: 2
        },
        500: {
            items: 3
        },
        767: {
            items: 4
        },
        991: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
    return (
        <div className='brand-section'>
           <div className="container">
           <OwlCarousel className="owl-theme" rewind autoplay responsive={responsive}  >
                <div className="item">
                    <img src={brand_img} alt="" />
                </div>
                <div className="item">
                    <img src={brand_img} alt="" />
                </div>
                <div className="item">
                    <img src={brand_img} alt="" />
                </div>
                <div className="item">
                    <img src={brand_img} alt="" />
                </div>
                <div className="item">
                    <img src={brand_img} alt="" />
                </div>
                <div className="item">
                    <img src={brand_img} alt="" />
                </div>
                <div className="item">
                    <img src={brand_img} alt="" />
                </div>
                <div className="item">
                    <img src={brand_img} alt="" />
                </div>
                <div className="item">
                    <img src={brand_img} alt="" />
                </div>
                <div className="item">
                    <img src={brand_img} alt="" />
                </div>
            </OwlCarousel>
           </div>
        </div>
    )
}

export default Brand