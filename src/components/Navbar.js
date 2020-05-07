import React from "react";
import GatsbyLink from "gatsby-link";
import styled from "@emotion/styled";

const Root = styled.nav`
  padding: 2rem;

  background-color: black;
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
