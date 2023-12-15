import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { Row, Col, Button } from 'react-bootstrap'
import CurrencyInput from 'react-currency-input-field';
import CurrencyFormat from 'react-currency-format'
import { ResponsiveContainer, CartesianGrid, ComposedChart, XAxis, YAxis, Area, Tooltip, Label, Line } from 'recharts'

import './SimSection.css'
import { simData } from './SimData';
import Slideup from '../animation/Slideup';
import ZoomIn from '../animation/Zoomin';
import Fadein from '../animation/FadeIn';

function SimSection() {
    const { t, i18n } = useTranslation();

    const [initValue, setInitValue] = useState(100000000);
    const [monthlyValue, setMonthlyValue] = useState(10000000);
    const [saving, setSaving] = useState(1907882215);
    const [mfMin, setMfMin] = useState(2259521033);
    const [mfMax, setMfMax] = useState(4019760998);
    const [activeYear, setActiveYear] = useState(10);
    const [chartData, setChartData] = useState(simData);
    const i = 0.07;
    const i_mf_min = 0.1;
    const i_mf_max = 0.2;
    const c = 12;
    const n = 10;


    const UpdateChartData = () => {
        let p = parseInt(initValue);
        let r = parseInt(monthlyValue);

        for (let j = 0; j < simData.length; j++) {
            simData[j].saving = p * Math.pow(1 + i / c, j * c) + (r * (Math.pow(1 + i / c, j * c) - 1)) / (i / c);
            simData[j].mf[0] = p * Math.pow(1 + i_mf_min / c, j * c) + (r * (Math.pow(1 + i_mf_min / c, j * c) - 1)) / (i_mf_min / c);
            simData[j].mf[1] = p * Math.pow(1 + i_mf_max / c, j * c) + (r * (Math.pow(1 + i_mf_max / c, j * c) - 1)) / (i_mf_max / c);
        }

        setChartData(simData);
    }

    const InterestCalculation = (y) => {
        let p = parseInt(initValue);
        let r = parseInt(monthlyValue);
        let savingValue = Math.floor(p * Math.pow(1 + i / c, y * c) + (r * (Math.pow(1 + i / c, y * c) - 1)) / (i / c));
        let mfMinValue = Math.floor(p * Math.pow(1 + i_mf_min / c, y * c) + (r * (Math.pow(1 + i_mf_min / c, y * c) - 1)) / (i_mf_min / c));
        let mfMaxValue = Math.floor(p * Math.pow(1 + i_mf_max / c, y * c) + (r * (Math.pow(1 + i_mf_max / c, y * c) - 1)) / (i_mf_max / c));
        setSaving(savingValue);
        setMfMin(mfMinValue);
        setMfMax(mfMaxValue);
        UpdateChartData();
    }

    const onClickHandle = () => {
        setActiveYear(n);
        InterestCalculation(n);
    }

    const updateInitValue = (value) => {
        setInitValue(value);
    }

    const updateMonthlyValue = (value) => {
        setMonthlyValue(value);
    }

    const DataFormater = (number) => {
        if (number > 1000000000) {
            return (number / 1000000000).toString() + 'B';
        } else if (number > 1000000) {
            return (number / 1000000).toString() + 'M';
        } else if (number > 1000) {
            return (number / 1000).toString() + 'K';
        } else {
            return number.toString();
        }
    }

    const handleMouseMove = (e) => {
        let { activeLabel } = e;
        if ((activeLabel > 0) && (activeLabel !== activeYear)) {
            setActiveYear(activeLabel);
            InterestCalculation(activeLabel);
        }
    };

    return (
        <div className='sim-section'>
            <div className='container'>
                <Slideup>
                    <h1 className='sim-heading display_medium'> {t('SIM_HEADING')} </h1>

                </Slideup>
                <Row className='sim-body'>
                    <Col className='sim-input' lg='3'>
                        <form className="sim-input-form">
                            <div className="form-group">
                                <Fadein><h4 className='input-heading text_large'>{t('SIM_INIT_INVEST')} </h4></Fadein>
                                <ZoomIn>
                                    <CurrencyInput
                                        className='form-control text_intro'
                                        allowDecimals={false}
                                        allowNegativeValue={false}
                                        placeholder="VND 100,000,000"
                                        prefix="VND "
                                        maxLength="10"
                                        onValueChange={updateInitValue}
                                    />
                                </ZoomIn>
                            </div>
                            <div className="form-group">
                                <Fadein>
                                    <h4 className='input-heading text_large'>{t('SIM_MONTHLY_INVEST')}</h4>
                                </Fadein>
                                <ZoomIn>
                                    <CurrencyInput
                                        className='form-control text_intro'
                                        allowDecimals={false}
                                        allowNegativeValue={false}
                                        placeholder="VND 10,000,000"
                                        prefix="VND "
                                        maxLength="10"
                                        onValueChange={updateMonthlyValue}
                                    />
                                </ZoomIn>
                            </div>
                            {/* <Button variant="btn-primary" className="btn-simulate" onClick={onClickHandle}>{t('SIM_SIMULATE')}</Button> */}
                        </form>
                    </Col>
                    <Col className='sim-graph' lg='8'>
                        <ZoomIn>
                            <h5 className='graph-heading'>
                                <span className='text_large'>{t('SIM_DURING')} </span>
                                <span className='text_large'>{activeYear} </span>
                                <span className='text_large'>{i18n.language === "en" ? (activeYear === 1 ? t('SIM_YEAR') : t('SIM_YEARS')) : t('SIM_YEAR')}</span>
                                <span className='text_large'>, {t('SIM_YOU_CAN_HAVE')}</span>
                            </h5>
                        </ZoomIn>
                        <Row className='result'>
                            <div className='col-sm-4 deposit-saving'>
                                <Fadein>
                                    <div className='text_medium'>{t('SIM_DEPOSIT_SAVING')}</div>
                                    <h4 className='text-primary text-underline'>
                                        <CurrencyFormat value={saving} displayType={'text'} thousandSeparator={true} />
                                        <span> VND</span>
                                    </h4>
                                </Fadein>
                            </div>
                            <div className='col-sm-8 mutal-funds'>
                                <Fadein>
                                    <div className='text_medium'>{t('SIM_MUTUAL_FUNDS')}</div>
                                    <div className='mutal-funds-box '>
                                        <h4 className='title-linear text-underline'>
                                            <CurrencyFormat value={mfMin} displayType={'text'} thousandSeparator={true} />
                                            <i> - </i>
                                            <CurrencyFormat value={mfMax} displayType={'text'} thousandSeparator={true} />
                                            <span className=''> VND</span>
                                        </h4>
                                    </div>
                                </Fadein>
                            </div>
                        </Row>
                        <ZoomIn>
                            <ResponsiveContainer width="100%" height={300}>
                                <ComposedChart
                                    width={250}
                                    height={250}
                                    data={chartData}
                                    margin={{ top: 30, bottom: 30 }}
                                    onMouseMove={handleMouseMove}
                                >
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                    <XAxis dataKey="year">
                                        <Label value={t('SIM_YEAR')} position="bottom" />
                                    </XAxis>
                                    <YAxis tickFormatter={DataFormater} />
                                    <Area dataKey="mf" stroke="#1870F5" fill="#0DA6C2" />
                                    <Line dataKey="saving" stroke="black" strokeWidth="2" dot={false} />
                                    <Tooltip cursor={false} contentStyle={{ visibility: 'hidden' }} />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </ZoomIn>
                        <div className=' text_small text-primary'>{t('SIM_NOTE')}</div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SimSection