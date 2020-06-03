import React from "react";
import { Helmet } from "react-helmet";
import SEO from "root/components/SEO";

import BlogPostProps from "./BlogPostProps";

function BlogPostSEO({ frontmatter }) {
  const author = frontmatter.author.childAuthorsJson;

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Helmet>
        <meta name="author" property="og:author" content={author.name} />
        <meta
          name="description"
          property="og:description"
          content={frontmatter.description}
        />
        <meta
          name="image"
          property="og:image"
          content={`http://finiam.com${frontmatter.featuredImage.image.fluid.src}`}
        />
        <meta
          name="image"
          property="og:image:secure_url"
          content={`https://finiam.com${frontmatter.featuredImage.image.fluid.src}`}
        />
        <meta name="title" property="og:title" content={frontmatter.title} />
        <meta name="type" property="og:type" content="article" />
        <meta
          name="url"
          property="og:url"
          content={`https://finiam.com${frontmatter.path}`}
        />
        <meta
          name="twitter:card"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:creator"
          property="twitter:creator"
          content={author.twitter}
        />
        <meta
          name="twitter:description"
          property="twitter:description"
          content={frontmatter.description}
        />
        <meta
          name="twitter:image"
          property="twitter:image"
          content={`https://finiam.com${frontmatter.featuredImage.image.fluid.src}`}
        />
        <meta
          name="twitter:image:alt"
          property="twitter:image:alt"
          content={`${frontmatter.title} preview`}
        />
        <meta name="twitter:site" property="twitter:site" content="@Finiam" />
        <meta
          name="twitter:title"
          property="twitter:title"
          content={frontmatter.title}
        />
        <meta
          name="twitter:url"
          property="twitter:url"
          content={`https://finiam.com${frontmatter.path}`}
        />
      </Helmet>
    </>
  );
}

BlogPostSEO.propTypes = BlogPostProps.frontmatter;

export default BlogPostSEO;
