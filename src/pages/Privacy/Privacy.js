import React from 'react'
import { Card} from 'react-bootstrap'
import { useTranslation } from "react-i18next";

// import NavbarComp from '../../Navbar/NavbarComp'
// import FooterSection from '../../FooterSection/FooterSection'
import './Privacy.css'


const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className='terms-wrapper'>
      {/* <NavbarComp btnVisible="d-none" /> */}
      <div className='container terms-container'>
        <h1 className='terms-heading'> {t('PRIVACY_HEADING')} </h1>
        <Card>
              <div className='privacy-content'> 
                <p className='terms-users-content-head'>{t('TERMS_USERS_S1_TITLE')}</p>
                <p>{t('TERMS_USERS_S1_CONTENT')}</p>
                <p className='terms-users-content-head'>{t('TERMS_USERS_S2_TITLE')}</p>
                <p>{t('TERMS_USERS_S2_CONTENT')}</p>
                <p className='terms-users-content-head'>{t('TERMS_USERS_S3_TITLE')}</p>
                <p>{t('TERMS_USERS_S3_CONTENT')}</p>
                <p className='terms-users-content-head'>{t('TERMS_USERS_S3_CONTENT_SUB_TITLE_1')}</p>
                <p className='terms-users-bullet-point'>{t('TERMS_USERS_S3_CONTENT_SUB_1')}</p>
                <p className='terms-users-content-head'>{t('TERMS_USERS_S3_CONTENT_SUB_TITLE_2')}</p>
                <p>{t('TERMS_USERS_S3_CONTENT_SUB_2_1')}</p>
                <p className='terms-users-bullet-point'>{t('TERMS_USERS_S3_CONTENT_SUB_2_2')}</p>
                <p className='terms-users-content-head'>{t('TERMS_USERS_S3_CONTENT_SUB_TITLE_3')}</p>
                <p>{t('TERMS_USERS_S3_CONTENT_SUB_3')}</p>
                <p className='terms-users-content-head'>{t('TERMS_USERS_S3_CONTENT_SUB_TITLE_4')}</p>
                <p>{t('TERMS_USERS_S3_CONTENT_SUB_4')}</p>

                <p className='terms-users-content-head'>{t('TERMS_USERS_S4_TITLE')}</p>
                <p className='terms-users-bullet-point'>{t('TERMS_USERS_S4_CONTENT')}</p>
                <p className='terms-users-content-head'>{t('TERMS_USERS_S5_TITLE')}</p>
                <p>{t('TERMS_USERS_S5_CONTENT')}</p>
              </div>
        </Card>
      </div>
      {/* <FooterSection/> */}
      
    </div>
  )
}

export default Privacy