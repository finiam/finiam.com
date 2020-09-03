import React from "react";
import styled from "styled-components";

import colors from "root/styleutils/colors";
import { spacing, COLUMN_SIZE } from "root/styleutils/settings";
import WidthLimiter from "./WidthLimiter";
import Text from "./Text";
import Flexbox from "./Flexbox";
import Link from "./Link";
import Logo from "./Logo";

const Root = styled.footer`
  padding: ${spacing(15)} 0;
  margin-top: auto;

  background-color: ${colors.black};
`;

export default function Footer() {
  return (
    <Root>
      <WidthLimiter>
        <Flexbox justifyContent="space-between">
          <Link to="/" underline={false}>
            <Logo />
          </Link>

          <Flexbox gap={`${COLUMN_SIZE}px`}>
            <Text color={colors.white}>We’re based in →</Text>

            <Flexbox direction="column">
              <Text color={colors.green}>Braga, Portugal</Text>

              <Link
                href="https://goo.gl/maps/DgtQLNXUofzD969k8"
                target="_blank"
                rel="noreferrer"
              >
                <Text>Get directions</Text>
              </Link>
            </Flexbox>

            <Flexbox direction="column">
              <Text color={colors.green}>Boston, USA</Text>

              <Link
                href="https://goo.gl/maps/U97F3EfaR9kjCjpN6"
                target="_blank"
                rel="noreferrer"
              >
                <Text>Get directions</Text>
              </Link>
            </Flexbox>
          </Flexbox>

          <Flexbox direction="column">
            <Text color={colors.green}>Follow Us</Text>

            <Text>In / Md / Tw / Git / Ins</Text>
          </Flexbox>
        </Flexbox>
      </WidthLimiter>
    </Root>
  );
}
