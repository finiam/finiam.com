import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            path
            author {
              childAuthorsJson {
                name
                twitter
                position
              }
            }
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              image: childImageSharp {
                fluid(maxWidth: 1440, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Preview = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    padding-right: 1rem;
  }
`;

function Blog({
  data: {
    allMdx: { edges },
  },
}) {
  return (
    <>
      <Navbar />

      <Layout>
        {edges.map(({ node }) => {
          const author = node.frontmatter.author.childAuthorsJson;
          const { title, path } = node.frontmatter;

          return (
            <Preview key={node.id}>
              <p>{title}</p>
              <span>|</span>
              <p>{author.name}</p>
              <span>|</span>
              <Link to={`/blog/articles/${path}`}>Link</Link>
            </Preview>
          );
        })}
      </Layout>
    </>
  );
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({ edges: PropTypes.arrayOf(PropTypes.any) }),
  }).isRequired,
};

export default Blog;
