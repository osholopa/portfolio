import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../assets/favicon.png'

export default function SiteMetadata({ children }) {
  return (
    <div>
      <Helmet
        title={'osholopa'}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          {
            rel: 'stylesheet',
            href:
              'https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap',
          },
        ]}
      />

      {children}
    </div>
  )
}
