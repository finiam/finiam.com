import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/useSiteMetadata";

function SEO({ title, description, keywords }) {
  const {
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
  } = useSiteMetadata();

  return (
    <Helmet>
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
    </Helmet>
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
