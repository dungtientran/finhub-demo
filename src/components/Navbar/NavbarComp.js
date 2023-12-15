import React, { useEffect, useRef, useState } from 'react'
import { GrClose, GrLanguage, GrMenu } from "react-icons/gr";
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './NavbarComp.css';
import SubscribeModal from '../SubscribeModal/SubscribeModal.js'
import { LocaleContext } from '../context/LocaleContext.js'


export default function NavbarComp({ btnVisible }) {
    const [isHeaderShadow, setHeaderShadow] = useState(false);


    const { t, i18n } = useTranslation();
    // const { locale,setLanguage } = React.useContext(LocaleContext);
    const changeLanguageHandler = (languageValue) => {
        i18n.changeLanguage(languageValue);
        localStorage.setItem('language', JSON.stringify(languageValue));

        window.location.reload();
    }

    const showState = useRef(null);

    const NavbarLanguage = (
        <i className="langbar">
            {/* <span className="language-icon"><GrLanguage /></span> */}
            {t('LANGUAGE')}
        </i>
    )

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setHeaderShadow(true);
            } else {
                setHeaderShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='top-header'>

            </div>
            <Navbar
                expand="lg"
                className={isHeaderShadow && 'shadow-sm'}
            >
                <Container className='continer_nav'>
                    <Navbar.Brand href="/" >
                        <div
                            className='logo'
                        >
                            <img
                                src="/assets/Logo.png"
                                alt="FinHub Logo"
                            // className='logo'
                            />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsDefault"
                        aria-controls="navbarsDefault"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="close"><GrClose /></span>
                        <span className="menu"><GrMenu /></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse
                        id="navbarsDefault"
                    >
                        <Nav
                            // className="d-flex justify-content-around ms-lg-3"
                            // style={{ width: "100%" }}
                            className='nav_container'
                        >
                            <NavDropdown
                                title={t('PRODUCT')}
                                id="basic-nav-dropdown"
                                className="text-nowrap title_medium"
                            >
                                <NavDropdown.Item
                                    href="fund"
                                >
                                    {t('MUTUAL_FUNDS')}
                                </NavDropdown.Item>
                            </NavDropdown>
                            {/* <Nav.Link className="text-nowrap title_medium" href="home">{t('ROBO_ADVISOR')}</Nav.Link> */}
                            {/* <Nav.Link className="text-nowrap title_medium" href="home">{t('SUPPORT')}</Nav.Link> */}
                            <Nav.Link className="text-nowrap title_medium" href="/knowledge">{t('KNOWLEDGE')}</Nav.Link>
                            <Nav.Link className="text-nowrap title_medium" href="about">{t('ABOUT')}</Nav.Link>
                            <Nav.Link className="text-nowrap title_medium" href="/blog">Blog</Nav.Link>
                            {/* <NavDropdown href="contact" title={t('ABOUT')} icon={<GrLanguage />}> */}
                            {/* <NavDropdown.Item href="home">{t('COMPANY')}</NavDropdown.Item> */}
                            {/* <NavDropdown.Item href="home">{t('PRESS')}</NavDropdown.Item> */}
                            {/* <NavDropdown.Item href="home">{t('CAREER')}</NavDropdown.Item> */}
                            {/* <NavDropdown.Item href="contact">{t('CONTACT')}</NavDropdown.Item> */}
                            {/* </NavDropdown> */}
                            {/* <span className="language"><GrLanguage /></span> */}

                            {/*                             <div className="d-flex justify-content-end">
                                <Link to="/login" className='ms-2 me-3'>
                                    <Button variant="btn-light my-2 my-lg-0 " className= {`signin ${btnVisible}`}>{t('LOGIN')}</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button variant="btn-primary my-2 my-lg-0" className={`signup ${btnVisible}`}>{t('SIGN_UP')}</Button>
                                </Link>
                            </div> */}
                            {/* <SubscribeModal ref={showState} /> */}
                            <NavDropdown
                                title={NavbarLanguage}
                            >
                                <NavDropdown.Item onClick={() => changeLanguageHandler("en")}>
                                    <img
                                        className='flag-icon'
                                        src="./assets/UK_flag.png"
                                        alt="UK Flag"
                                    />
                                    English</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguageHandler("vi")}>
                                    <img
                                        className='flag-icon'
                                        src="./assets/Vietnam_flag.png"
                                        alt="VN Flag"
                                    />
                                    Tiếng Việt</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button
                            variant='primary'
                            className="text-nowrap btn-start"
                        //  onClick={() => showState.current.handleShow()}
                        >
                            Get Started
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
