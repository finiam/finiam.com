import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        description
        keywords
        twitter
      }
    }
  }
`;

function useSiteMetadata() {
  const data = useStaticQuery(query);
  const {
    siteUrl,
    title,
    description,
    keywords,
    twitter,
  } = data.site.siteMetadata;

  return {
    siteUrl,
    title,
    description,
    keywords,
    twitter,
  };
}

export default useSiteMetadata;
