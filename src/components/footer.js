import React from 'react'
import styled from 'styled-components'
import media from '../styles'

const StyledFooter = styled.footer`
  width: 100%;
  bottom: 0;
  position: ${props => props.position === 'absolute' ? 'absolute': 'inherit'};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #0f0a0aff;
  color: #f5efedff;
  ${media.small`
    padding: 1.5rem;
  `}
  ${media.tablet`
    padding: 1rem;
  `}
  ${media.mobile`
    padding: 0.5rem;
  `}
`

export default function Footer({position}) {
  return (
    <StyledFooter position={position}>
      <p>&copy; {new Date().getFullYear()} Oskari Holopainen</p>
    </StyledFooter>
  )
}
