import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    img1: file(relativePath: { eq: "home-whatwedo-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    img2: file(relativePath: { eq: "home-whatwedo-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    img3: file(relativePath: { eq: "home-whatwedo-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    img4: file(relativePath: { eq: "home-whatwedo-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function useImages() {
  return useStaticQuery(query);
}
