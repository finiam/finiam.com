import React from "react";
import styled from "styled-components";
import { spacing, columnsToPx } from "root/styleutils/settings";
import { widthLimiterCss } from "root/components/WidthLimiter";
import Text from "root/components/Text";
import Flexbox from "root/components/Flexbox";
import colors from "root/styleutils/colors";
import mediaQueries from "root/styleutils/mediaQueries";
import ImageGrid from "./ImageGrid";

const Root = styled.section`
  padding: ${spacing(17)} 0;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;

  ${mediaQueries.mobile} {
    flex-direction: column;
  }
`;

const CopyFlex = styled(Flexbox)`
  max-width: ${columnsToPx(7)};
`;

const Services = styled(Text)`
  ${mediaQueries.desktopOnly} {
    margin-left: ${columnsToPx(1)};
  }
`;

export default function HomeWhatWeDo() {
  return (
    <Root>
      <Content css={widthLimiterCss}>
        <CopyFlex direction="column" gap={spacing(9)}>
          <Text size="h2" color={colors.black} weight="lighter">
            What we do
          </Text>

          <Text color={colors.grey} weight="lighter">
            We are a small and curious team that will help you craft your
            project. We believe constant feedback and candor are essential to
            our partnership.
          </Text>

          <Services color={colors.black}>
            → Development <br />
            → Design <br />
            → Product development <br />
            → Research <br />
          </Services>
        </CopyFlex>

        <ImageGrid />
      </Content>
    </Root>
  );
}
