import React from 'react'
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled('div')`
    background-image: url('/images/background.jpg');
    background-position: top 40% center;
    background-size: cover;
    height: 50vh;

    + * {
        margin-top: 0
    }

`;

const TexBox = styled('div')`
    background-image: linear-gradient(to top, #E282F44dd 2rem, #E282F4400);
    display: felx;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding: 0 calc((100vw - 550px) /2);
    width: 100%;

    h1 {
        color: #E6AF2E;
        font-size: 2.25rem;
    };

    p,
    a {
        color: #E6AF2E;
        margin-top: 0;
    };

    a {
        margin-top: 0.5rem;
    }
`

const Hero = () => {
    return (
        <ImageBackground>
            <TexBox>
                <h1>Hello &hearts;</h1>
                <p>Helo | <Link t0='/about/'>Learn about me &rarr;</Link></p>
            </TexBox>
        </ImageBackground>
    )
}

export default Hero;
