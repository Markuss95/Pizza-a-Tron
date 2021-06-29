/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `babel-plugin-styled-components`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
  flags: {
    DEV_SSR: false,
  },
}
