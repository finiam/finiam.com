import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Root = styled.div`
  max-width: 40rem;
  margin: 2rem auto;
`;

function Layout({ children }) {
  return <Root>{children}</Root>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
