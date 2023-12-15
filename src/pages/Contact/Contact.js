import React from 'react'
import { Card} from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import './Contact.css'


const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className='terms-wrapper'>
      {/* <NavbarComp btnVisible="d-none" /> */}
      <div className='container terms-container'>
        <h1 className='terms-heading'> {t('CONTACT')} </h1>
        <Card>
              <div className='privacy-content'> 
                <p className='contact-company-name'>{t('CONTACT_COMPANY_NAME')}</p>
                {/* <p className='contact-working-time'>{t('CONTACT_WORKING_TIME')}</p> */}
                <div className = "contact-block d-flex flex-row">
                  <img className='contact-phone-icon align-self-center' src="./assets/phone_icon.png" alt="tel" />
                  <div className='contact-tel align-self-center'>: +84 (0)24 7108 1868</div>
                </div>
                <div className = "contact-block d-flex flex-row">
                  <img className='contact-email-icon align-self-center' src="./assets/email_icon.png" alt="email" />
                  <div className='contact-email align-self-center'>: contact@finhub.com.vn</div>
                </div>
                <div className = "contact-block d-flex flex-row">
                  <img className='contact-address-icon align-self-center' src="./assets/address_icon.png" alt="address" />
                  <div className='contact-address align-self-center'>{t('CONTACT_ADDRESS')}</div>
                </div>
              </div>
        </Card>
      </div>
      
    </div>
  )
}

export default Contact