import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function responsivify(minSize, maxSize) {
  const minViewport = 320;
  const maxViewport = 1280;

  return `calc(${minSize}px + ${
    maxSize - minSize
  } *(100vw - ${minViewport}px)/${maxViewport})`;
}

export const FONT_SIZES = {
  h1: {
    element: "h1",
    fontSize: responsivify(40, 54),
    lineHeight: responsivify(52, 72),
  },
  h2: {
    element: "h2",
    fontSize: responsivify(28, 40),
    lineHeight: responsivify(40, 52),
  },
  h3: {
    element: "h3",
    fontSize: responsivify(20, 28),
    lineHeight: responsivify(28, 40),
  },
  base: {
    element: "p",
    fontSize: responsivify(16, 20),
    lineHeight: responsivify(22, 28),
  },
  caption: {
    element: "small",
    fontSize: 14,
    lineHeight: 20,
  },
};

export const FONT_REGULAR = "studiofeixen";
export const FONT_MONO = "Inconsolata";

const InnerText = styled.p`
  color: ${(props) => props.color};

  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.sizeObj.fontSize};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.sizeObj.lineHeight};

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

export default function Text({ size, children, element, ...props }) {
  const sizeObj = FONT_SIZES[size] || FONT_SIZES.base;

  return (
    <InnerText as={element || sizeObj.element} sizeObj={sizeObj} {...props}>
      {children}
    </InnerText>
  );
}

Text.propTypes = {
  element: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(FONT_SIZES)),
  color: PropTypes.string,
  weight: PropTypes.string,
  children: PropTypes.node.isRequired,
  fontFamily: PropTypes.oneOf([FONT_REGULAR, FONT_MONO]),
};

Text.defaultProps = {
  element: null,
  size: "base",
  color: "white",
  weight: "normal",
  fontFamily: FONT_REGULAR,
};
