import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({ s_img, s_title, s_content }) => {
    return (
        <div className='service-card'>
            <div className='service-img'>
                <img src={s_img} alt="" />
            </div>
            <div className='service-content'>
                <h3>{s_title}</h3>
                <p>{s_content}</p>
            </div>
        </div>
    )
}

export default ServiceCard