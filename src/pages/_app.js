import React from "react";
import PropTypes from "prop-types";

import "../stylesheets/reset.css";
import "../stylesheets/globals.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.array.isRequired,
  pageProps: PropTypes.object.isRequired,
};
