import React from 'react'
import { Card, Tabs, Tab } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import NavbarComp from '../../components/Navbar/NavbarComp'
import FooterSection from '../../components/FooterSection/FooterSection'
import './Terms.css'


const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className='terms-wrapper'>
      {/* <NavbarComp btnVisible="d-none" /> */}
      <div className='container terms-container'>
        <h1 className='terms-heading'> {t('TERMS_HEADING')} </h1>
        <Card>
          <Tabs
            defaultActiveKey="first"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="first" title={t('TERMS_USERS')}>
              <div className='terms-users-content'>
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
            </Tab>
            <Tab eventKey="second" title={t('TERMS_OTHERS')}>
              <div className='terms-users-content'>
                <p className='terms-users-content-head'>{t('TERMS_OTHERS_TITLE')}</p>
                <p>{t('TERMS_OTHERS_CONTENT')}</p>
                <p className='terms-users-content-head'>{t('TERMS_OTHERS_S1_TITLE')}</p>
                <p>{t('TERMS_OTHERS_S1_CONTENT')}</p>
                <p className='terms-users-content-head'>{t('TERMS_OTHERS_S2_TITLE_SUB_1')}</p>
                <p className='terms-users-bullet-point'>{t('TERMS_OTHERS_S2_CONTENT_SUB_1')}</p>
                <p className='terms-users-content-head'>{t('TERMS_OTHERS_S2_TITLE_SUB_2')}</p>
                <p className='terms-users-bullet-point'>{t('TERMS_OTHERS_S2_CONTENT_SUB_2')}</p>
                <p className='terms-users-content-head'>{t('TERMS_OTHERS_S2_TITLE_SUB_3')}</p>
                <p>{t('TERMS_OTHERS_S2_CONTENT_SUB_3_1')}</p>
                <p className='terms-users-bullet-point'>{t('TERMS_OTHERS_S2_CONTENT_SUB_3_2')}</p>
                <p>{t('TERMS_OTHERS_S2_CONTENT_SUB_3_3')}</p>
                <p className='terms-users-content-head'>{t('TERMS_OTHERS_S2_TITLE_SUB_4')}</p>
                <p>{t('TERMS_OTHERS_S2_CONTENT_SUB_4')}</p>
              </div>

            </Tab>
          </Tabs>
        </Card>
      </div>
      {/* <FooterSection /> */}

    </div>
  )
}

export default Terms