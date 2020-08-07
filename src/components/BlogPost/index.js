import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import WidthLimiter from "root/components/WidthLimiter";
import Navbar from "root/components/Navbar";

import BlogPostProps from "./BlogPostProps";
import BlogPostSEO from "./BlogPostSEO";

import "prismjs/themes/prism-solarizedlight.css";

const Article = styled.article`
  img {
    max-width: 100%;
  }
`;

function BlogPost({ pageContext }) {
  const { frontmatter, body } = pageContext.blogPost;
  const author = frontmatter.author.childAuthorsJson;

  return (
    <>
      <BlogPostSEO frontmatter={frontmatter} />

      <Navbar />

      <WidthLimiter>
        <Article>
          <div>
            <p>
              {author.name} | {frontmatter.date}
            </p>
          </div>

          <br />

          <h1>{frontmatter.title}</h1>

          <br />

          <MDXRenderer>{body}</MDXRenderer>
        </Article>
      </WidthLimiter>
    </>
  );
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    blogPost: PropTypes.shape(BlogPostProps).isRequired,
  }).isRequired,
};

export default BlogPost;
