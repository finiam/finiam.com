import React from "react";
import Img from "react-optimized-image";

import StaticF from "root/components/StaticBanner/StaticF";
import { columnsToPx, spacing } from "root/styleutils/settings";
import styled, { keyframes } from "styled-components";
import mediaQueries from "root/styleutils/mediaQueries";
import jumpingDudeLeft from "root/assets/jumping-dude-left.png";
import jumpingDudeRight from "root/assets/jumping-dude-right.png";

import Circles from "./Circles";

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
    top: -137%;
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

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  width: 100%;
  height: 100%;

  picture {
    animation: 0.2s ${fadeIn} ease-in;
  }

  picture:last-of-type {
    z-index: -1;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export default function ElasticF() {
  return (
    <div aria-label="Finiam's animated logo">
      <ElasticFContainer
        aria-hidden="true"
        aria-label="A man jumping over Finiam's logo"
      >
        <StaticF />

        <JumpingDudeContainer>
          <StyledCircles />

          <ImageContainer>
            <Img
              src={jumpingDudeLeft}
              sizes={[125]}
              loading="eager"
              alt="A man jumping"
              webp
            />
            <Img
              src={jumpingDudeRight}
              sizes={[125]}
              loading="eager"
              alt="A man jumping"
              webp
            />
          </ImageContainer>
        </JumpingDudeContainer>
      </ElasticFContainer>
    </div>
  );
}
