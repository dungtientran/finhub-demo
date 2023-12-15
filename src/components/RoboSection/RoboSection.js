import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import './RoboSection.css'
import Slideup from '../animation/Slideup';
import ZoomIn from '../animation/Zoomin';
import FadeIn from '../animation/FadeIn';


function RoboSection() {
    const { t, i18n } = useTranslation();
    return (
        <div className='robo-section'>
            <div
                className='container robo-container'
            //  style={{ backgroundImage: `url(${'./assets/Circle_bgr.png'})` }}
            >
                <Slideup>
                    <h1 className='robo-heading display_medium'>
                        <span>
                            {t('ROBO_HEADING_1')}
                        </span>
                        <span>
                            {t('ROBO_HEADING_2')}
                        </span>
                    </h1>
                </Slideup>
                <Row className='robo-body'>
                    <Col className='robo-description' lg='6'>
                        <FadeIn>
                            <div>
                                <span>{t('ROBO_DESC_1')} </span>
                                <span className='title-linear text_bold'>{t('ROBO_ADVISOR')} </span>
                                {/*<span className='robo-advisor'>{t('ROBO_ADVISOR')} </span> */}
                                <span>{t('ROBO_DESC_2')} </span>
                                <ul>
                                    <li>
                                        <span className='text_bold'>
                                            {t('TRANSPARENT')}
                                        </span>
                                        <span>
                                            {t('ROBO_DESC_3')}
                                        </span>
                                    </li>
                                    <li>
                                        <span className='text_bold'>
                                            {t('INDEPENDENT')}
                                        </span>
                                        <span>
                                            {t('ROBO_DESC_4')}
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            {t('ROBO_DESC_5')}
                                        </span>
                                        <span className='text_bold'>
                                            {t('ROBO_DESC_6')}
                                        </span>

                                    </li>
                                </ul>
                            </div>
                        </FadeIn>
                        <ZoomIn>
                            <div className='robo-image-wrapper'>
                                <img className='robo-image' src='./assets/Robo_symbol.png' alt="Robo symbol" />
                            </div>
                        </ZoomIn>
                    </Col>
                    <Col className='robo-graph' lg='6'>
                        <ZoomIn>
                            <div className='robo-graph-wrapper'>
                                <img className='graph' src={i18n.language === "en" ? './assets/Robo_graph_en.png' : './assets/Robo_graph_vn.png'} alt="Robo graph" />
                            </div>
                        </ZoomIn>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default RoboSection