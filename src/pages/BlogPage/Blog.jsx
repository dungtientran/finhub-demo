import React, { useEffect, useState, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import BlogBoxShape from '../../components/Blog/BlogBoxShape';
import Pagination from '../../components/Pagination/Pagination';
import BlogList from '../../components/Blog/BlogList';
import SkeletonBlogPage from '../../components/Blog/SkeletonBlogPage';

import { getBlog } from '../../ApiClient/blog';
import { getQueryUrl } from '../../utils/getQueryUrl';
import useQueryString from '../../hook/useQueryString';

import 'react-loading-skeleton/dist/skeleton.css';

const LIMIT = 5;

const BlogPage = () => {
    const [blogData, setBlogData] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [lang, setLang] = useState(JSON.parse(localStorage.getItem("language")));

    const queryString = useQueryString();
    const page = Number(queryString.page) || 1;

    const queryURL = getQueryUrl(
        {
            sort: "createdAt:desc",
            populate: '*',
        },
        {
            page: page,
            pageSize: LIMIT
        },
        lang
    );

    const fetchBlog = async (queryURL) => {
        setLoading(true);
        const res = await getBlog(queryURL);
        setBlogData(res?.data);
        setTotalPage(res?.meta?.pagination?.pageCount);
        setLoading(false);
        localStorage.setItem('init_language', JSON.stringify(lang));
    }

    useEffect(() => {
        fetchBlog(queryURL);
    }, [queryURL]);


// console.log("blogData_________________________", blogData);
    return (
        <Container
            className='container_main'
        >
            {loading ? (
                <SkeletonBlogPage />
            ) : (
                <Fragment>
                    <BlogList
                        blogData={blogData}
                    />
                    <Pagination
                        total={totalPage}
                        page={page}
                    />
                </Fragment>
            )}
        </Container>
    )
}

export default BlogPage
