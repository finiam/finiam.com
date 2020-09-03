import React from "react";
import styled from "styled-components";

import WidthLimiter from "root/components/WidthLimiter";
import Flexbox from "root/components/Flexbox";
import Link from "root/components/Link";
import Text from "root/components/Text";
import { spacing } from "root/styleutils/settings";
import colors from "root/styleutils/colors";
import ShortLogo from "./ShortLogo";

const Root = styled.nav`
  padding-top: ${spacing(10)};

  background-color: ${colors.brand};
`;

const Links = styled(Flexbox)`
  margin-left: auto;
`;

export default function Navbar() {
  return (
    <Root>
      <WidthLimiter>
        <Flexbox>
          <Link to="/" aria-label="Brand" underline={false}>
            <ShortLogo />
          </Link>

          <Links gap={spacing(7)}>
            <Link to="/blog" underline={false}>
              <Text>Blog</Text>
            </Link>

            <Link to="/" underline={false}>
              <Text color={colors.salmon}>Say Hi</Text>
            </Link>
          </Links>
        </Flexbox>
      </WidthLimiter>
    </Root>
  );
}
