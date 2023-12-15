import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import './ThreeStepSection.css'
import ZoomIn from '../animation/Zoomin';
import FadeIn from '../animation/FadeIn';

function ThreeStepSection() {
    const { t, i18n } = useTranslation();
    return (
        <div className='three-steps-section'>
            <div className='container'>
                <FadeIn>
                    <h2 className='three-steps-heading'> {t('THREE_STEP_HEADING_1')}
                        <span className='title-linear'>  {t('THREE_STEP_HEADING_2')} </span>
                    </h2>
                </FadeIn>
                <div className='three-steps'>
                    <Col className='register-step col-lg-4'>
                        <div className='img_three_step'>
                            <img className='step-icon' src='./assets/Register_icon.png' alt='Register icon'></img>
                        </div>
                        <div style={{ flex: 1 }} className='des_three_step'>
                            <FadeIn>

                                <h4 className=''>{t('THREE_STEP_STEP_1')}</h4>
                                <div className='text_main sub_title_three_step'>{t('THREE_STEP_STEP_1_DESC')}</div>
                            </FadeIn>

                        </div>
                    </Col>
                    <Col className='register-step col-lg-4'>
                        <ZoomIn>
                            <div className='img_three_step'>
                                <img className='step-icon' src='./assets/Invest_icon.png' alt='Invest icon'></img>
                            </div>
                        </ZoomIn>
                        <div style={{ flex: 1 }} className='des_three_step'>
                            <FadeIn>
                                <h4 className=''>{t('THREE_STEP_STEP_2')}</h4>
                                <div className='text_main sub_title_three_step'>{t('THREE_STEP_STEP_2_DESC')}</div>
                            </FadeIn>
                        </div>
                    </Col>
                    <Col className='register-step col-lg-4'>
                        <ZoomIn>
                            <div className='img_three_step'>
                                <img className='step-icon' src='./assets/Manage_icon.png' alt='Manage icon'></img>
                            </div>
                        </ZoomIn>
                        <div style={{ flex: 1 }} className='des_three_step'>
                            <FadeIn>
                                <h4 className=''>{t('THREE_STEP_STEP_3')}</h4>
                                <div className='text_main sub_title_three_step'>{t('THREE_STEP_STEP_3_DESC')}</div>
                            </FadeIn>
                        </div>
                    </Col>
                </div>
            </div>
        </div>
    )
}

export default ThreeStepSection