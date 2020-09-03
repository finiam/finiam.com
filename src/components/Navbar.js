import React from "react";
import GatsbyLink from "gatsby-link";
import styled from "styled-components";

import colors from "root/styleutils/colors";

const Root = styled.nav`
  padding: 2rem;

  background-color: ${colors.brand};
`;

const LinkList = styled.ul``;

const Link = styled(GatsbyLink)`
  color: white;
`;

export default function Navbar() {
  return (
    <Root>
      <LinkList>
        <li>
          <Link to="/">Finiam</Link>
        </li>
      </LinkList>
    </Root>
  );
}
