import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// import NavbarComp from '../../Navbar/NavbarComp'
import './Signup.css'
// import UserPool from '../../../userpool';

function Signup() {
    const { t } = useTranslation();

    const [eye, seteye] = useState(false);
    const [password, setpassword] = useState("password");
    const [type, settype] = useState(false);

    const eyeToogle = () => {
        if (password === "password") {
            setpassword("text");
            seteye(false);
            settype(true);
        }
        else {
            setpassword("password");
            seteye(true);
            settype(false);
        }
    }

    const signUpHandle =()=>{
        // UserPool.signUp()

    }

    return (
        <div className='signup-wrapper'>
            {/* <NavbarComp btnVisible="d-none" /> */}
            <div className='card-wrapper'>
                <div className='signup-card card col-lg-4'>
                    <Form className='signup-form' onSubmit={signUpHandle}>
                        <h3 className="mb-4">{t('SIGN_UP')} </h3>
                        <Form.Group className="mb-3">
                            <label className="mb-1">{t('FIRST_NAME')}</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder={t('SIGNUP_ENTER_FIRST_NAME')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <label className="mb-1">{t('LAST_NAME')}</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder={t('SIGNUP_ENTER_LAST_NAME')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <label className="mb-1">{t('EMAIL')}</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder={t('LOGIN_ENTER_EMAIL')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <label className="mb-1">{t('PASSWORD')}</label>
                            <div className='input-group'>
                                <input
                                    type={password}
                                    className="form-control group-password"
                                    placeholder={t('LOGIN_ENTER_PASSWORD')}
                                />
                                {/* <span><i className="fa fa-lock"></i></span>  */}
                                <span className="input-group-text password-toogle-icon" onClick={eyeToogle}><i> {eye ? <FaEye /> : <FaEyeSlash />}</i></span>
                            </div>
                        </Form.Group>
                        <div className="mb-4">
                            <p className="forgot-password text-right">
                                {t('LOGIN_FORGOT')} <a href="/">{t('LOGIN_PASSWORD')}</a>
                            </p>
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="btn btn-signup" >
                                {t('SIGN_UP')}
                            </button>
                        </div>
                        <div>
                            <p className="create-account text-right">
                                {t('SIGNUP_HAVE_ACCOUNT')} <a href="/login">{t('LOGIN')}</a>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Signup