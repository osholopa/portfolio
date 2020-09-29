import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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
  padding: 5px;
`

export default function Hero() {
  return (
    <StyledHero className="hero">
      <Link to="/projects/">
        <Button className="btn">See my portfolio</Button>
      </Link>
      <Link to="/contact/">
        <Button className="btn">Get in touch</Button>
      </Link>
    </StyledHero>
  )
}
