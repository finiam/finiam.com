import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from "gatsby";
import { columnsToPx } from "root/styleutils/settings";
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
`;

const Copy = styled.div`
  max-width: ${columnsToPx(10)};
  margin-bottom: 50px;

  font-size: 52px;
  font-weight: 500;
  line-height: 72px;
`;

const ElasticFContainer = styled.div`
  width: 80%;
  margin-top: auto;
  margin-bottom: 5rem;
  margin-left: auto;
`;

const JumpingDude = styled(motion.div)`
  position: absolute !important;
  right: 10%;
  bottom: 12%;

  width: 300px;
  height: auto;
`;

const TRANSITION_DURATION = 1.5;

export default function TheBanner() {
  const data = useStaticQuery(query);
  const jumpingDude = data.file.childImageSharp.fluid;

  return (
    <Root>
      <Copy>
        <Text size="h1">
          We are finiam. <br />
          Improving people&apos;s lives by untangling the financial world.
        </Text>
      </Copy>

      <ElasticFContainer initial="start" animate="end">
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
        <ElasticF transitionDuration={TRANSITION_DURATION} />
      </ElasticFContainer>
    </Root>
  );
}
