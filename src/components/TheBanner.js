import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from "gatsby";

import { columnsToPx, spacing } from "root/styleutils/settings";
import ElasticF from "./ElasticF";
import Text from "./Text";

export const query = graphql`
  query {
    file(relativePath: { eq: "jumping-dude.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

const Root = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  padding-top: ${spacing(22)};
  padding-bottom: ${spacing(35)};
`;

const Copy = styled.div`
  max-width: ${columnsToPx(12)};
  margin-bottom: ${spacing(40)};

  font-size: 52px;
  font-weight: 500;
  line-height: 72px;
`;

const ElasticFContainer = styled.div`
  width: ${columnsToPx(15)};

  margin-left: auto;

  transform: translateX(5%);
`;

const JumpingDude = styled(motion.div)`
  position: absolute !important;
  right: 5%;
  bottom: 12%;

  width: 300px;
  height: auto;
`;

const JumpindDudeWithoutMotion = styled.div`
  position: absolute !important;
  right: 5%;
  bottom: 12%;

  width: 300px;
  height: auto;

  transform: translate(-5%, -10%);
`;

const TRANSITION_DURATION = 1.5;

export default function TheBanner() {
  const shouldAnimate =
    typeof window !== "undefined" &&
    window.sessionStorage.getItem("shouldAnimate") !== "false";
  const data = useStaticQuery(query);
  const jumpingDude = data.file.childImageSharp.fluid;

  useEffect(() => {
    setTimeout(
      () => window.sessionStorage.setItem("shouldAnimate", "false"),
      TRANSITION_DURATION,
    );
  }, []);

  function renderDude() {
    if (!shouldAnimate) {
      return (
        <JumpindDudeWithoutMotion>
          <Img fluid={jumpingDude} />
        </JumpindDudeWithoutMotion>
      );
    }

    return (
      <JumpingDude
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: "-5%", y: "-10%" }}
        transition={{
          delay: TRANSITION_DURATION + 0.1,
          duration: 0.5,
          ease: "linear",
        }}
      >
        <Img fluid={jumpingDude} />
      </JumpingDude>
    );
  }

  return (
    <Root>
      <Copy>
        <Text size="h1" color="#B294EF;">
          We are finiam.
        </Text>
        <Text
          size="h1"
          aria-label="We are finiam. Improving people's lives by untangling the financial world."
        >
          Improving people&apos;s lives by untangling the financial world.
        </Text>
      </Copy>

      <ElasticFContainer initial="start" animate="end">
        <motion.div
          initial={{ opacity: shouldAnimate ? 1 : 0 }}
          animate={{ opacity: 1 }}
        >
          {renderDude()}

          <ElasticF
            transitionDuration={TRANSITION_DURATION}
            shouldAnimate={shouldAnimate}
          />
        </motion.div>
      </ElasticFContainer>
    </Root>
  );
}
