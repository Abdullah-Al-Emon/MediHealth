import React from 'react';
import './PortfolioCard.css'
import { Icon } from '@iconify/react';

const PortfolioCard = ({img, area, title, desc}) => {
    return (
        <div className="portfolio-card">
            <div className="portfolio-card-img">
                <img src={img} alt="" />
                <div className="portfolio-hover-icon">
                    <a href="#"><Icon height={30} icon="ph:arrow-right-bold" /></a>
                </div>
            </div>
            <div className="portfolio-card-content">
                <span>{area}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default PortfolioCard