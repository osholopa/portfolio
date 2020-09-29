import React from 'react'
import Container from '../layouts/container'
import Navigation from '../components/navigation'
import SiteMetadata from '../components/metadata'

export default function Contact() {
  return (
    <>
      <SiteMetadata />
      <Navigation />
      <Container>
        <h1>Contact information</h1>
        <p>email: oskariholopa@gmail.com</p>
        <p>github: https://github.com/osholopa</p>
        <p>
          linkedin: https://www.linkedin.com/in/oskari-holopainen-0b4995191/
        </p>
      </Container>
    </>
  )
}
