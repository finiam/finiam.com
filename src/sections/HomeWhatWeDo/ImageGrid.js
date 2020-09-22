import React from "react";
import Img from "gatsby-image/withIEPolyfill";
import styled from "styled-components";
import mediaQueries from "root/styleutils/mediaQueries";
import { columnsToPx, spacing } from "root/styleutils/settings";

import useImages from "./useImages";

const ImagesContainer = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: min;
  grid-template-rows: 247px 275px;
  width: 100%;

  transform: rotate(5deg) translateX(${columnsToPx(4)});

  ${mediaQueries.tablet} {
    transform: rotate(5deg) translateX(${columnsToPx(1)});
  }

  ${mediaQueries.tabletOnly} {
    & > *:nth-child(1) {
      margin-left: ${columnsToPx(1)};
    }
  }

  ${mediaQueries.mobile} {
    margin-right: -${columnsToPx(1)};

    transform: rotate(5deg);
  }

  & > *:nth-child(1) {
    grid-area: 1 / 1 / 2 / 3;
  }

  & > *:nth-child(2) {
    grid-area: 1 / 3 / 3 / 4;
  }

  & > *:nth-child(3) {
    grid-area: 2 / 1 / 3 / 3;
  }
`;

const ImgRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  margin-left: auto;

  ${mediaQueries.mobile} {
    width: 300px;
  }

  & > * {
    width: 100%;
    height: 100%;
  }

  & > *:first-child {
    height: 75%;
    margin-top: auto;
    margin-right: ${spacing(4)};
  }
`;

const Img3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  & > * {
    width: auto;
    height: 200px;
  }

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const Img4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 100%;

  & > * {
    width: 100%;
    max-width: 400px;
  }
`;

export default function ImageGrid() {
  const images = useImages();

  return (
    <ImagesContainer>
      <ImgRow>
        <Img fluid={images.img1.childImageSharp.fluid} />
        <Img fluid={images.img2.childImageSharp.fluid} />
      </ImgRow>
      <Img3>
        <Img fluid={images.img3.childImageSharp.fluid} />
      </Img3>
      <Img4>
        <Img fluid={images.img4.childImageSharp.fluid} />
      </Img4>
    </ImagesContainer>
  );
}
