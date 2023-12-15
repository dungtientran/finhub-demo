import React from 'react'
import './FeatureCard.css'
import ZoomIn from '../animation/Zoomin'

function FeatureCard({ imgSource, imgAlt, heading, subtitle }) {
    return (
        <div className='feature-card'>
            <ZoomIn>
                <img className='card-image' src={imgSource} alt={imgAlt} />
            </ZoomIn>
            <ZoomIn>
                <div className='card-info'>
                    <h3 className='card-heading'>{heading}</h3>
                    <div className='card-subtitle text_medium'>{subtitle}</div>
                </div>
            </ZoomIn>
        </div>
    )
}

export default FeatureCard