function makeRelative(string) {
  return string.replace(/^\/{0,1}data\//, "../");
}

// Replace absolute paths from Forestry with relative paths
module.exports = ({ node }) => {
  /* eslint-disable no-param-reassign */
  if (node.photo) {
    node.photo = makeRelative(node.photo);
  }

  if (node.frontmatter) {
    node.frontmatter.featuredImage = makeRelative(
      node.frontmatter.featuredImage,
    );

    node.frontmatter.author = makeRelative(node.frontmatter.author);
  }
  /* eslint-enable no-param-reassign */
};
