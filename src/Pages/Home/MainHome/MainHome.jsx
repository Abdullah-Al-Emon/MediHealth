import React from 'react';
import './MainHome.css'
import Banner from '../Banner/Banner';
import OwlCarousel from "react-owl-carousel";
import Service from '../Service/Service';
import About from '../About/About';
import Appointment from '../Appointment/Appointment';
import Portfolio from '../Portfolio/Portfolio';
import Emergency from '../Emergency/Emergency';
import Testimonial from '../Testimonial/Testimonial';
import MainService from '../MainService/MainService';
import Brand from '../Brand/Brand';
import Blogs from '../Blogs/Blogs';

const MainHome = () => {

  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
  }

  return (
    <div>
      {/* Banner Start  */}
      <div className='banner-section'>
        <OwlCarousel className="owl-theme" autoplay rewind nav items={1} >
          <div class="item"><Banner /></div>
          <div class="item"><Banner /></div>
          <div class="item"><Banner /></div>
        </OwlCarousel>
      </div>
      {/* Banner End  */}
      {/* service section start  */}
      <Service />
      {/* service section End  */}
      {/* about section start  */}
      <About />
      {/* about section end  */}
      {/* Appointment section start  */}
      <Appointment/>
      {/* Appointment section end  */}
      {/* portfolio section start  */}
      <Portfolio/>
      {/* portfolio section end  */}
      {/* emergency section start  */}
      <Emergency/>
      {/* emergency section end  */}
      {/* testimonials section start  */}
      <Testimonial/>
      {/* testimonials section end  */}
      {/* MainService section start  */}
      <MainService/>
      {/* MainService section end  */}
      {/* blogs section start  */}
      <Blogs/>
      {/* blogs section end  */}
      {/* brand section start  */}
      <Brand/>
      {/* brand section end  */}
    </div>
  )
}

export default MainHome