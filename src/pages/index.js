import React from 'react'
import Container from '../layouts/container'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import SiteMetadata from '../components/metadata'
import Footer from '../components/footer'

export default function App() {
  return (
    <>
      <SiteMetadata />
      <Navigation />
      <Hero />
      <Container>
        <h1>
          Hi, my name is Oskari Holopainen. I am a{' '}
          <span style={{ color: '#2a3563' }}>web developer</span> based in
          Helsinki.
        </h1>
      </Container>
      <Footer />
    </>
  )
}
