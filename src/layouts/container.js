import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 3rem auto;
  max-width: 90vw;
`

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
