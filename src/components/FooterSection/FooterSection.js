import React from 'react'
import { Row, Col, Fade } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

import './FooterSection.css'
import ZoomIn from '../animation/Zoomin';
import FadeIn from '../animation/FadeIn';
import Slideup from '../animation/Slideup';

function FooterSection() {
    const { t, i18n } = useTranslation();
    return (
        <footer className='footer-section'>
            <div className='container'>
                <Row className='footer justify-content-lg-center my-2'>
                    <Col className='col-lg-3'>
                        <div className='col-footer'>
                            <ZoomIn>
                                <a href="/" className='footer-logo'>
                                    <img className='' src='./assets/Logo.png' alt='Logo icon'></img>
                                </a>
                            </ZoomIn>
                            <div className='copyright'>
                                <FadeIn>
                                    <span>
                                        © Copyright 2022
                                    </span>
                                    <span>
                                        All Rights Reserved
                                    </span>
                                </FadeIn>
                            </div>
                            {/* <a href="https://www.gogetssl.com" rel="nofollow" title="GoGetSSL Site Seal Logo" >
                                <div className='mt-3' id="gogetssl-animated-seal" style={{ width: "120px", height: "38px" }}></div>
                            </a> */}
                            <Helmet>
                                <script src="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/site-seals/gogetssl-seal.js"></script>
                            </Helmet>
                            <ZoomIn>
                                <div className='app-footer'>
                                    <img className='' src={i18n.language === "en" ? "./assets/GooglePlayBtn_EN.png" : "./assets/GooglePlayBtn_VN.png"} alt="Google Play Download" />
                                </div>
                            </ZoomIn>
                            <ZoomIn>
                                <div className='app-footer'>
                                    <img className='' src={i18n.language === "en" ? "./assets/AppStoreBtn_EN.png" : "./assets/AppStoreBtn_VN.png"} alt="App Store Download" />
                                </div>
                            </ZoomIn>
                        </div>
                    </Col>
                    <Col className='col-lg-2'>
                        <FadeIn>
                            <h4 className='footer-col-title'>{t('PRODUCT')}</h4>
                        </FadeIn>
                        <Link className='privacy-link ' to="/fund">
                            <Slideup>
                                <div className='py-3 text_medium'>{t('MUTUAL_FUNDS')}</div>
                            </Slideup>
                        </Link>
                        <Link className='privacy-link ' to="/fund">
                            <Slideup>
                                <div className='py-3 text_medium'>{t('ROBO_ADVISOR')}</div>
                            </Slideup>
                        </Link>
                        <Link className='privacy-link ' to="/fund">
                            <Slideup>
                                <div className='py-3 text_medium'>Glossary</div>

                            </Slideup>
                        </Link>

                        {/* <div>{t('ROBO_ADVISOR')}</div> */}
                    </Col>
                    <Col className='col-lg-2'>
                        <FadeIn>
                            <h4 className='footer-col-title'>{t('ABOUT')}</h4>
                        </FadeIn>
                        <Link className='privacy-link' to="/About">
                            <FadeIn>
                                <div className='py-3 text_medium'>{t('COMPANY')}</div>
                            </FadeIn>
                        </Link>
                        <Link className='privacy-link' to="/About">
                            <FadeIn>
                                <div className='py-3 text_medium'>{t('PRESS')}</div>
                            </FadeIn>
                        </Link>
                        <Link className='privacy-link' to="/About">
                            <FadeIn>
                                <div className='py-3 text_medium'>{t('CAREER')}</div>
                            </FadeIn>
                        </Link>

                    </Col>
                    <Col className='col-lg-2'>
                        <FadeIn>
                            <h4 className='footer-col-title'>{t('SUPPORT')}</h4>
                        </FadeIn>
                        <Link className='privacy-link' to="/Privacy">
                            <Slideup>
                                <div className='py-3 text_medium'>{t('CUSTOMER_SUPPORT')}</div>
                            </Slideup>
                        </Link>
                        <Link className='privacy-link' to="/Privacy">
                            <Slideup>
                                <div className='py-3 text_medium'>{t('PRIVACY')}</div>
                            </Slideup>
                        </Link>
                        <Link className='terms-link' to="/Terms">
                            <Slideup>
                                <div className='py-3 text_medium'>{t('TERM_CONDITION')}</div>
                            </Slideup>
                        </Link>

                    </Col>
                    <Col className='col-lg-3'>
                        <FadeIn>
                            <h4 className='footer-col-title'>{t('CONTACT')}</h4>
                        </FadeIn>
                        {/* <div className='footer-contact-box row align-items-start pt-3 align-items-center'>
                            <img className='footer-contact-email col-auto' src="./assets/email_icon.png" alt="email" />
                            <div className='col-auto'>contact@finhub.com.vn</div>
                        </div>
                        <div className='row align-items-start'>
                            <img className='footer-contact-phone col-auto' src="./assets/phone_icon.png" alt="phone" />
                            <div className='col-auto pb-3'>+84 (0)24 7108 1868</div>
                        </div>
                        <div className='row align-items-start'>
                            <img className='footer-contact-address col-auto' src="./assets/address_icon.png" alt="phone" />
                            <div className=''>{t('CONTACT_ADDRESS')}</div>
                        </div> */}

                        <div className="footer-contact-box">
                            <ZoomIn>
                                <div className='contact-icon'>
                                    <img className='' src="./assets/email_icon.png" alt="email" />
                                </div>
                            </ZoomIn>
                            <FadeIn>
                                <p className='contact-email text_medium text_foote'>contact@finhub.com.vn</p>
                            </FadeIn>
                        </div>
                        <div className="footer-contact-box">
                            <ZoomIn>
                                <div className='contact-icon'>
                                    <img className='' src="./assets/phone_icon.png" alt="tel" />
                                </div>
                            </ZoomIn>
                            <FadeIn>
                                <p className='contact-tel text_medium text_foote'>+84 (0)24 7108 1868</p>
                            </FadeIn>
                        </div>
                        {/* <div className="footer-contact-box">
                            <div>
                                <img className='contact-address-icon text_medium' src="./assets/address_icon.png" alt="address" />
                            </div>
                            <p className='contact-address text_medium' text_foote> {t('CONTACT_ADDRESS')}</p>
                        </div> */}
                        <div className="footer-social-box">
                            <div className='contact-icon'>
                                <img className='' src="./assets/tw_icon.png" alt="tel" />
                            </div>
                            <div className='contact-icon'>
                                <img className='' src="./assets/fb_icon.png" alt="tel" />
                            </div>
                            <div className='contact-icon'>
                                <img className='' src="./assets/insta_icon.png" alt="tel" />
                            </div>
                            <div className='contact-icon'>
                                <img className='' src="./assets/git_icon.png" alt="tel" />
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* <Row className='footer justify-content-lg-center my-2'>
                    <div className='copyright'>{t('FOOTER_COPYRIGHT')}</div>
                </Row> */}
            </div>
        </footer>
    )
}

export default FooterSection