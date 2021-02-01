import React from 'react'
import Container from '../layouts/container'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import styled from 'styled-components'
import SiteMetadata from '../components/metadata'
import gmailIcon from '../assets/icons/gmail.svg'
import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'

const ContactLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`
const ContactIcon = styled.img`
  margin: 0px 10px;
  width: 40px;
  height: 40px;
`
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`

function ContactLink({ text, icon, url }) {
  return (
    <ContactLinkContainer>
      <ContactIcon src={icon}></ContactIcon>
      <a target="_blank" rel="noreferrer" href={url}>
        {text}
      </a>
    </ContactLinkContainer>
  )
}

export default function Contact() {
  return (
    <>
      <SiteMetadata />
      <Navigation />
      <Container>
        <h1>Contact information</h1>
        <Links>
          <ContactLink
            text="oskariholopa@gmail.com"
            icon={gmailIcon}
            url={'mailto:oskariholopa@gmail.com'}
          />
          <ContactLink
            text="osholopa"
            icon={githubIcon}
            url={'https://github.com/osholopa'}
          />
          <ContactLink
            text="Oskari Holopainen"
            icon={linkedinIcon}
            url={'https://www.linkedin.com/in/oskari-holopainen-0b4995191/'}
          />
        </Links>
      </Container>
      <Footer position={'absolute'}/>
    </>
  )
}
