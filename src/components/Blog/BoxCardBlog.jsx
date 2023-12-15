import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Slideup from '../animation/Slideup';
import CardBlog from './CardBlog';
import ListSmallCard from './ListSmallCard';
import { useState } from 'react';
import { useEffect } from 'react';

const BoxCardBlog = ({ dataBoxCardBlog }) => {
    const [latestPost, setLatestPost] = useState({});
    const [dataListSmallCard, setDataListSmallCard] = useState([]);
    useEffect(() => {
        if (dataBoxCardBlog) {
            setLatestPost(dataBoxCardBlog?.[0]);
            setDataListSmallCard(dataBoxCardBlog?.slice(1, 5))
        }
    }, [dataBoxCardBlog]);

    console.log("latestPost__________________", latestPost);

    return (
        <Row className='box_card_blog'>
            <Col md={6} className='box_sharpe_l'>
                <Slideup>
                    <CardBlog
                        heightImg='290px'
                        id={latestPost?.id}
                        image={latestPost?.attributes?.banner?.data?.attributes?.url}
                        title={latestPost?.attributes?.title}
                        author={latestPost?.attributes?.author}
                        createdAt={latestPost?.attributes?.createdAt}
                        view={latestPost?.attributes?.view}
                    />
                </Slideup>
            </Col>

            <Col md={6} className='box_sharpe_r'>
                <div className='box_sharpe_content_r'>
                    <ListSmallCard
                        dataListSmallCard={dataListSmallCard}
                    />
                </div>
            </Col>
        </Row>
    )
}

export default BoxCardBlog
