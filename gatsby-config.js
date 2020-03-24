module.exports = {
  siteMetadata: {
    title: `Marco Triches`,
    description: `Guida ambientale`,
    author: `lcsrbn`
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`,

    // require("dotenv").config({
    //    path: `.env.${process.env.NODE_ENV}`,
    // }),
     {
      resolve: `gatsby-source-prismic`,
      options: {
      repositoryName: `marcotriches`,
      accessToken: process.env.API_KEY,      	
     // pages: [{ 
      //type: 'Escursione',          // TypeName from prismic
     // match: `/escursioni/${slug}`,   // Pages will be generated under this pattern
      //path: '/escursione',        // Placeholder page for unpublished documents
      //component: require.resolve('./src/templates/escursioni.js'),
      //}]
    },
   },
  ]
};
