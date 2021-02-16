import React from 'react'
import Container from '../layouts/container'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import SiteMetadata from '../components/SiteMetadata'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import styled from 'styled-components'
import media from '../styles'
import { projects } from '../data/projects' //eslint-disable-line

const Header = styled.div`
  font-size: 1.7rem;
  ${media.small`
    font-size: 1.5rem;
  `}
  ${media.tablet`
    font-size: 1.25rem;
  `}
  ${media.mobile`
    font-size: 1.2rem;
  `}
`

const StyledApp = styled.div`
  width: 40% ${media.small`
   
  `} ${media.tablet`
    
  `} ${media.mobile`
    
  `};
`

export default function App() {
  return (
    <StyledApp>
      <SiteMetadata />
      <Navigation />
      <Hero />
      <Container>
        <Header>
          Hi, my name is Oskari Holopainen. I'm a{' '}
          <span style={{ color: '#2a3563' }}>web developer</span> based in
          Helsinki.
        </Header>
        <Slider slides={projects} />
      </Container>
      <Footer />
    </StyledApp>
  )
}
