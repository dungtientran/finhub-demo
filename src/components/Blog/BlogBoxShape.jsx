import React, { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../style/blog.css';
import { Link } from 'react-router-dom';
import Slideup from '../animation/Slideup';
import moment from 'moment';
import CardHover from '../animation/CardHover';

const BlogBoxShape = ({ title, dataBlogBoxShape }) => {
    const [data, setData] = useState([])
    // console.log('dataBlogBoxShape', dataBlogBoxShape);
    // console.log('dataBlogBoxShape?.data?.[0]?.id', dataBlogBoxShape?.data?.[0]);
    useEffect(() => {
        if (dataBlogBoxShape) {
            setData(dataBlogBoxShape.reverse())
        }
    }, [dataBlogBoxShape]);

    return (
        <div className='box_sharpe_container'>
            {
                dataBlogBoxShape?.length > 0
                &&
                (
                    <Fragment>
                        <div className='title_category'>
                            <h2>
                                {title}
                            </h2>
                            <p className='view_more'>
                                View more &gt;
                            </p>
                        </div>
                        <Row>
                            <Col md={6} className='box_sharpe_l'>
                                <Slideup>
                                    <div className='box_sharpe_content_l'>
                                        <CardHover>
                                            <Link to={`/blog/${dataBlogBoxShape?.[0]?.id}`}>
                                                <div
                                                    className='box_sharpe_content_image l_image'
                                                    title={dataBlogBoxShape?.[0]?.attributes?.title}
                                                >
                                                    <img
                                                        src={`${process.env.REACT_APP_CMS_URL}${dataBlogBoxShape?.[0]?.attributes?.banner?.data?.attributes?.url}`}
                                                        alt={dataBlogBoxShape?.[0]?.attributes?.title}
                                                        className='w-full h-full object-contain'
                                                    />
                                                </div>
                                            </Link>
                                        </CardHover>

                                        <div>
                                            <Link to={`/blog/${dataBlogBoxShape?.[0]?.id}`} className='box_sharpe_content_title l_title text_hover'>
                                                {dataBlogBoxShape?.[0]?.attributes?.title}
                                            </Link>
                                        </div>
                                        <div className='box_sharpe_content_l_author'>
                                            <span>{dataBlogBoxShape?.[0]?.attributes?.author}</span>
                                            <span>-</span>
                                            <span>{moment(dataBlogBoxShape?.[0]?.attributes?.createdAt).format('MM/DD/YYYY')}</span>
                                        </div>
                                        <div className='box_sharpe_content_l_text'>
                                            <p>
                                            {dataBlogBoxShape?.[0]?.attributes?.title}
                                            </p>
                                        </div>
                                    </div>
                                </Slideup>
                            </Col>

                            <Col md={6} className='box_sharpe_r'>
                                <div className='box_sharpe_content_r'>
                                    {dataBlogBoxShape?.slice(1)?.map((item, index) => (
                                        <Slideup key={index}>
                                            <Row >
                                                <Col sm={5}>
                                                    <CardHover>
                                                        <div
                                                            className='box_sharpe_content_image r_image'
                                                            title={item?.attributes?.title}
                                                        >
                                                            <Link to={`/blog/${item?.id}`}>
                                                                <img
                                                                    src={`${process.env.REACT_APP_CMS_URL}${item?.attributes?.banner?.data?.attributes?.url}`}
                                                                    alt={item?.attributes?.title}
                                                                />
                                                            </Link>
                                                        </div>
                                                    </CardHover>
                                                </Col>
                                                <Col sm={7} className='r_conter_text'>
                                                    <Link
                                                        to={`/blog/${item?.id}`}
                                                        className='box_sharpe_content_title r_title text_hover'
                                                    >
                                                        {item?.attributes?.title}
                                                    </Link>
                                                    <p className='box_sharpe_content_l_author r_author'>
                                                        <span>{item?.attributes?.author}</span>
                                                        <span>-</span>
                                                        <span>{moment(item?.attributes?.createdAt).format("DD/MM/YYYY")}</span>
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Slideup>
                                    ))}

                                </div>
                            </Col>
                        </Row>
                    </Fragment>
                )
            }
        </div>
    )
}

export default BlogBoxShape
