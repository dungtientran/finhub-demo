import React from 'react'

const Avatar = ({ url, alt, w, h }) => {
    return (
        <div
            style={{
                width: w,
                height: h
            }}
            className='avatar'
        >
            <img
                src={url}
                alt={alt}
            />
        </div>
    )
}

export default Avatar
