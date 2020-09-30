import React from "react";
import styled from "styled-components";

import { columnsToPx, spacing } from "root/styleutils/settings";
import mediaQueries from "root/styleutils/mediaQueries";
import Text, { FONT_MONO, FONT_SPECIAL } from "root/components/Text";
import Flexbox from "root/components/Flexbox";

import BigM from "./BigM";
import Mouse from "./Mouse";
import FContainer from "./FContainer";

const Root = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  padding: ${spacing(22)} 0;

  ${mediaQueries.mobile} {
    padding-top: ${spacing(14)};
    padding-bottom: ${spacing(24)};
  }
`;

const StyledBigW = styled(BigM)`
  position: absolute;
  right: -30vw;
  bottom: 0;
  z-index: 1;

  padding: inherit;

  ${mediaQueries.tablet} {
    right: -450px;
  }

  ${mediaQueries.mobile} {
    right: -120px;
  }
`;

const Copy = styled.div`
  z-index: 2;

  max-width: ${columnsToPx(12)};
  margin-bottom: ${spacing(40)};

  font-size: 52px;
  font-weight: 500;
  line-height: 72px;

  ${mediaQueries.tablet} {
    max-width: ${columnsToPx(7)};
    margin-bottom: ${spacing(24)};
  }

  ${mediaQueries.mobile} {
    margin-bottom: ${spacing(24)};
  }
`;

const FindOutMore = styled(Flexbox)`
  ${mediaQueries.tablet} {
    display: none;
  }

  p {
    font-size: 16px;
  }
`;

export default function StaticBanner() {
  return (
    <Root>
      <StyledBigW aria-hidden="true" />

      <Copy>
        <Text size="h1" color="#B294EF;" fontFamily={FONT_SPECIAL}>
          We are finiam.
        </Text>
        <Text
          size="h1"
          aria-label="We are finiam. Improving people's lives by untangling the financial world."
          fontFamily={FONT_SPECIAL}
        >
          Improving people&apos;s lives by untangling the financial world.
        </Text>
      </Copy>

      <FContainer />

      <FindOutMore gap={spacing(4)} alignItems="center">
        <Mouse />
        <Text fontFamily={FONT_MONO}>Find out more</Text>
      </FindOutMore>
    </Root>
  );
}
