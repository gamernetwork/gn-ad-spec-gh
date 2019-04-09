module.exports = {
  siteMetadata: {
    title: `Gamer Network | Ad Specs`,
    description: `Gamer Network Advertising Specification`,
    author: `@gamernetwork`,
  },
  plugins: [
    // for querying the filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'markdown-pages',
      },
    },
    // transform md
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // use smart punctuation
        plugins: [`gatsby-remark-smartypants`],
      },
    },
    // for inserting stuff into html head
    `gatsby-plugin-react-helmet`,
    // image transformations
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
