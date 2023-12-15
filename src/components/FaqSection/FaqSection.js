import React from 'react'
import { Row, Col, Accordion, Button } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import './FaqSection.css'
import Slideup from '../animation/Slideup';
import FadeIn from '../animation/FadeIn';
import ZoomIn from '../animation/Zoomin';


function FaqSection() {
  const { t, i18n } = useTranslation();

  const listquestion = [
    {
      question: t('FAQ_QUESTION_1'),
      answer: t('FAQ_QUESTION_1_ANSWER')
    },
    {
      question: t('FAQ_QUESTION_2'),
      answer: t('FAQ_QUESTION_2_ANSWER')
    },
    {
      question: t('FAQ_QUESTION_3'),
      answer: t('FAQ_QUESTION_3_ANSWER')
    },
    {
      question: t('FAQ_QUESTION_4'),
      answer: t('FAQ_QUESTION_4_ANSWER')
    },
    {
      question: t('FAQ_QUESTION_5'),
      answer: t('FAQ_QUESTION_5_ANSWER')
    },
  ]



  return (
    <div className='faq-section'>
      <div className='container faq-container' style={{ backgroundImage: `url(${'./assets/Faq_bgr.png'})` }}>
        <Slideup>
          <h2 className='faq-heading'>
            <span className='title-linear '>
              {t('FAQ_HEADING_1')}
            </span>
            <span>
              {t('FAQ_HEADING_2')}
            </span>
          </h2>
        </Slideup>
        <Row className='justify-content-lg-center'>
          <Col className=' col-lg-6 faq-subtitle'>
            <FadeIn>
              <span className='text_medium '>
                {t('FAQ_SUBTITLE')}
              </span>
            </FadeIn>
          </Col>
        </Row>
        <Row className='justify-content-lg-center'>
          <Col className='faq-all-questions col-lg-8'>
            <ZoomIn>
              <div className='icon-questions'>
                <img src='./assets/FAQ_icon.png' alt='FAQ icon' width='25px'></img>
              </div>
            </ZoomIn>
            <FadeIn>
              <h4 className='title-linear'> {t('FAQ_ALL_QUESTIONS')}</h4>
            </FadeIn>
          </Col>
        </Row>
        <Row className='justify-content-lg-center'>
          <Col className='col-lg-8'>
            {/* <Accordion className=''>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h4>
                    {t('FAQ_QUESTION_1')}
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  {t('FAQ_QUESTION_1_ANSWER')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>
                    {t('FAQ_QUESTION_2')}
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  {t('FAQ_QUESTION_2_ANSWER')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h4>
                    {t('FAQ_QUESTION_3')}
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  {t('FAQ_QUESTION_3_ANSWER')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h4>
                    {t('FAQ_QUESTION_4')}
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  {t('FAQ_QUESTION_4_ANSWER')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h4>
                    {t('FAQ_QUESTION_5')}
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  {t('FAQ_QUESTION_5_ANSWER')}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> */}

            {listquestion.map((question, index) => (
              <Slideup
                key={index}
                delay={index * 0.1}
              >
                <Accordion
                  className='FAQ_accordion mt-3 shadow-sm'
                >
                  <Accordion.Header >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%'
                    }}>
                      <h4>
                        {question.question}
                      </h4>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body >
                    {question.answer}
                  </Accordion.Body>
                </Accordion>
              </Slideup>
            ))}

          </Col>
        </Row>
      </div>
    </div >
  )
}

export default FaqSection