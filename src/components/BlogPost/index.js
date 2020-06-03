import React from "react";
import PropTypes from "prop-types";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";

import BlogPostProps from "./BlogPostProps";
import BlogPostSEO from "./BlogPostSEO";

function BlogPost({ pageContext }) {
  const { frontmatter, body } = pageContext.blogPost;
  const author = frontmatter.author.childAuthorsJson;

  return (
    <>
      <BlogPostSEO frontmatter={frontmatter} />

      <Navbar />

      <Layout>
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
    blogPost: PropTypes.shape(BlogPostProps).isRequired,
  }).isRequired,
};

export default BlogPost;