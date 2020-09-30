import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "root/styleutils/colors";
import { spacing } from "root/styleutils/settings";
import { FONT_REGULAR, FONT_SIZES } from "./Text";

const Button = styled.button`
  display: inline-block;

  padding: ${spacing(3)} ${spacing(7)};

  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: ${spacing(1)};
  color: ${(props) => props.color};
  cursor: pointer;

  font-family: ${FONT_REGULAR};
  font-size: ${FONT_SIZES.base.fontSize};
  line-height: ${FONT_SIZES.base.lineHeight};
  text-decoration: none;

  transition: 0.25s opacity ease-in;

  &:hover {
    opacity: 0.6;
  }
`;

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  color: "white",
  backgroundColor: colors.salmon,
};

export default Button;
