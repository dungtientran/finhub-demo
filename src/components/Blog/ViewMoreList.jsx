import React, { Fragment, useEffect, useState } from 'react';
import CardBlog from './CardBlog';

import Slideup from '../animation/Slideup';

import '../../style/blogviewmore.css';

const ViewMoreList = ({ viewmorelist }) => {


  return (
    <Fragment>
      <div className='view_more_list'>
        {viewmorelist?.map((blog, index) => (
          <Slideup key={index}>
            <CardBlog
              heightImg='191px'
              id={blog?.id}
              image={blog?.attributes?.banner?.data?.attributes?.url}
              title={blog?.attributes?.title}
              author={blog?.attributes?.author}
              createdAt={blog?.attributes?.createdAt}
              view={blog?.attributes?.view}
            />
          </Slideup>
        ))}

      </div>
    </Fragment>
  )
}

export default ViewMoreList
