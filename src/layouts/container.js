import React from 'react'
import styled from 'styled-components'
import media from '../styles'

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 60vw;
  ${media.small`
  margin: 3rem 3rem;
  max-width: 80vw;
  `}
  ${media.tablet`
  margin: 2rem 2rem;
  max-width: 90vw;
  `}
  ${media.mobile`
  margin: 1rem 1rem;
  max-width: 100vw;
  `}
`

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
