import React from 'react'
import './Banner.css'
import Button1 from '../../../Component/Button1/Button1';
import hero_image from '../../../assets/Images/hero-image.png';
import a1_image from '../../../assets/animated-image/round-1.png';
import a2_image from '../../../assets/animated-image/round-2.png';
import a3_image from '../../../assets/animated-image/round-3.png';
import a4_image from '../../../assets/animated-image/round-4.png';
import a5_image from '../../../assets/animated-image/long.png';
import a6_image from '../../../assets/animated-image/light.png';

const Banner = () => {
    return (
        <div className='banner-area'>
            <div className='animated-image'>
                <img src={a1_image} className='a1-image' alt="" />
                <img src={a2_image} className="a2-image heartbeat" alt="" />
                <img src={a3_image} className="a3-image heartbeat" alt="" />
                <img src={a4_image} className="a4-image heartbeat" alt="" />
                <img src={a5_image} className="a5-image" alt="" />
                <img src={a6_image} className="a6-image rotateme" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 align-self-center">
                        <div className="banner-content">
                            <h5>Hi, It's our Glenic</h5>
                            <h2>Make Your Appointment With Our Consultants.</h2>
                            <p>Pellentesque a arcu tincidunt, sollicitudin eros sed, venenatis justo. Proin sed tellus massa. Nullam bibendum sodales est in faucibus.</p>
                            <Button1 ButtonText='Get Appointment'/>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="banner-image">
                            <img src={hero_image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;