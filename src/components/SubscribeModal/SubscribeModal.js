import React, { forwardRef, useState, useImperativeHandle } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import '../common/common.css'

const SubscribeModal = forwardRef((props,ref) => {
    const { t } = useTranslation();
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClose = () => {
        setShow(false);
    }

    useImperativeHandle(ref, () => ({
        handleShow() {
            setShow(true);
        },
    }));

    const handleSubscribe = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        //setShow(false);
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('SUBSCRIBE_TITLE')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} >
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>{t('SUBSCRIBE_LABEL_FIRSTNAME')}</Form.Label>
                            <Form.Control required type="text" onChange={setFirstName} />
                            <Form.Control.Feedback type="invalid">
                                {t('SUBSCRIBE_INVALID_FIRSTNAME')}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2"
                        >
                            <Form.Label>{t('SUBSCRIBE_LABEL_LASTNAME')}</Form.Label>
                            <Form.Control required type="text" onChange={setLastName} />
                            <Form.Control.Feedback type="invalid">
                                {t('SUBSCRIBE_INVALID_LASTNAME')}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>{t('SUBSCRIBE_LABEL_EMAIL')}</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                autoFocus
                                onChange={setEmail}
                            />
                            <Form.Control.Feedback type="invalid">
                                {t('SUBSCRIBE_INVALID_EMAIL')}
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btn-light my-2" type="submit" onClick={handleSubscribe}>
                        {t('SUBSCRIBE')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
})

export default SubscribeModal