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
        <p>
          email:{' '}
          <a href="mailto:oskariholopa@gmail.com">oskariholopa@gmail.com</a>
        </p>
        <p>
          github:{' '}
          <a
            href="https://github.com/osholopa"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/osholopa
          </a>
        </p>
        <p>
          linkedin:{' '}
          <a
            href="https://www.linkedin.com/in/oskari-holopainen-0b4995191/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/oskari-holopainen-0b4995191/
          </a>
        </p>
      </Container>
    </>
  )
}
