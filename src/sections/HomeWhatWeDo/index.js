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
  padding: ${spacing(29)} 0;
  overflow: hidden;

  ${mediaQueries.mobile} {
    padding: ${spacing(17)} 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;

  ${mediaQueries.mobile} {
    flex-direction: column;
  }
`;

const CopyFlex = styled(Flexbox)`
  max-width: ${columnsToPx(9)};
`;

const Services = styled(Flexbox)`
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

          <Services direction="column" gap={spacing(1)}>
            <Text color={colors.black} size="h3" as="p">
              → Web Development
            </Text>
            <Text color={colors.black} size="h3" as="p">
              → Smart contract development
            </Text>
            <Text color={colors.black} size="h3" as="p">
              → DevOps
            </Text>
            <Text color={colors.black} size="h3" as="p">
              → Product development
            </Text>
            <Text color={colors.black} size="h3" as="p">
              → Research
            </Text>
          </Services>
        </CopyFlex>
        <ImageGrid />
      </Content>
    </Root>
  );
}
