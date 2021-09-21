import React from 'react'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/postPreview'

const index = () => {
  const posts = usePosts()
  return (
    <Layout>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default index
