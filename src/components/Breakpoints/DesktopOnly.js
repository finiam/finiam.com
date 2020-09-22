import mediaQueries from "root/styleutils/mediaQueries";
import styled from "styled-components";

const DesktopOnly = styled.div`
  ${mediaQueries.tablet} {
    display: none;
  }
`;

export default DesktopOnly;
