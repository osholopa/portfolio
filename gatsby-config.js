/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `osholopa`,
    description: `A portfolio about osholopa`,
    author: `Oskari Holopainen`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-global-styles`,
      options: {
        pathToConfigModule: `src/styles/GlobalStyleComponent`,
        props: {
          theme: `src/styles/theme`,
          other: {
            light: true,
          },
        },
      },
    },
  ],
}
