import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import siteMetadata from "cms/siteMetadata.json";
import favicon from "root/assets/favicon.svg";

function SEO({ title, description, keywords }) {
  const {
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
  } = siteMetadata;

  return (
    <Head>
      <title>{title || siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={keywords || siteKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title || siteTitle} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta property="og:image" content="logo.png" />
      <link rel="icon" href={favicon} type="image/svg+xml" />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  keywords: null,
};

export default SEO;
