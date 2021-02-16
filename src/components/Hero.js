import React from 'react'
import styled from 'styled-components'
import media from '../styles'
import theme from '../styles/theme'
import ButtonLink from './ButtonLink'

const StyledHero = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  height: 20vh;
  ${media.mobile`
    flex-wrap: wrap;
  `}
  background-color: ${props => props.backgroundColor};
`

export default function Hero() {
  return (
    <StyledHero backgroundColor={theme.primary}>
      <ButtonLink href="/projects/" text="See my portfolio" />
      <ButtonLink href="/contact/" text="Get in touch" />
    </StyledHero>
  )
}
