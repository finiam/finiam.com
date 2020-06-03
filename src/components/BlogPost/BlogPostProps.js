import PropTypes from "prop-types";

const BlogPostProps = {
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
};

export default BlogPostProps;
