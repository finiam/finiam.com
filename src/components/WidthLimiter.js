import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { columnsToPx } from "../styleutils/settings";

const Root = styled.div`
  max-width: ${columnsToPx(18)};
  margin: 2rem auto;
`;

export default function WidthLimiter({ children }) {
  return <Root>{children}</Root>;
}

WidthLimiter.propTypes = {
  children: PropTypes.node.isRequired,
};
