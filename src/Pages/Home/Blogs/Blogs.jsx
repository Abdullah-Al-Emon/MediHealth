import React from 'react';
import './Blogs.css'
import Button1 from '../../../Component/Button1/Button1';
import blogs_img1 from '../../../assets/Images/blogs-img-1.png';
import blogs_img2 from '../../../assets/Images/blogs-img-2.png';
import blogs_img3 from '../../../assets/Images/blogs-img-3.png';

const Blogs = () => {
    return (
        <div className='blogs-section'>
            <div className="container">
                <div className="blogs-title">
                    <h4>Our Blogs</h4>
                    <h2>Latest News & Blogs</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blogs-card">
                            <div className="blogs-card-img">
                                <img src={blogs_img1} alt="" />
                            </div>
                            <div className="blogs-card-content">
                                <div className="dates">
                                    <span>by <a href="#"> Creativemela</a></span>
                                    <span>22 Aug 2023</span>
                                </div>
                                <h3>Fusce tincidunt commodo sapien, quis porttitor ipsum fringilla et.</h3>
                                <Button1 ButtonText={'Read More'} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blogs-card">
                            <div className="blogs-card-img">
                                <img src={blogs_img2} alt="" />
                            </div>
                            <div className="blogs-card-content">
                                <div className="dates">
                                    <span>by <a href="#"> Creativemela</a></span>
                                    <span>22 Aug 2023</span>
                                </div>
                                <h3>Fusce tincidunt commodo sapien, quis porttitor ipsum fringilla et.</h3>
                                <Button1 ButtonText={'Read More'} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blogs-card">
                            <div className="blogs-card-img">
                                <img src={blogs_img3} alt="" />
                            </div>
                            <div className="blogs-card-content">
                                <div className="dates">
                                    <span>by <a href="#"> Creativemela</a></span>
                                    <span>22 Aug 2023</span>
                                </div>
                                <h3>Fusce tincidunt commodo sapien, quis porttitor ipsum fringilla et.</h3>
                                <Button1 ButtonText={'Read More'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs