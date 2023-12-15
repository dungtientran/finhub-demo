import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div>
            <Link to='/'>
                <img
                    src="/assets/Logo.png"
                    alt="FinHub Logo"
                    className='logo'
                />
            </Link>
        </div>
    )
}

export default Logo
