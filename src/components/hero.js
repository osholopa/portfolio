import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import media from '../styles'

const StyledHero = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  height: 15rem;
`

const Button = styled.button`
  margin: 5px;
  padding: 10px;
  font-size: 1.7rem;
  ${media.small`
    font-size: 1.5rem;
  `}
  ${media.tablet`
    font-size: 1.2rem;
  `}
  ${media.mobile`
    font-size: 1rem;
  `}
  
`

export default function Hero() {
  return (
    <StyledHero className="hero">
      <Link style={{hover: 'none'}} to="/projects/">
        <Button className="btn">See my portfolio</Button>
      </Link>
      <Link to="/contact/">
        <Button className="btn">Get in touch</Button>
      </Link>
    </StyledHero>
  )
}
