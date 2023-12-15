import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogDetailLeft from '../../components/Blog/BlogDetailLeft';
import RelatedBlog from '../../components/Blog/BlogDetailRight';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slideup from '../../components/animation/Slideup';
import SkeletonDetailBlog from '../../components/Blog/SkeletonDetailBlog';

const BlogDetail = () => {
  const { id } = useParams();
  const [blogDetailData, setBlogDetailData] = useState({});
  const [relatedBlog, setRelatedBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const init_language = JSON.parse(localStorage.getItem("init_language")) || "vi";
  const language = JSON.parse(localStorage.getItem("language")) || "vi";

  const fetchDetail = async () => {
    setIsLoading(true);
    const res = await axios.get(`${process.env.REACT_APP_CMS_URL}/api/blogs/${id}?populate=*`);
    const resRelatedBlog = await axios.get(`${process.env.REACT_APP_CMS_URL}/api/blogs?populate=*&locale=${language}`);
    if (init_language === language) {
      setBlogDetailData(res.data?.data?.attributes);
    } else {
      setBlogDetailData(res.data?.data?.attributes?.localizations?.data?.[0]?.attributes);
    }
    // localStorage.setItem("init_language", JSON.stringify(language)) 
    setRelatedBlog(resRelatedBlog?.data?.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchDetail();
  }, [id]);
  // console.log("blogDetailData_________________________", relatedBlog);


  // console.log("init_language_____________________________", init_language);
  // console.log("language_____________________________", language);

  return (
    <Container className='container_main'>
      {isLoading ? (
        <SkeletonDetailBlog />
      ) : (
        <Row>
          <Col md={8}>
            <BlogDetailLeft
              title={blogDetailData?.title}
              author={blogDetailData?.author}
              createat={blogDetailData?.createdAt}
              avatarAuthor={blogDetailData?.avatarAuthor?.data?.attributes?.url}
              content={blogDetailData?.content}
            />
          </Col>
          <Col md={4}>
            <RelatedBlog
              relatedBlogData={relatedBlog}
            />
          </Col>
        </Row>
      )}
    </Container>

  )
}

export default BlogDetail
