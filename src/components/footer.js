import React from 'react'
import styled from 'styled-components'
import media from '../styles'

const StyledFooter = styled.footer`
  width: 100%;
  bottom: 0;
  position: ${props => props.position === 'absolute' ? 'absolute': 'inherit'};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #2f2f33;
  color: #f5efedff;
  font-size: 0.8rem;
  ${media.small`
    padding: 0.375rem;
  `}
  ${media.tablet`
    padding: 0;
  `}
  ${media.mobile`
    padding: 0;
  `}
`

export default function Footer({position}) {
  return (
    <StyledFooter position={position}>
      <p>&copy; {new Date().getFullYear()} Oskari Holopainen</p>
    </StyledFooter>
  )
}
