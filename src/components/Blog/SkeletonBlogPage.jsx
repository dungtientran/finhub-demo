import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/skeleton.css';

const SkeletonBlogPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px'
        }}>
            <div className='title_skeleton'>
                <Skeleton />
            </div>
            <Row>
                <Col md={6}>
                    <div className='card_skeleton'>
                        <div className='image'>
                            <Skeleton />
                        </div>
                        <div className='content'>
                            <Skeleton count={3} />
                        </div>
                    </div>
                </Col>
                <Col md={6} className='r_box'>
                    <div className='r_skeleton'>
                        <div className='r_image'>
                            <Skeleton />
                        </div>
                        <div className='r_content'>
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>
                    <div className='r_skeleton'>
                        <div className='r_image'>
                            <Skeleton />
                        </div>
                        <div className='r_content'>
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>
                    <div className='r_skeleton'>
                        <div className='r_image'>
                            <Skeleton />
                        </div>
                        <div className='r_content'>
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>
                    <div className='r_skeleton'>
                        <div className='r_image'>
                            <Skeleton />
                        </div>
                        <div className='r_content'>
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='title_skeleton b_title'>
                <Skeleton />
            </div>
            <Row>
                <Col md={4}>
                    <div className='card_skeleton'>
                        <div className='b_image'>
                            <Skeleton />
                        </div>
                        <div className='content'>
                            <Skeleton count={3} />
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='card_skeleton'>
                        <div className='b_image'>
                            <Skeleton />
                        </div>
                        <div className='content'>
                            <Skeleton count={3} />
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='card_skeleton'>
                        <div className='b_image'>
                            <Skeleton />
                        </div>
                        <div className='content'>
                            <Skeleton count={3} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SkeletonBlogPage
