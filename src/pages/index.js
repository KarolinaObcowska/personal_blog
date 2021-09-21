import React from 'react'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/postPreview'
import Insta from '../components/insta'

const index = () => {
  const posts = usePosts()
  return (
    <Layout>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
      {/* <Insta /> */}
    </Layout>
  )
}

export default index
