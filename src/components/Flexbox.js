import styled from "@emotion/styled";
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

  & > * + * {
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
};

Flexbox.defaultProps = {
  direction: "row",
};

export default Flexbox;
