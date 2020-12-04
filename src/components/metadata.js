import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../assets/icons/favicon.png'
import { useStaticQuery, graphql } from 'gatsby'

export default function SiteMetadata({ children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <div>
      <Helmet
        lang="en"
        title={'osholopa.com'}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          {
            rel: 'stylesheet',
            href:
              'https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap',
          },
        ]}
        meta={[
          {
            name: `description`,
            content: site.siteMetadata.description,
          },
          {
            property: `og:title`,
            content: site.siteMetadata.title,
          },
          {
            property: `og:type`,
            content: `website`,
          },
        ]}
      />

      {children}
    </div>
  )
}
