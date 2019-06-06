module.exports = {
  siteMetadata: {
    title: `Mystery Studio`,
    description: `Kick off your next, great Gatsby project with this default starter.`,
    author: `@Mystery Studio Inc.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `settings`,
        path: `${__dirname}/src/settings`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: 'gatsby-source-s3-image',
      options: {
        bucketName: 'mystery-studio',
        domain: 'oss-cn-beijing.aliyuncs.com', // [optional] Not necessary to define for AWS S3; defaults to `s3.amazonaws.com`
        protocol: 'http', // [optional] Default to `https`.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
