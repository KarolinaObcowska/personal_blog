import React from 'react'
import { Link } from 'gatsby'

const index = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Link to='/about'>Go to about</Link>
        </div>
    )
}

export default index
