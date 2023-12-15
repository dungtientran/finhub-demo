/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './HeroSection.css'
// import {LocaleContext} from '../context/LocaleContext.js'
import { useTranslation } from "react-i18next";
import { Container } from 'react-bootstrap';
import i18next from 'i18next';

import { motion } from "framer-motion"
import Slideup from '../animation/Slideup';
import ZoomIn from '../animation/Zoomin';
import FadeIn from '../animation/FadeIn';

function HeroSection({ headline, subtitle }) {
    const { t } = useTranslation();
    // const { locale } = React.useContext(LocaleContext);
    return (
        <div className='hero-section' style={{ backgroundImage: `url(${'./assets/Hero_bgr.png'})` }}>
            <Container>
                <div className='row' style={{ display: 'flex', flexDirection: 'row', alignItems: 'start' }}>
                    <div className='col-md-12 col-lg-7'>
                        <div

                            className='hero-text-wrapper'
                        >
                            <Slideup>
                                <h1 className='hero-heading display_large '>
                                    <span className='title-linear '>{t('EAST_SAFE')}</span>
                                    <span style={{ margin: '0 12px' }}>
                                        {t('HERO_HEADING')}
                                    </span>
                                    <span>
                                        <span className='title-linear'>Fin</span>
                                        <span>hub</span>
                                    </span>
                                </h1>
                            </Slideup>
                            <FadeIn>
                                <p className='title_large hero-subtitle '>{t('HERO_SUBTITLE')}</p>
                            </FadeIn>
                            <ZoomIn>
                                <div className='hero-download-wrapper'>
                                    <button className='btn-app'>
                                        <img
                                            className='hero-google-play-image'
                                            src={i18next.language === "en"
                                                ? "./assets/GooglePlayBtn_EN.png"
                                                : "./assets/GooglePlayBtn_VN.png"
                                            }
                                            lt="Google Play Download"
                                        />
                                    </button>
                                    <button className='btn-app'>
                                        <img
                                            className='hero-app-store-image'
                                            src={i18next.language === "en"
                                                ? "./assets/AppStoreBtn_EN.png"
                                                : "./assets/AppStoreBtn_VN.png"
                                            }
                                            alt="App Store Download"
                                        />

                                    </button>
                                </div>
                            </ZoomIn>
                        </div>

                        <div>
                            {/* <div className='subscribe-title'>{t('SUBSCRIBE_TITLE')}</div> */}
                            {/* <SubscribeForm/> */}
                        </div>
                        {/* <h1>{locale}</h1> */}
                    </div>
                    <div className='col-md-12 col-lg-5 box_hero-image-wrapper'>
                        <ZoomIn className='hero-image-wrapper'>
                            <img className='hero-image' src="./assets/iPhone.png" alt="Hero iPhone" />
                        </ZoomIn>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default HeroSection