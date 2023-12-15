import React, { useEffect, useState } from 'react';
import '../../style/blogdetail.css';
import RelatedBlogItem from './RelatedBlogItem';
import { useTranslation } from 'react-i18next';

const RelatedBlog = ({ relatedBlogData }) => {
    const [showMore, setShowMore] = useState(false);
    const [listrelatedBlog, setListrelatedBlog] = useState(undefined);
    const { t } = useTranslation();
    useEffect(() => {
        if (showMore && relatedBlogData) {
            const r = relatedBlogData.slice(0, 12);
            setListrelatedBlog(r)
        }
        else {
            const r = relatedBlogData.slice(0, 4);
            setListrelatedBlog(r)
        }
    }, [showMore, relatedBlogData]);

    return (
        <div className='container_related_blog'>
            <div className='related_blog_title'>
                <h4>{t("RELATED_ARTICLES")}</h4>
            </div>
            <div className='related_blog_content'>
                {listrelatedBlog && listrelatedBlog?.map((item, index) => (
                    <RelatedBlogItem
                        key={index}
                        id={item?.id}
                        author={item?.attributes.author}
                        banner={item?.attributes?.banner?.data?.attributes?.url}
                        createAt={item?.attributes?.createdAt}
                        title={item?.attributes?.title}
                        view={item?.attributes?.view}
                    />
                ))}
            </div>
            <div className='btn_show_more'>
                <button
                    type='button'
                    onClick={() => setShowMore(!showMore)}
                    className={`text_hover ${showMore ? 'btn_show_more_active' : 'btn_show_less'}`}
                >
                    {showMore ? 'Show less' : 'Show more'}
                </button>
            </div>
        </div>
    )
}

export default RelatedBlog
