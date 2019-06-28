require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `1 product a week 😬`,
    author: `Calum Moore`,
    description: `Join me as I take on the challenge of building and launching 1 product every week! This week, I'm building Webframe!`,
    siteUrl: `https://1productaweek.com`,
    image: 'https://1productaweek.com/social.png',
    social: {
      twitter: `calummoore`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCT2lsptYf4WvBsCNBqqHAgQ'], // 'UCT2lsptYf4WvBsCNBqqHAgQ',
        apiKey: process.env.YOUTUBE_KEY,
        maxVideos: 50, // Defaults to 50
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/products`,
        name: `products`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 661,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-140920867-1',
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `1 product a week`,
        short_name: `1PAW`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    'gatsby-redirect-from',
    'gatsby-plugin-meta-redirect',
  ],
}
