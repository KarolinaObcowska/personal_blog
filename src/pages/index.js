import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/postPreview';

const index = () => {
    const posts = usePosts();
    return (
        <Layout>
            <h1>Hello</h1>
            <Link to='/about'>Go to about</Link>
            <h2>Read my blog</h2>
            {
                posts.map(post => (
                    <PostPreview key={post.slug} post={post} />
                ))
            }
        </Layout>
    )
}

export default index
