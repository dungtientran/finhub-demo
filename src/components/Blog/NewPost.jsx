import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CardHover from '../animation/CardHover';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useState } from 'react';
import { useEffect } from 'react';
import Slideup from '../animation/Slideup';
import TitleCategory from './TitleCategory';

import Skeleton from 'react-loading-skeleton';

const NewPost = ({ data }) => {
    const [dataNewPost, setDataNewPost] = useState([]);
    useEffect(() => {
        setDataNewPost(data);
    }, [data]);
    return (
        <div className='box_sharpe_container' style={{
            marginTop:'26px'
        }}>
            <TitleCategory 
                title='Bài viết mới nhất'
            />
            <Row>
                {dataNewPost?.map((item, index) => (
                    <Col md={4} className='new_post_box' key={index}>
                        <Slideup>
                            <CardHover>
                                <Link to={`/blog/${item?.id}`}>
                                    <div
                                        className='box_sharpe_content_image new_post_image'
                                        title={item?.attributes?.title}
                                    >
                                        <img
                                            src={`${process.env.REACT_APP_CMS_URL}${item?.attributes?.banner?.data?.attributes?.url}`}
                                            alt={item?.attributes?.title}
                                            className='w-full h-full object-contain'
                                        />
                                    </div>
                                </Link>
                            </CardHover>
                            <div>
                                <Link to={`/blog/${dataNewPost?.[0]?.id}`} className='box_sharpe_content_title l_title text_hover'>
                                    {item?.attributes?.title?.length > 70 ? item?.attributes?.title.slice(0, 70) + '...' : item?.attributes?.title}
                                </Link>
                            </div>
                            <div className='box_sharpe_content_l_author'>
                                <span>{item?.attributes?.author}</span>
                                <span>-</span>
                                <span>{moment(item?.attributes?.createdAt).format('MM/DD/YYYY')}</span>
                            </div>
                            <div className='box_sharpe_content_l_text'>
                                <p>
                                    {item?.attributes?.title}
                                </p>
                            </div>
                        </Slideup>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default NewPost
