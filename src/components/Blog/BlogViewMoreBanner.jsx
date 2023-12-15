import React from 'react';
import '../../style/blogviewmore.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { incrementViews } from '../../ApiClient/blog';

const BlogViewMoreBanner = ({ category, title, avatarAuthor, author, createdAt, image, id, view }) => {
    return (
        <div className='container_banner_viewmore'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='box_text_banner'>
                <p className='category_banner bg-linear'>{category}</p>
                <Link
                    to={`/blog/${id}`}
                    className='title_banner'
                    title={title}
                    onClick={() => incrementViews(id)}
                >
                    {title?.length > 65 ? `${title?.slice(0, 65)}...` : title}
                </Link>
                <div className='box_author_banner'>
                    <div className='avatar'>
                        <img
                            src={avatarAuthor}
                            alt={author}
                        />
                    </div>
                    <p className='text_name_author'>
                        {author}
                    </p>
                    <p className='text_createAt'>
                        {moment(createdAt).format('MM/DD/YYYY')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogViewMoreBanner
