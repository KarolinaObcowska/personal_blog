import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import Hero from './hero'

const NavLink = styled(Link)`
  color: #654062;
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0 0.5rem;
  text-decoration: none;

  &.current-page {
    color: #FDB827;
  }

  &.last-of-type {
    margin-right: 0;
  }
`

const Header = () => {
  return (
    <>
      <header
        css={css`
          border-bottom: 0.5rem solid #654062;
          display: flex;
          justify-content: space-between;
          padding: 0.75rem calc((100vw - 800px) / 2);
          height: 3.5rem;
          align-items: center
        `}
      >
        <NavLink to="/" fontWeight="bold">
          DailyJS
        </NavLink>
        <nav
          css={css`
            margin-top: 0;
          `}
        >
          <NavLink to="/about/" activeClassName="current-page">
            o mnie
          </NavLink>
          <NavLink to="/" activeClassName="current-page">
            blog
          </NavLink>
          <NavLink to="/contact/" activeClassName="current-page">
            kontakt
          </NavLink>
        </nav>
      </header>
      <Hero />
    </>
  )
}

export default Header
