import styled from "styled-components";
import PropTypes from "prop-types";

function getSide({ direction }) {
  switch (direction) {
    case "row":
      return "margin-left";

    case "row-reverse":
      return "margin-right";

    case "column":
      return "margin-top";

    case "column-reverse":
      return "margin-bottom";

    default:
      throw new Error(`Unsupported direction: ${direction}`);
  }
}

const Flexbox = styled.div`
  display: ${(props) => (props.inline ? "inline-flex" : "flex")};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  & > *:not([style*="display:none"]) + *:not([style*="display:none"]) {
    ${getSide}: ${(props) => props.gap}
  }
`;

Flexbox.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};

Flexbox.defaultProps = {
  direction: "row",
  justifyContent: "initial",
  alignItems: "initial",
};

export default Flexbox;
