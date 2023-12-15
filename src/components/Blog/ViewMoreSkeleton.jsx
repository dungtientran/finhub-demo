import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/skeleton.css';

const ViewMoreSkeleton = () => {
    return (
        <Row>
            <div className='title_skeleton'>
                <Skeleton />
            </div>
            <div className='banner_skeleton'>
                <Skeleton />
            </div>
            <div className='title_skeleton b_title'>
                <Skeleton />
            </div>
            <Row className='b_title'>
                <Col md={4} className=''>
                    <div className='card_skeleton'>
                        <div className='b_image'>
                            <Skeleton />
                        </div>
                        <div className='content'>
                            <Skeleton count={3} />
                        </div>
                    </div>
                </Col>
                <Col md={4} className=''>
                    <div className='card_skeleton'>
                        <div className='b_image'>
                            <Skeleton />
                        </div>
                        <div className='content'>
                            <Skeleton count={3} />
                        </div>
                    </div>
                </Col>
                <Col md={4} className=''>
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
            <Row className='b_title'>
                <Col md={4} className=''>
                    <div className='card_skeleton'>
                        <div className='b_image'>
                            <Skeleton />
                        </div>
                        <div className='content'>
                            <Skeleton count={3} />
                        </div>
                    </div>
                </Col>
                <Col md={4} className=''>
                    <div className='card_skeleton'>
                        <div className='b_image'>
                            <Skeleton />
                        </div>
                        <div className='content'>
                            <Skeleton count={3} />
                        </div>
                    </div>
                </Col>
                <Col md={4} className=''>
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
        </Row>
    )
}

export default ViewMoreSkeleton
