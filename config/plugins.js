const ROOT_PATH = process.cwd();

const plugins = [
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${ROOT_PATH}/src/assets/`,
      name: "assets",
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${ROOT_PATH}/data`,
      name: "cms",
    },
  },
  "gatsby-transformer-json",
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: "noopener",
          },
        },
        "gatsby-remark-relative-images",
        "gatsby-remark-unwrap-images",
        "gatsby-remark-copy-relative-linked-files",
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 824,
            linkImagesToOriginal: false,
            withWebp: true,
            quality: 75,
            showCaptions: true,
          },
        },
      ],
    },
  },
  "gatsby-plugin-emotion",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "assets",
      path: `${ROOT_PATH}/src/assets/`,
    },
  },
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-plugin-root-import",
    options: {
      root: `${ROOT_PATH}/src`,
    },
  },
  "gatsby-plugin-sitemap",
];

module.exports = plugins;
