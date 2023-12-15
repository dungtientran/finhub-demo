import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import './FeatureSection.css'
import FeatureCard from './FeatureCard'
import Slideup from '../animation/Slideup';
import ZoomIn from '../animation/Zoomin';

function FeatureSection() {
    const { t } = useTranslation();
    const listFeature = [
        { imgSource: './assets/feature_icon_free.png', imgAlt: 'feature free', heading: t('FEATURE_FREE'), subtitle: t('FEATURE_FREE_SUB') },
        { imgSource: './assets/feature_icon_easy.png', imgAlt: 'feature easy', heading: t('FEATURE_EASY'), subtitle: t('FEATURE_EASY_SUB') },
        { imgSource: './assets/feature_icon_safe.png', imgAlt: 'feature safe', heading: t('FEATURE_SAFE'), subtitle: t('FEATURE_SAFE_SUB') },
        { imgSource: './assets/feature_icon_variety.png', imgAlt: 'feature variety', heading: t('FEATURE_VARIETY'), subtitle: t('FEATURE_VARIETY_SUB') }
    ];
    return (
        <div className='feature-section'>
            <div
                className='container feature-container'
            //  style={{ backgroundImage: `url(${'./assets/feature_bgr.png'})` }}
            >
                <Slideup delay={0.5}>
                    <h1 className='feature-heading display_medium'>
                        <span className='display_medium'>{t('FEATURE_HEADING_1')}</span>
                        <span className='title-linear display_medium'> {t('FEATURE_HEADING_2')}</span>
                        <span className='display_medium'>{t('FEATURE_HEADING_3')}</span>

                    </h1>
                </Slideup>
                <Row className="feature-list justify-content-around">
                    {
                        listFeature.map((item) =>
                            <Col sm='5' key={item.imgAlt}>
                                <FeatureCard
                                    imgSource={item.imgSource}
                                    imgAlt={item.imgAlt}
                                    heading={item.heading}
                                    subtitle={item.subtitle}
                                />
                            </Col>
                        )
                    }
                </Row>
            </div>
            <div className='circle_bg_r'>
                <img src="./assets/circle_bg_r_cut.png" alt="circle_bg_r" />
            </div>
        </div>
    )
}

export default FeatureSection
