import React from 'react';
import moment from 'moment';

const CardBlogAuthor = ({ author, createdAt, isSmallCard = false }) => {
  return (
    <div className='box_sharpe_content_l_author'>
      <span style={{ fontSize: `${isSmallCard ? '14px' : '16px'}`, color: '#21233D' }}>{author}</span>
      <span style={{ fontSize: `${isSmallCard ? '14px' : '16px'}` }}>-</span>
      <span style={{ fontSize: `${isSmallCard ? '14px' : '16px'}` }}>{moment(createdAt).format('MM/DD/YYYY')}</span>
    </div>
  )
}

export default CardBlogAuthor
