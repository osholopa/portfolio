import React from 'react'
import Container from '../layouts/container'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import SiteMetadata from '../components/metadata'
import Footer from '../components/footer'
import styled from 'styled-components'
import media from '../styles'

const Header = styled.div`
  font-size: 3rem;
  ${media.small`
    font-size: 2rem;
  `}
  ${media.tablet`
    font-size: 1.8rem;
  `}
  ${media.mobile`
    font-size: 1.5rem;
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
          Hi, my name is Oskari Holopainen. I am a{' '}
          <span style={{ color: '#2a3563' }}>web developer</span> based in
          Helsinki.
        </Header>
      </Container>
      <Footer position={'absolute'} />
    </>
  )
}
