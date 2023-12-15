import React from 'react';
import CardHover from '../animation/CardHover';
import { Link } from 'react-router-dom';
import CardBlogAuthor from './CardBlogAuthor';
import CardBlogTitle from './CardBlogTitle';
import { incrementViews } from '../../ApiClient/blog';

const CardBlog = ({ image, title, author, createdAt, id, heightImg, isSmallCard = false, view }) => {

    return (
        <div className={`${isSmallCard ? 'small_card_blog' : 'card_blog'}`} style={{ flexDirection: `${!isSmallCard ? 'column' : 'row'}` }}>
            <div style={{
                width: `${isSmallCard && '42%'}`,
                overflow: 'hidden',
                height: `${heightImg}`
            }}
                className='box_sharpe_content_image'
            >
                <Link
                    to={`/blog/${id}`}
                    title={title}
                    style={{
                        height: `${heightImg}`
                    }}
                    onClick={() => incrementViews(id)}
                >
                    <img
                        src={image}
                        alt={title}
                        className=''
                    />
                </Link>
            </div>
            <div className={`${isSmallCard ? 'small_card_blog_content' : 'card_blog_content'}`}>
                <CardBlogTitle
                    id={id}
                    isSmallCard={isSmallCard}
                    title={title}
                    view={view}
                />
                <CardBlogAuthor
                    author={author}
                    createdAt={createdAt}
                    isSmallCard={isSmallCard}
                />
                {!isSmallCard && (
                    <div className='box_sharpe_content_l_text'>
                        <p>
                            {title}
                        </p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default CardBlog
