import React from 'react'
import styled from 'styled-components'
import media from '../styles'

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 90vw;
  ${media.small`
  max-width: 90vw;
  `}
  ${media.tablet`
  max-width: 90vw;
  `}
  ${media.mobile`
  max-width: 100vw;
  `}
`

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
