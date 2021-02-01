import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from '../styles'

const NavBar = styled.div`
  height: 10vh;
  display: flex;
  background-color: #fafafa;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #f5efedff;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  ${media.tablet`
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  `}
`

const Logo = styled.h1`
  color: black;
  align-self: center;
  padding: 5px;
  text-decoration: none;
  font-size: 2rem;
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  ${media.tablet`
    display:flex;
  `}
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  ${media.tablet`
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fafafa;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? '-100%' : '0')};
  `}
`
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`

const NavLink = styled(Link)`
  margin: 1rem auto;
  text-decoration: none;
  font-weight: bold;
`

function NavLinks() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects/">Projects</NavLink>
      <NavLink to="/contact/">Contact</NavLink>
    </>
  )
}

export default function Navigation() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <NavBar>
      <Logo as={Link} to="/">
        osholopa.com
      </Logo>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavLinks />
        </Navbox>
      )}
    </NavBar>
  )
}
