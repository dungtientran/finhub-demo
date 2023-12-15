import React from 'react'
import Slideup from '../animation/Slideup'
import { Col, Row } from 'react-bootstrap'
import CardHover from '../animation/CardHover'
import { Link } from 'react-router-dom'
import moment from 'moment'
import CardBlog from './CardBlog'

const ListSmallCard = ({ dataListSmallCard }) => {
    return (
        <div className='list_small_card_blog'>
            {dataListSmallCard?.map((item, index) => (
                <Slideup key={index}>
                    <CardBlog
                        id={item?.id}
                        image={item?.attributes?.banner?.data?.attributes?.url}
                        title={item?.attributes?.title}
                        author={item?.attributes?.author}
                        createdAt={item?.attributes?.createdAt}
                        isSmallCard={true}
                        heightImg={'102px'}
                        view={item?.attributes?.view}
                    />
                </Slideup>
            ))}
        </div>
    )
}

export default ListSmallCard
