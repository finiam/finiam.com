import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NextLink from "next/link";

const StyledNextLink = styled(NextLink)`
  display: inline;

  text-decoration: none;

  & > * {
    display: inline;

    ${(props) => props.underline && "border-bottom: 1px solid white;"}
  }
`;

const RegularLink = StyledNextLink.withComponent("a");

export default function Link({ href, to, underline, children, ...props }) {
  if (href) {
    return (
      <RegularLink {...{ ...props, href, underline: underline ? 1 : 0 }}>
        {children}
      </RegularLink>
    );
  }

  return (
    <StyledNextLink {...{ ...props, href: to, underline: underline ? 1 : 0 }}>
      <a href={to}>{children}</a>
    </StyledNextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  underline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  to: null,
  href: null,
  underline: true,
};
