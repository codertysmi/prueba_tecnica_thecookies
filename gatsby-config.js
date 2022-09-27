module.exports = {
  siteMetadata: {
    title: `Prueba técnica`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-plugin-breakpoints", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/",

    },

    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: './src/images/icon.png',
  }}]
};