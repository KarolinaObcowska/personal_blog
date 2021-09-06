import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const index = () => {
    return (
        <Layout>
            <h1>Hello</h1>
            <Link to='/about'>Go to about</Link>
        </Layout>
    )
}

export default index
