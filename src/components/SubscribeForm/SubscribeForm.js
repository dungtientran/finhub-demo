import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import { collection, addDoc } from "firebase/firestore"; 

import './SubscribeForm.css'
import db from '../../firebase'

function SubscribeForm({ align }) {
    const { t } = useTranslation();
    const [validated, setValidated] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);
    const [email, setEmail] = useState();

    const handleSubscribe = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity() === true) {
            try {
                await addDoc(collection(db, "emails"), {
                  email:{email},
                  time: Date().toLocaleString()
                });
                // console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                // console.error("Error adding document: ", e);
              }
            setIsConfirmVisible(true);
            setTimeout(() => {
                setIsConfirmVisible(false);
            }, 3000);
        }

    }

    return (
        <div className='subscribe-form'>
            <Form noValidate validated={validated} onSubmit={handleSubscribe} >

                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Row className={align}>
                        <Col className='col-auto'>
                            <Form.Control 
                                required 
                                className="form-email" 
                                type="email" 
                                placeholder="Email" 
                                value={email}
                                onChange= {e => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {t('SUBSCRIBE_INVALID_EMAIL')}
                            </Form.Control.Feedback>
                            {isConfirmVisible && <div>
                                <div className='confirm-inner'>{t('SUBSCRIBE_CONFIRM')}</div>
                            </div>}
                        </Col>
                        <Col className='btn-subscribe-wrapper col-auto'>
                            <Button variant="btn-primary" type="submit">{t('SUBSCRIBE')} </Button>
                        </Col>
                    </Row>

                </Form.Group>
            </Form>

        </div>
    )
}

export default SubscribeForm