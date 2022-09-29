module.exports = {
  siteMetadata: {
    title: "SCRIPTEX 123",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Courgette"],
        display: "swap",
      },
    },
  ],
};
