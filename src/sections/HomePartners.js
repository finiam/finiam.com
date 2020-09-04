import React from "react";
import styled from "styled-components";
import { spacing, columnsToPx } from "root/styleutils/settings";
import WidthLimiter from "root/components/WidthLimiter";
import Text from "root/components/Text";
import Flexbox from "root/components/Flexbox";
import Crediflux from "root/assets/crediflux.inline.svg";
import Utrust from "root/assets/utrust.inline.svg";
import BetProtocol from "root/assets/betprotocol.inline.svg";
import colors from "root/styleutils/colors";

const Root = styled.section`
  padding: ${spacing(30)} 0;
`;

const CopyBlock = styled.div`
  width: ${columnsToPx(10)};
`;

const Partners = styled(Flexbox)`
  padding: ${spacing(22)} 0;
`;

export default function HomePartners() {
  return (
    <Root>
      <WidthLimiter>
        <CopyBlock>
          <Text size="h2" color={colors.black}>
            We are trusted by some of the best fintech companies in the world.
          </Text>
        </CopyBlock>

        <Partners direction="row" gap={spacing(22)} alignItems="center">
          <Crediflux />
          <Utrust />
          <BetProtocol />
        </Partners>

        <CopyBlock>
          <Text size="h3" color={colors.lightBlack} weight="300">
            We don’t have clients. We have partners.
          </Text>
          <Text size="h3" color={colors.black}>
            Ready to partner? Let’s talk.
          </Text>
        </CopyBlock>
      </WidthLimiter>
    </Root>
  );
}
