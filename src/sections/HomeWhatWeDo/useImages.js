import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    img1: file(relativePath: { eq: "home-whatwedo-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    img2: file(relativePath: { eq: "home-whatwedo-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    img3: file(relativePath: { eq: "home-whatwedo-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    img4: file(relativePath: { eq: "home-whatwedo-4.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default function useImages() {
  return useStaticQuery(query);
}
