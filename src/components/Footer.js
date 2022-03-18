import React from "react";
import styled from "styled-components";

import colors from "root/styleutils/colors";
import { spacing, COLUMN_SIZE } from "root/styleutils/settings";
import { desktopOnly, tabletAndBelow } from "root/styleutils/mediaHelpers";
import mediaQueries from "root/styleutils/mediaQueries";
import { widthLimiterCss } from "./WidthLimiter";
import Text from "./Text";
import Flexbox from "./Flexbox";
import Link from "./Link";
import Logo from "./Logo";
import ShortLogo from "./ShortLogo";

const SOCIAL_LINKS = [
  {
    key: "in",
    "aria-label": "LinkedIn",
    name: "In",
    href: "https://www.linkedin.com/company/finiam",
  },
  {
    key: "twi",
    "aria-label": "Twitter",
    name: "Tw",
    href: "https://twitter.com/wearefiniam",
  },
];

const Root = styled.footer`
  padding: ${spacing(15)} 0;
  margin-top: auto;

  background-color: ${colors.blackRussian};
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${mediaQueries.mobile} {
    flex-direction: column;
  }
`;

const Addresses = styled(Flexbox)`
  ${mediaQueries.mobile} {
    margin-top: ${spacing(10)};
  }
`;

const AddressBlock = styled.address`
  display: flex;
  flex-direction: column;

  ${mediaQueries.desktopOnly} {
    margin-left: ${COLUMN_SIZE}px;
  }

  & + & {
    margin-left: ${COLUMN_SIZE}px;
  }
`;

const FollowUs = styled(Flexbox)`
  ${mediaQueries.mobile} {
    margin-top: ${spacing(10)};
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: row;

  ${mediaQueries.mobile} {
    flex-wrap: wrap;

    margin-left: -12px;
  }
`;

const SocialLink = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    display: block;

    text-decoration: none;
  }

  ${mediaQueries.mobile} {
    a {
      padding: 12px;
    }
  }
`;

export default function Footer() {
  return (
    <Root>
      <Content css={widthLimiterCss}>
        <Link to="/" underline={false} css={desktopOnly}>
          <Logo />
        </Link>

        <ShortLogo css={tabletAndBelow} />

        <Addresses>
          <Text color={colors.white} css={desktopOnly}>
            We’re based in →
          </Text>

          <AddressBlock>
            <Text color={colors.green} weight="lighter">
              Headquarters
            </Text>

            <Link
              href="https://goo.gl/maps/DgtQLNXUofzD969k8"
              target="_blank"
              rel="noreferrer"
            >
              <Text weight="lighter">Braga, Portugal</Text>
            </Link>
          </AddressBlock>

          <AddressBlock>
            <Text color={colors.green} weight="lighter">
              Remote
            </Text>

            <Text weight="lighter">Globally</Text>
          </AddressBlock>
        </Addresses>

        <FollowUs direction="column">
          <Text color={colors.green} weight="lighter">
            Follow Us
          </Text>

          <SocialLinks>
            {SOCIAL_LINKS.map((socialLink, index) => (
              <>
                <SocialLink key={socialLink.key}>
                  <a
                    href={socialLink.href}
                    aria-label={socialLink["aria-label"]}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Text weight="lighter">{socialLink.name}</Text>
                  </a>

                  {index === SOCIAL_LINKS.length - 1 ? (
                    ""
                  ) : (
                    <Text weight="lighter">&nbsp;/&nbsp;</Text>
                  )}
                </SocialLink>
              </>
            ))}
          </SocialLinks>
        </FollowUs>
      </Content>
    </Root>
  );
}
