import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import './ReadySection.css'
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import ZoomIn from '../animation/Zoomin';
import FadeIn from '../animation/FadeIn';
import Slideup from '../animation/Slideup';


function ReadySection() {
    const { t } = useTranslation();
    return (
        <div className='ready-section'>
            <div className='container'>
                <ZoomIn>
                    <h2 className='ready-heading'> {t('READY_HEADING_1')} </h2>
                </ZoomIn>
                <FadeIn>
                    <h2 className='ready-heading-2'> {t('READY_HEADING_2')}
                        <span className='title-linear'> Fin</span>
                        <span>Hub </span>
                        {t('READY_HEADING_3')}
                    </h2>
                </FadeIn>
                {/* <Row className='btn-wrapper justify-content-center'>
                    <Button variant="btn-primary" className="btn-simulate">{t('READY_BTN_START')}</Button>
                </Row> */}

                <Row className='btn-wrapper justify-content-center' >
                    {/* <div className="col">
                        <SubscribeForm align='justify-content-center' />
                    </div> */}
                    <Slideup>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Button
                                variant='primary'
                                className="text-nowrap btn-start"
                            >
                                Get Started
                            </Button>
                        </div>
                    </Slideup>
                </Row>
            </div>
        </div>
    )
}

export default ReadySection