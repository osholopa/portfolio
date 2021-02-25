import React from 'react'
import Container from '../layouts/container' //eslint-disable-line
import Navigation from './Navigation' //eslint-disable-line
import SiteMetadata from './SiteMetadata' //eslint-disable-line
import styled from 'styled-components' //eslint-disable-line
import media from '../styles' //eslint-disable-line
import { icons } from '../data/icons' //eslint-disable-line

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
  background-color: #fbfbfb;
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
const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  padding: 5px;
  background-color: lightgray;
`

const LinkContainer = styled.div`
  display: flex;
  max-width: 20vw;
  flex-direction: column;
  flex-wrap: wrap;
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
      <h2
        id={project.title.replace(/\s+/g, '-').toLowerCase()}
        name={project.title.replace(/\s+/g, '-').toLowerCase()}
      >
        {project.title}
      </h2>
      <ProjectCard>
        <CardImg src={project.img} alt="" />
        <CardContent>
          <p>{project.description}</p>
          <LinkContainer>
            {project.links.map(link => (
              <a
                key={link.url}
                target="_blank"
                rel="noopener noreferrer"
                href={link.url}
              >
                <Button className="btn">{link.label}</Button>
              </a>
            ))}
          </LinkContainer>
          <TechContainer>
            {project.tech.map((tech, index) => {
              const iconObject = icons.find(
                iconObject => iconObject.label === tech
              )
              return (
                <div style={{ margin: '0px 10px' }} key={index}>
                  {iconObject.icon}
                  <p style={{ display: 'inline' }}>{iconObject.label}</p>
                </div>
              )
            })}
          </TechContainer>
        </CardContent>
      </ProjectCard>
    </>
  )
}
