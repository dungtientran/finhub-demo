import React, { Fragment } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Slideup from '../../components/animation/Slideup';
import '../../style/knowledge.css';
import { listGlossary } from '../../assets/glossary/glossary';
import { useTranslation } from "react-i18next";

const Knowledge = () => {
    const { t, i18n } = useTranslation();

    return (
        <Container className='contaiter_knowledge'>
            <div className='text-center'>
                <Slideup>
                    <h2 className='mt-5'>
                        {/* <span
                            className='text-primary mx-2'
                        >
                            Finhub
                        </span> */}
                        <span>
                            Glossary
                        </span>
                    </h2>
                </Slideup>
                {/* <Slideup>
                    <div className='box_text_knowledge'>
                        <p
                            className='text_knowledge'
                        >
                            If you are not sure whether Draft is suitable for you or not, do not worry. We are here to explain everything you might want to know.
                        </p>
                    </div>
                </Slideup> */}
            </div>
            {listGlossary?.map((item, index) => (
                <Row className='justify-content-lg-center my-4'>
                    <Col key={index} className=''>
                        <Slideup>
                            <h2 className='mb-4 title-linear'>
                                {item?.r}
                            </h2>
                            {item?.data?.map((data, i) => (
                                <Slideup key={i} duration={0.7 * (i + 1)}>
                                    <Accordion className='shadow mt-3 rounded-lg box_title_accordion'>
                                        <Accordion.Header className='box_knowledge'>
                                            <h4>
                                                {data?.title}
                                            </h4>
                                        </Accordion.Header>
                                        <Accordion.Body >
                                            <p
                                                className='text_medium knowledge_body'
                                            >
                                                {i18n.language === "en" ? data.des : data.des_vn}

                                            </p>
                                        </Accordion.Body>
                                    </Accordion>
                                </Slideup>

                            ))}
                        </Slideup>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default Knowledge
