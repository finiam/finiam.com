const ROOT_PATH = process.cwd();

const plugins = [
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Finiam",
      short_name: "Finiam",
      start_url: "/",
      background_color: "#4D00E5",
      theme_color: "#4D00E5",
      display: "browser",
      icon: "src/assets/favicon.svg",
      include_favicon: false,
    },
  },
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
      path: `${ROOT_PATH}/data/media`,
      name: "cms_media",
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${ROOT_PATH}/data/authors`,
      name: "cms_authors",
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${ROOT_PATH}/data/posts`,
      name: "cms_posts",
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
        {
          resolve: `gatsby-remark-relative-images`,
          options: {
            staticFolderName: ".",
          },
        },
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
  {
    resolve: "gatsby-plugin-emotion",
    options: {
      autoLabel: process.env.NODE_ENV !== "production",
      labelFormat: "[filename]-[local]",
    },
  },
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
