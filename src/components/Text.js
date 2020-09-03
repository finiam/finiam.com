import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const sizes = {
  h1: {
    element: "h1",
    fontSize: 54,
    lineHeight: 72,
  },
  h2: {
    element: "h2",
    fontSize: 40,
    lineHeight: 52,
  },
  h3: {
    element: "h3",
    fontSize: 28,
    lineHeight: 40,
  },
  base: {
    element: "p",
    fontSize: 20,
    lineHeight: 28,
  },
  caption: {
    element: "small",
    fontSize: 14,
    lineHeight: 20,
  },
};

const InnerText = styled.div`
  color: ${(props) => props.color};

  font-family: "studiofeixen";
  font-size: ${(props) => props.sizeObj.fontSize}px;
  line-height: ${(props) => props.sizeObj.lineHeight}px;

  u {
    text-decoration: underline;
  }

  em {
    font-style: italic;
  }

  b {
    font-weight: bold;
  }
`;

export default function Text({ size, children, ...props }) {
  const sizeObj = sizes[size] || sizes.base;

  return (
    <InnerText as={sizeObj.element} sizeObj={sizeObj} {...props}>
      {children}
    </InnerText>
  );
}

Text.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  size: "base",
  color: "white",
};

export const Edgy = styled.span`
  font-family: "studiofeixen-edgy";
`;
