import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby' //eslint-disable-line

const StyledFooter = styled.footer`
  width: 100%;
  bottom: 0;
  position: absolute;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #0f0a0aff;
  color: #f5efedff;
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>Copyright &copy; {new Date().getFullYear()} Oskari Holopainen</p>
    </StyledFooter>
  )
}
