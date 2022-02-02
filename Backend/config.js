module.exports = {
  //pathPrefix: '/',
  siteMetadata: {
    title: 'KitchenManagement',
    description: 'Kitchen Managing site',
  },
  plugins: [
    {
      resolve: `Kitchen Managing`,
      options: {
        name: 'Kitcjen Managing default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icons/dancer.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
}
