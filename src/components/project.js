import React from 'react'
import Container from '../layouts/container' //eslint-disable-line
import Navigation from '../components/navigation' //eslint-disable-line
import SiteMetadata from '../components/metadata' //eslint-disable-line
import styled from 'styled-components' //eslint-disable-line
import media from '../styles' //eslint-disable-line

const ProjectCard = styled.div`
  margin: 0.5rem auto;
  max-width: 90vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${media.tablet`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`
const CardImg = styled.img`
  ${media.mobile`
    max-width: 80vw;
  `};
  ${media.tablet`
    max-width: 80vw;
  `};
  max-width: 40vw;
`

const Button = styled.button`
  margin: 5px;
  padding: 6px;
`

const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  ${media.mobile`
    max-width: 80vw;
  `};
  ${media.tablet`
    max-width: 80vw;
  `};
  max-width: 20vw;
`

const ButtonContainer = styled.div`
  display: flex;
  max-width: 20vw;
  flex-direction: column;
  align-items: center;
  ${media.mobile`
    max-width: 80vw;
    flex-direction: row;
  `};
  ${media.tablet`
    max-width: 80vw;
    flex-direction: row;
  `};
`

export default function Project({ project }) {
  return (
    <>
      <h2>{project.title}</h2>
      <ProjectCard>
        <CardImg src={project.img} alt="" />
        <CardContent>
          <p>{project.description}</p>
          <ButtonContainer>
            {project.links.map(link => (
              <a key={link.url} href={link.url}>
                <Button className="btn">{link.label}</Button>
              </a>
            ))}
          </ButtonContainer>
        </CardContent>
      </ProjectCard>
    </>
  )
}
