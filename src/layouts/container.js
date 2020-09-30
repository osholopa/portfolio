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
  min-height: 62vh;
  position: relative;
  padding-bottom: 10rem;
  ${media.tablet`
    margin-left: 3rem;
    margin-right: 3rem;
  `}
`

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
