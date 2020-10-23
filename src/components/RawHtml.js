/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";

export default function RawHtml({ children }) {
  return <div dangerouslySetInnerHTML={{ __html: children }} />;
}

RawHtml.propTypes = {
  children: PropTypes.string.isRequired,
};
