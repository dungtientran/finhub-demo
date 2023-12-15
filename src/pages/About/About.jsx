import React from 'react'
import { Table, Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import './About.css'


const About = () => {
    const { t } = useTranslation();

    return (
        <div className='about-wrapper'>
            {/* <NavbarComp btnVisible="d-none" /> */}
            <div className='company-intro'>
                <div className='container feature-container'>
                    {/* <h1 className='feature-heading'> {t('CONTACT_COMPANY_NAME')} </h1> */}
                    <div className="mission-icon-wrap">
                        <img className='mission-icon align-self-center' src="./assets/Mission.png" alt="Mission" />
                    </div>
                    <h2 className='mission-heading align-self-center title-linear'> {t('COMPANY_MISSION')} </h2>
                    <p className='company-mission text_medium'>{t('COMPANY_MISSION_TEXT')}</p>

                    <div className="mission-icon-wrap">
                        <img className='mission-icon align-self-center ' src="./assets/Value.png" alt="Mission" />
                    </div>
                    <h2 className='mission-heading title-linear'> {t('COMPANY_VALUE')} </h2>
                    <p className='company-value text_medium'>{t('COMPANY_VALUE_TEXT')}</p>

                    <Row className=' justify-content-lg-center' style={{ margin: '12px 0' }}>
                        <Col className='register-step-about col-6 col-lg-2'>
                            <img className='value-icon' src='./assets/customer.png' alt='customer'></img>
                            <p className='value-name'>{t('VALUE_1')}</p>
                            <div className='value-desc'>{t('VALUE_1_DESC')}</div>
                        </Col>
                        <Col className='register-step-about col-6 col-lg-2'>
                            <img className='value-icon' src='./assets/creative.png' alt='creative'></img>
                            <p className='value-name'>{t('VALUE_2')}</p>
                            <div className='value-desc'>{t('VALUE_2_DESC')}</div>
                        </Col>
                        <Col className='register-step-about col-6 col-lg-2'>
                            <img className='value-icon' src='./assets/upgrade.png' alt='upgrade'></img>
                            <p className='value-name'>{t('VALUE_3')}</p>
                            <div className='value-desc'>{t('VALUE_3_DESC')}</div>
                        </Col>
                        <Col className='register-step-about col-6 col-lg-2'>
                            <img className='value-icon' src='./assets/commit.png' alt='commit'></img>
                            <p className='value-name'>{t('VALUE_4')}</p>
                            <div className='value-desc'>{t('VALUE_4_DESC')}</div>
                        </Col>
                        <Col className='register-step-about col-6 col-lg-2'>
                            <img className='value-icon' src='./assets/colab.png' alt='colab'></img>
                            <p className='value-name'>{t('VALUE_5')}</p>
                            <div className='value-desc'>{t('VALUE_5_DESC')}</div>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* <FooterSection/> */}
        </div>
    )
}

export default About