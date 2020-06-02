import React from "react";
import PropTypes from "prop-types";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { Helmet } from "react-helmet";

import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";

function BlogPost({ pageContext }) {
  const { frontmatter, body } = pageContext.blogPost;
  const author = frontmatter.author.childAuthorsJson;

  return (
    <>
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

      <Navbar theme="primary" />

      <Layout title={frontmatter.title} description={frontmatter.description}>
        <article>
          <div>
            <p>
              {author.name} | {frontmatter.date}
            </p>
          </div>

          <br />

          <h1>{frontmatter.title}</h1>

          <br />

          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </Layout>
    </>
  );
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    blogPost: PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        featuredImage: PropTypes.object.isRequired,
        author: PropTypes.shape({
          childAuthorsJson: PropTypes.shape({
            name: PropTypes.string.isRequired,
            twitter: PropTypes.string,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      body: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default BlogPost;
