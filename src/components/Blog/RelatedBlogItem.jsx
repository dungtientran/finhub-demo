import React from 'react';
import '../../style/blogdetail.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Slideup from '../animation/Slideup';
import { incrementViews } from "../../ApiClient/blog";

const RelatedBlogItem = ({ banner, title, author, createAt, id, view }) => {
    const language = JSON.parse(localStorage.getItem("language")) || "vi";

    const handleInitLenguage = () => {
        localStorage.setItem('init_language', JSON.stringify(language));
        incrementViews(id);
    };

    return (
        <Slideup >
            <div className='related_blog_box'>
                <div
                    className='related_blog_box_img'
                    title={title}
                >
                    <img
                        src={banner}
                        alt={title}
                    />
                </div>
                <div className='related_blog_box_title'>
                    <Link
                        to={`/blog/${id}`}
                        onClick={handleInitLenguage}
                    >
                        <p className='text_hover'>
                            {title}
                        </p>
                    </Link>
                    <div className='box_author_name related_blog_author'>
                        <span>{author}</span>
                        <span className='mx-1'>-</span>
                        <span>{moment(createAt).format('DD/MM/YYYY')}</span>
                    </div>
                </div>
            </div>
        </Slideup>
    )
}

export default RelatedBlogItem
