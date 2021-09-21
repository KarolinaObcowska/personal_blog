import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import ReadLink from './read-link'
import Image from 'gatsby-image';

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #654062;
        margin-top: 0.75rem;
        padding-bottom: 1rem;
        display: flex;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        css={css`
          * {
            margin-top: 0;
          }
        `}
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
    </Link>
      <div>
        <h3>
          <Link to={post.slug} css={css`
          text-decoration: none;
          color: #FDB827;
        `}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>Czytaj &rarr;</ReadLink>
      </div>
    </article>
  )
}

export default PostPreview
