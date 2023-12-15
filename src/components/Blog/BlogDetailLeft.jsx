import React, { useEffect, useState } from 'react';
import Avatar from '../Avatar/Avatar';
import '../../style/blogdetail.css';
import moment from 'moment';
import Slideup from '../animation/Slideup';
import '../../style/blogdetail.css';

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { useParams } from 'react-router-dom';

import fb_icon from '../../assets/social_icon/fb_icon.svg';
import tw_icon from '../../assets/social_icon/tw_icon.svg';
import lin_icon from '../../assets/social_icon/lin_icon.svg';

import Breadcrumb from 'react-bootstrap/Breadcrumb';


const BlogDetailLeft = ({ title, avatarAuthor, author, createat, content }) => {
    const { id } = useParams();

    const url = `${process.env.REACT_APP_SHARE_BUTTON_URL}/blog/${id}`

    return (
        <div className='container_detail_l'>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/blog">
                        Blog
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        {title}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Slideup>
                <h2 className='text_hover'>
                    {title}
                </h2>
            </Slideup>
            <Slideup>
                <div className='box_author_social'>
                    <div className='box_author'>
                        <Avatar
                            url={avatarAuthor}
                            w='41px'
                            h='41px'
                        />
                        <div className='box_author_name'>
                            <span>{author}</span>
                            <span className='mx-1'>-</span>
                            <span className='text-grey-text'>{moment(createat).format('DD/MM/YYYY')}</span>
                        </div>
                    </div>
                    <div className='btn_social_group'>
                        <FacebookShareButton
                            url={url}
                        >
                            <img
                                src={fb_icon}
                                alt=""
                            />

                        </FacebookShareButton>
                        <TwitterShareButton
                            url={url}
                        >
                            <img src={tw_icon} alt="" />

                        </TwitterShareButton>
                        <LinkedinShareButton
                            url={url}

                        >
                            <img src={lin_icon} alt="" />

                        </LinkedinShareButton>

                    </div>
                </div>
            </Slideup>

            {/* content */}
            <Slideup>
                <div
                    dangerouslySetInnerHTML={{
                        __html: content
                    }}
                    className='detail_content'
                >
                    {/* {content} */}

                </div>
            </Slideup>
        </div>
    )
}

export default BlogDetailLeft
