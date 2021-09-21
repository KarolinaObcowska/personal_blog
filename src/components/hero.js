import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

import { Link, graphql, useStaticQuery } from 'gatsby'

const ImageBackground = styled(BackgroundImage)`
  background-position: top 40% center;
  background-size: cover;
  height: 10vh;

  + * {
    margin-top: 0;
  }
`

const TexBox = styled('div')`
  background-image: linear-gradient(to top, #E282F44dd 2rem, #E282F4400);
  display: felx;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 800px) / 2);
  width: 100%;

  h1 {
    color: #e6af2e;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #e6af2e;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "background.jpg" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`);

  return (
    <ImageBackground Tag='section' fluid={image.sharp.fluid}>
      <TexBox></TexBox>
    </ImageBackground>
  )
}

export default Hero
