import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import BlogViewMoreBanner from '../../components/Blog/BlogViewMoreBanner';
import TitleCategory from '../../components/Blog/TitleCategory';
import ViewMoreList from '../../components/Blog/ViewMoreList';

import '../../style/blogviewmore.css';
import { useParams } from 'react-router-dom';
import { getViewMoreBlog, getViewMoreList } from '../../ApiClient/blog';
import { useEffect } from 'react';
import { useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import Slideup from '../../components/animation/Slideup';
import ViewMoreSkeleton from '../../components/Blog/ViewMoreSkeleton';
import useQueryString from '../../hook/useQueryString';
import { getQueryUrl } from '../../utils/getQueryUrl';
import { useTranslation } from 'react-i18next';

const LIMIT = 6;


const BlogViewMore = () => {
    const { id } = useParams();
    const [dataBlogViewMore, setDataBlogViewMore] = useState({});
    const [totalPage, setTotalPage] = useState(1);
    const [viewMoreList, setViewMoreList] = useState([]);
    const [totalBlog, setTotalBlog] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [dataBanner, setDataBanner] = useState();
    const [iStart, setIStart] = useState(0);
    const [iEnd, setIend] = useState(LIMIT);
    const queryString = useQueryString();
    const page = Number(queryString.page) || 1;
    const { t } = useTranslation();

    const queryURL = getQueryUrl({
        sort: "createdAt:desc",
        populate: '*'
    }, {},);

    const fetchBlogViewMore = async (id, queryURL) => {
        setLoading(true);
        const res = await getViewMoreBlog(id, queryURL);
        setDataBlogViewMore(res?.data?.attributes);
        setTotalPage(Math.floor(Number(res?.data?.attributes?.blogs?.data?.length / LIMIT)));
        setViewMoreList(res?.data?.attributes?.blogs?.data?.slice(iStart, iEnd));
        setTotalBlog(res?.data?.attributes?.blogs?.data);
        setDataBanner(res?.data?.attributes?.blogs?.data?.[0]);
        setLoading(false);
    };

    const fetchViewMoreList = async (queryURL) => {
        const res = await getViewMoreList(queryURL);
        setViewMoreList(res?.data?.attributes?.blogs?.data);
    }

    useEffect(() => {
        if (id) {
            fetchBlogViewMore(id, queryURL);
        }
    }, [id]);


    return (
        <Container style={{ minHeight: '100vh' }} className='container_main'>
            {isLoading ? (
                <ViewMoreSkeleton />
            ) : (
                <Fragment>
                    <Slideup>
                        <div className='flex_center'>
                            <h1 className='title_view_more'>{dataBlogViewMore?.name}</h1>
                        </div>
                    </Slideup>
                    <Slideup>
                        <BlogViewMoreBanner
                            category={dataBlogViewMore?.name}
                            id={dataBanner?.id}
                            image={dataBanner?.attributes?.banner?.data?.attributes?.url}
                            title={dataBanner?.attributes?.title}
                            author={dataBanner?.attributes?.author}
                            createdAt={dataBanner?.attributes?.createdAt}
                            avatarAuthor={dataBanner?.attributes?.avatarAuthor?.data?.attributes?.url}
                            view={dataBanner?.attributes?.view}
                        />
                    </Slideup>
                    <Slideup>
                        <TitleCategory
                            title={`${dataBlogViewMore?.name} ${t("NEW")}`}
                            isViewMore={false}
                        />
                    </Slideup>
                    <ViewMoreList
                        viewmorelist={viewMoreList}
                    />
                    <Pagination page={page} total={totalPage} />
                </Fragment>
            )}
        </Container>
    )
}

export default BlogViewMore
