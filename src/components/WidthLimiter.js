import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { columnsToPx } from "root/styleutils/settings";

const Root = styled.div`
  width: 100%;
  max-width: ${columnsToPx(18)};
  margin: 0 auto;
`;

export default function WidthLimiter({ children }) {
  return <Root>{children}</Root>;
}

WidthLimiter.propTypes = {
  children: PropTypes.node.isRequired,
};
