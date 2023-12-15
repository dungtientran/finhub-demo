import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/skeleton.css';


const SkeletonDetailBlog = () => {
    return (
        <Row>
            <Col md={8}>
                <div className='title'>
                    <Skeleton />
                </div>
                <div className='box_author_skeleton'>
                    <div className='author'>
                        <div>
                            <Skeleton circle width={41} height={41} />
                        </div>
                        <div>
                            <Skeleton />
                        </div>
                    </div>

                </div>
                <Row className='content_detail'>
                    <Skeleton count={20} />
                </Row>
            </Col>
            <Col md={4} className='r_box'>
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
    )
}

export default SkeletonDetailBlog
