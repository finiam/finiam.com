import React from "react";
import styled from "styled-components";

import WidthLimiter from "root/components/WidthLimiter";
import Flexbox from "root/components/Flexbox";
import Link from "root/components/Link";
import Text from "root/components/Text";
import { spacing } from "root/styleutils/settings";
import colors from "root/styleutils/colors";
import ShortLogo from "root/components/ShortLogo";
import SayHi from "./SayHi";

const Root = styled.nav`
  padding-top: ${spacing(10)};

  background-color: ${colors.brand};
`;

const StackAbove = styled.div`
  position: relative;
  z-index: 2;
`;

const Links = styled(Flexbox)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

const SayHiContainer = styled.div`
  position: relative;
`;

const StyledSayHi = styled(SayHi)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;

  transform: translate(-50%, -50%);
`;

export default function Navbar() {
  return (
    <Root>
      <StackAbove>
        <WidthLimiter>
          <Flexbox>
            <Link to="/" aria-label="Brand" underline={false}>
              <ShortLogo />
            </Link>

            <Links gap={spacing(7)}>
              <Link href="https://blog.finiam.com" underline={false}>
                <Text>Blog</Text>
              </Link>

              <SayHiContainer>
                <StyledSayHi aria-hidden="true" />

                <Link href="mailto:contact@finiam.com" underline={false}>
                  <Text color={colors.salmon}>Say Hi</Text>
                </Link>
              </SayHiContainer>
            </Links>
          </Flexbox>
        </WidthLimiter>
      </StackAbove>
    </Root>
  );
}
