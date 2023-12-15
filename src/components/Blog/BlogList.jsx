import React from 'react';
import TitleCategory from './TitleCategory';
import { Fragment } from 'react';
import BoxCardBlog from './BoxCardBlog';

const BlogList = ({ blogData }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '60px'
    }}>
      {blogData?.map((item, index) => (
        <div key={index}>
          {item?.attributes?.blogs?.data?.length > 0 && (
            <Fragment>
              <TitleCategory
                title={item?.attributes?.name}
                id={item?.id}
              />
              <BoxCardBlog
                dataBoxCardBlog={item?.attributes?.blogs?.data}
              />
            </Fragment>
          )}
        </div>
      ))}
    </div>
  )
}

export default BlogList
