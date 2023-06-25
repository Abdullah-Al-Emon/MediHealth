import React from 'react';
import './Service.css';
import s1_img from '../../../assets/Images/service-1.png';
import s2_img from '../../../assets/Images/service-2.png';
import s3_img from '../../../assets/Images/service-3.png';
import s4_img from '../../../assets/Images/service-4.png';
import ServiceCard from '../../../Component/ServiceCard/ServiceCard';
import OwlCarousel from "react-owl-carousel";

const Service = () => {
    const responsive = {
        0:{
            items:1
        },
        650:{
            items:2
        },
        991:{
            items:3
        },
        1100: {
            items: 4
        }
    }
    return (
        <div className='service-area'>
            <div className="container">
                <OwlCarousel className="owl-theme" autoplay responsive={responsive}  >
                    <div className="item">
                        <ServiceCard
                            s_img={s4_img}
                            s_title={'Dental Caring'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                    <div class="item">
                        <ServiceCard
                            s_img={s3_img}
                            s_title={'Heart Caring'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                    <div class="item">
                        <ServiceCard
                            s_img={s2_img}
                            s_title={'Child Emergency'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                    <div className="item">
                        <ServiceCard
                            s_img={s1_img}
                            s_title={'Surgery Center'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                    <div class="item">
                        <ServiceCard
                            s_img={s4_img}
                            s_title={'Dental Caring'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                    <div class="item">
                        <ServiceCard
                            s_img={s3_img}
                            s_title={'Heart Caring'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                    <div class="item">
                        <ServiceCard
                            s_img={s2_img}
                            s_title={'Child Emergency'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                    <div className="item">
                        <ServiceCard
                            s_img={s1_img}
                            s_title={'Surgery Center'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                    <div class="item">
                        <ServiceCard
                            s_img={s4_img}
                            s_title={'Dental Caring'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                    <div class="item">
                        <ServiceCard
                            s_img={s3_img}
                            s_title={'Heart Caring'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                    <div class="item">
                        <ServiceCard
                            s_img={s2_img}
                            s_title={'Child Emergency'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                    <div className="item">
                        <ServiceCard
                            s_img={s1_img}
                            s_title={'Surgery Center'}
                            s_content={'Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec sodales leo vitae justo placerat.'}
                        />
                    </div>
                </OwlCarousel>

            </div>
        </div>
    )
}

export default Service