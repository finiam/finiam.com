const ROOT_PATH = process.cwd();

const plugins = [
  "gatsby-plugin-preact",
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
        {
          resolve: "gatsby-remark-copy-relative-linked-files",
          options: {
            ignoreFileExtensions: [".md", ".jpg", ".webp", ".png"],
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 824,
            linkImagesToOriginal: false,
            backgroundColor: "transparent",
            withWebp: false,
            quality: 75,
            showCaptions: true,
          },
        },
        "gatsby-remark-prismjs",
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
