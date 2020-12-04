import React from 'react'
import styled from 'styled-components'
import media from '../styles'

const StyledContainer = styled.div`
  margin-left: 6rem;
  margin-right: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  ${media.small`
  margin: 3rem 3rem;
  `}
  ${media.tablet`
  margin: 2rem 2 rem;
  `}
  ${media.mobile`
  margin: 1rem 1rem;
  `}
`

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
