import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from '../styles'

const StyledNav = styled.div`
  ${media.mobile`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  `}
  background-color: #fafafa;
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
`

const Logo = styled.h1`
  color: black;
  margin: 0px;
  padding: 5px;
`

export default function Navigation() {
  return (
    <StyledNav>
      <Link style={{textDecoration: 'none'}} to="/">
        <Logo>osholopa.com</Logo>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/projects/">Projects</Link>
    </StyledNav>
  )
}
