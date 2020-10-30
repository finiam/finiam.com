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
    key: "medium",
    "aria-label": "Medium",
    name: "Md",
    href: "https://medium.com/finiam",
  },
  {
    key: "twi",
    "aria-label": "Twitter",
    name: "Tw",
    href: "https://twitter.com/wearefiniam",
  },
  {
    key: "git",
    "aria-label": "Github",
    name: "Git",
    href: "https://github.com/finiam",
  },
  {
    key: "ins",
    "aria-label": "Instagram",
    name: "Ins",
    href: "https://www.instagram.com/wearefiniam/",
  },
  {
    key: "fb",
    name: "Fb",
    href: "https://www.facebook.com/wearefiniam",
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
    & > p {
      padding: 12px;
    }
  }
`;

const SocialLink = styled.li`
  a {
    display: block;

    text-decoration: none;
  }

  ${mediaQueries.mobile} {
    a {
      padding: 12px;
    }

    &:first-child a {
      margin-left: -12px;
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
              Braga, Portugal
            </Text>

            <Link
              href="https://goo.gl/maps/DgtQLNXUofzD969k8"
              target="_blank"
              rel="noreferrer"
            >
              <Text weight="lighter">Get directions</Text>
            </Link>
          </AddressBlock>

          <AddressBlock>
            <Text color={colors.green} weight="lighter">
              Boston, USA
            </Text>

            <Link
              href="https://goo.gl/maps/U97F3EfaR9kjCjpN6"
              target="_blank"
              rel="noreferrer"
            >
              <Text weight="lighter">Get directions</Text>
            </Link>
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
                </SocialLink>

                {index === SOCIAL_LINKS.length - 1 ? (
                  ""
                ) : (
                  <Text weight="lighter">&nbsp;/&nbsp;</Text>
                )}
              </>
            ))}
          </SocialLinks>
        </FollowUs>
      </Content>
    </Root>
  );
}
