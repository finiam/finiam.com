import React, { useState } from "react";
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from "gatsby";
import StaticF from "root/components/StaticF";
import { columnsToPx, spacing } from "root/styleutils/settings";
import styled from "styled-components";
import mediaQueries from "root/styleutils/mediaQueries";

import Circles from "./Circles";

const query = graphql`
  query {
    file(relativePath: { eq: "jumping-dude.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    left: file(relativePath: { eq: "jumping-dude-left.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    right: file(relativePath: { eq: "jumping-dude-right.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

const ElasticFContainer = styled.div`
  position: relative;
  z-index: 1;

  width: ${columnsToPx(15)};
  margin-bottom: ${spacing(12)};
  margin-left: auto;

  ${mediaQueries.tablet} {
    width: 100%;
    margin-left: 0;
  }

  ${mediaQueries.mobile} {
    width: min-content;

    & > svg {
      width: auto;
      height: 121px;
    }
  }
`;

const JumpingDudeContainer = styled.div`
  position: absolute !important;
  top: -145%;
  right: 7%;

  width: 250px;
  height: auto;

  ${mediaQueries.tablet} {
    top: -175%;

    width: 210px;
  }

  ${mediaQueries.mobile} {
    top: -160%;
    right: 20%;
    bottom: 21%;

    width: ${columnsToPx(2)};
  }

  ${mediaQueries.smallMobile} {
    right: 35%;
  }
`;

const StyledCircles = styled(Circles)`
  position: absolute;
  left: 0;

  transform: translate(-45%, -38%);

  ${mediaQueries.tablet} {
    transform: translate(-46%, -38%);
  }

  ${mediaQueries.mobile} {
    width: 1000px;
    height: 1000px;

    opacity: 0.6;

    transform: translate(-45%, -38%);

    stroke-width: 4px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  width: 100%;
  height: 100%;

  .gatsby-image-wrapper {
    width: 50%;

    opacity: ${(props) => (props.show ? "1" : "0")};

    transition: opacity 0.1s ease-in;
  }

  .gatsby-image-wrapper:first-of-type {
    transform: translateX(1px);
  }

  .gatsby-image-wrapper:last-of-type {
    z-index: -1;
  }
`;

export default function ElasticF() {
  const [leftImgLoaded, setLeftImgLoaded] = useState(false);
  const [rightImgLoaded, setRightImgLoaded] = useState(false);
  const data = useStaticQuery(query);
  const jumpingDudeLeft = data.left.childImageSharp.fluid;
  const jumpingDudeRight = data.right.childImageSharp.fluid;

  function onLoadLeft() {
    setLeftImgLoaded(true);
  }

  function onLoadRight() {
    setRightImgLoaded(true);
  }

  return (
    <div aria-label="Finiam's animated logo">
      <ElasticFContainer aria-hidden="true">
        <StaticF />

        <JumpingDudeContainer>
          <StyledCircles />
          <ImageContainer show={leftImgLoaded && rightImgLoaded}>
            <Img
              fluid={jumpingDudeLeft}
              fadeIn={false}
              onLoad={onLoadLeft}
              loading="eager"
            />
            <Img
              fluid={jumpingDudeRight}
              fadeIn={false}
              onLoad={onLoadRight}
              loading="eager"
            />
          </ImageContainer>
        </JumpingDudeContainer>
      </ElasticFContainer>
    </div>
  );
}
