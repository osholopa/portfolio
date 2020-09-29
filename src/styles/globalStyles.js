import { css } from '@nfront/global-styles'

const globalStyles = css`
  html {
    font-family: ${props => props.theme.fontFamily};
    background-color: ${props => props.theme.white};
  }
  button {
    font-family: ${props => props.theme.fontFamily};
    text-transform: uppercase;
    cursor: pointer;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black};
    transition-duration: 0.4s;
    border: 1px solid ${props => props.theme.black};
    border-radius: 2px;
    box-shadow: 2px 2px 3px 0px ${props => props.theme.black};
    outline: none;
  }
  body {
    margin: 0;
  }
  button:hover {
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
  a {
    color: ${props => props.theme.accent};
  }
  a:hover {
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
  a > h1:hover {
    color: ${props => props.theme.white};
  }
  .hero {
    background-color: ${props => props.theme.primary};
  }
`

export default globalStyles
