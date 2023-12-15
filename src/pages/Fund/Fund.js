import React from 'react'
import { Table } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import ThreeStepSection from "../../components/ThreeStepSection/ThreeStepSection";
import ReadySection from "../../components/ReadySection/ReadySection";

import './Fund.css'


const Fund = () => {
    const { t } = useTranslation();
    return (
        <div className='fund-wrapper'>
            <div className='hero-section' style={{ backgroundImage: `url(${'./assets/Hero_bgr.png'})` }}>
                <div className='container'>
                    <div className='row' style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className='col-md-12 col-lg-6'>
                            <div>
                                <h1 className='hero-heading'>{t('FUND_HERO_HEADING')}</h1>
                                <div className="fund-adv-box d-flex flex-row">
                                    <img className='fund-adv-icon align-self-center' src="./assets/Fund_adv_1.png" alt="Fund advantage icon 1" />
                                    <div className='fund-subtitle align-self-center'>{t('FUND_HERO_SUBTITLE_1')}</div>
                                </div>

                                <div className="fund-adv-box d-flex flex-row">
                                    <img className='fund-adv-icon align-self-center' src="./assets/Fund_adv_2.png" alt="Fund advantage icon 2" />
                                    <div className='fund-subtitle align-self-center'>{t('FUND_HERO_SUBTITLE_2')}</div>
                                </div>
                                <div className="fund-adv-box d-flex flex-row">
                                    <img className='fund-adv-icon align-self-center' src="./assets/Fund_adv_3.png" alt="Fund advantage icon 3" />
                                    <div className='fund-subtitle align-self-center'>{t('FUND_HERO_SUBTITLE_3')}</div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='hero-image-wrapper'>
                                <img className='hero-image' src="./assets/iPhone_fund.png" alt="iPhone Fund" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fund-intro'>
                <div className='container feature-container'>
                    <h1 className='feature-heading'> {t('FUND_HEADING_1')} </h1>
                    <p className='fund-definition'>{t('FUND_DEFINITION')}</p>
                    <h1 className='feature-heading'> {t('FUND_HEADING_2')} </h1>

                    {/* <div class="row"> */}
                    <div class="col-sm-12 fun-table">
                        <Table className='table'>
                            <thead>
                                <tr className='fund-table-header col-3'>
                                    <th className='fund-table-text col-3'>{t('FUND_TABLE_1_1')}</th>
                                    <th className='fund-table-text col-3'>{t('FUND_TABLE_1_2')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='fund-table-text col-3'>{t('FUND_TABLE_2_1')}</td>
                                    <td className='fund-table-text col-3'>{t('FUND_TABLE_2_2')}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div class="col-sm-12 fun-table">
                        <Table className='table'>
                            <thead>
                                <tr className='fund-table-header col-3'>
                                    <th className='fund-table-text col-3'>{t('FUND_TABLE_1_3')}</th>
                                    <th className='fund-table-text col-3'>{t('FUND_TABLE_1_4')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='fund-table-text col-3'>{t('FUND_TABLE_2_3')}</td>
                                    <td className='fund-table-text col-3'>{t('FUND_TABLE_2_4')}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <div className='fund-intro'>
                <div className='container feature-container'>
                    <h1 className='feature-heading'> {t('FUND_HEADING_3')} </h1>
                    <p className='fund-definition'>
                        <span className='fund-name title-linear'> {t('FUND_TYPE_NAME_1')}</span>
                        {t('FUND_TYPE_1')}
                    </p>
                    <p className='fund-definition'>
                        <span className='fund-name title-linear'> {t('FUND_TYPE_NAME_2')}</span>
                        {t('FUND_TYPE_2')}
                    </p>
                    <p className='fund-definition'>
                        <span className='fund-name title-linear'> {t('FUND_TYPE_NAME_3')}</span>
                        {t('FUND_TYPE_3')}
                    </p>
                    <p className='fund-definition'>
                        <span className='fund-name title-linear'> {t('FUND_TYPE_NAME_4')}</span>
                        {t('FUND_TYPE_4')}
                    </p>
                </div>
            </div>
            <div className='fund-intro'>
                <div className='container feature-container'>
                    <h1 className='feature-heading'> {t('FUND_ADVANTAGE')} </h1>
                    <p className='fund-definition'>
                        <span className='fund-name title-linear'> {t('FUND_ADVANTAGE_NAME_1')}</span>
                        {t('FUND_ADVANTAGE_1')}
                    </p>
                    <p className='fund-definition'>
                        <span className='fund-name title-linear'> {t('FUND_ADVANTAGE_NAME_2')}</span>
                        {t('FUND_ADVANTAGE_2')}
                    </p>
                    <p className='fund-definition'>
                        <span className='fund-name title-linear'> {t('FUND_ADVANTAGE_NAME_3')}</span>
                        {t('FUND_ADVANTAGE_3')}
                    </p>
                    <p className='fund-definition'>
                        <span className='fund-name title-linear'> {t('FUND_ADVANTAGE_NAME_4')}</span>
                        {t('FUND_ADVANTAGE_4')}
                    </p>
                    <p className='fund-definition'>
                        <span className='fund-name title-linear'> {t('FUND_ADVANTAGE_NAME_5')}</span>
                        {t('FUND_ADVANTAGE_5')}
                    </p>
                </div>
            </div>
            <ThreeStepSection />
            <ReadySection />
        </div>
    )
}

export default Fund