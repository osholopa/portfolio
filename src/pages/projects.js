import React from 'react'
import Container from '../layouts/container'
import Navigation from '../components/navigation'
import SiteMetadata from '../components/metadata'
import { projects } from '../data/projects' //eslint-disable-line
import styled from 'styled-components'
import media from '../styles'
import Project from '../components/project'
import Footer from '../components/footer'

const ProjectContainer = styled.div`
  width: 100%;
  ${media.mobile`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  `}
`

export default function Projects() {
  return (
    <>
      <SiteMetadata />
      <Navigation />
      <Container>
        <h1>Portfolio</h1>
        <p>Here are some of my code projects including the more and the less useful ones. Majority of them are made either for learning purposes or just for fun.</p>
        <ProjectContainer>
          {projects.map(project => (
            <Project key={project.title} project={project} />
          ))}
        </ProjectContainer>
      </Container>
      <Footer />
    </>
  )
}
