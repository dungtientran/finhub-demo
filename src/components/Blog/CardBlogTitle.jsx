import React from 'react'
import { Link } from 'react-router-dom'
import { incrementViews } from '../../ApiClient/blog'

const CardBlogTitle = ({ title, id, isSmallCard = false, view }) => {
  return (
    <div >
      <Link
        to={`/blog/${id}`}
        className='box_sharpe_content_title l_title text_hover'
        style={{fontSize: `${isSmallCard ? '16px' : '20px'}`}}
        onClick={() => incrementViews(id)}
      >
        {title}
      </Link>
    </div>
  )
}

export default CardBlogTitle
