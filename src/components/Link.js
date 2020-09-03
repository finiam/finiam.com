import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GatsbyLink from "gatsby-link";

const Root = styled(GatsbyLink)`
  display: inline;

  text-decoration: none;

  & > * {
    display: inline;

    ${(props) => props.underline && "border-bottom: 1px solid white;"}
  }
`;

export default function Link({ href, to, underline, children, ...props }) {
  let Component = Root;

  if (href) {
    Component = Component.withComponent("a");

    return <Component {...{ ...props, href }}>{children}</Component>;
  }

  return <Component {...{ ...props, to, underline }}>{children}</Component>;
}

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  underline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  to: "/",
  href: "/",
  underline: true,
};
