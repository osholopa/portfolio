import React from 'react'
import Container from '../layouts/container'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import SiteMetadata from '../components/metadata'
import Footer from '../components/footer'
import styled from 'styled-components'
import media from '../styles'

const Header = styled.div`
  font-size: 1.7rem;
  ${media.small`
    font-size: 1.5rem;
  `}
  ${media.tablet`
    font-size: 1.25rem;
  `}
  ${media.mobile`
    font-size: 1rem;
  `}
`

export default function App() {
  return (
    <>
      <SiteMetadata />
      <Navigation />
      <Hero />
      <Container>
        <Header>
          Hi, my name is Oskari Holopainen. I'm a{' '}
          <span style={{ color: '#2a3563' }}>web developer</span> based in
          Helsinki.
        </Header>
      </Container>
      <Footer position={'absolute'} />
    </>
  )
}
