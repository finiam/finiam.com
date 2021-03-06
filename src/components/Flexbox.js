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
  flex-wrap: ${(props) => props.flexWrap};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

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
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexWrap: PropTypes.string,
};

Flexbox.defaultProps = {
  direction: "row",
  justifyContent: "initial",
  alignItems: "initial",
  flexWrap: "initial",
};

export default Flexbox;
