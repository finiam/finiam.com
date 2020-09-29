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
import Button from "root/components/Button";
import mediaQueries from "root/styleutils/mediaQueries";

const Root = styled.section`
  padding-bottom: ${spacing(29)};
  overflow: hidden;

  ${mediaQueries.mobile} {
    padding: ${spacing(17)} 0;
  }
`;

const CopyBlock = styled.div`
  max-width: ${columnsToPx(10)};
`;

const Partners = styled(Flexbox)`
  padding: ${spacing(22)} 0;

  & > * + * {
    margin-left: ${spacing(20)};
  }

  ${mediaQueries.tabletOnly} {
    justify-content: space-between;

    & > * + * {
      margin-left: ${spacing(4)};
    }
  }

  ${mediaQueries.mobile} {
    justify-content: space-between;
    padding-top: ${spacing(10)};
    padding-bottom: ${spacing(18)};

    svg {
      width: 40vw;
    }

    & > * {
      margin-top: ${spacing(8)};
      margin-right: ${spacing(6)};
    }

    & > * + * {
      margin-left: 0;
    }
  }
`;

const Partner = styled.a`
  transition: 0.25s opacity ease-in;

  &:hover {
    opacity: 0.6;
  }
`;

const LastCopyBlock = styled(CopyBlock)`
  margin-bottom: ${spacing(7)};
`;

export default function HomePartners() {
  return (
    <Root id="partners">
      <WidthLimiter>
        <CopyBlock>
          <Text size="h2" color={colors.brand} weight="lighter">
            We are trusted by some of the coolest fintech companies in the
            world.
          </Text>
        </CopyBlock>

        <Partners
          direction="row"
          gap={spacing(22)}
          alignItems="center"
          flexWrap="wrap"
        >
          <Partner
            href="https://crediflux.pt"
            rel="noreferrer"
            target="_blank"
            aria-label="Crediflux"
          >
            <Crediflux />
          </Partner>
          <Partner
            href="https://utrust.com"
            rel="noreferrer"
            target="_blank"
            aria-label="Utrust"
          >
            <Utrust />
          </Partner>
          <Partner
            href="https://www.betprotocol.com/"
            rel="noreferrer"
            target="_blank"
          >
            <BetProtocol />
          </Partner>
        </Partners>

        <LastCopyBlock>
          <Text color={colors.lightBlack} weight="300">
            We don’t have clients. We have partners.
          </Text>
          <Text color={colors.black}>Ready to partner?</Text>
        </LastCopyBlock>

        <Button as="a" href="mailto:contact@finiam.com">
          Let&apos;s Talk →
        </Button>
      </WidthLimiter>
    </Root>
  );
}
