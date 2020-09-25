import styled from "styled-components";

import { columnsToPx, GUTTER_SIZE } from "root/styleutils/settings";
import mediaQueries from "root/styleutils/mediaQueries";

const WidthLimiter = styled.div`
  width: 100%;
  max-width: ${columnsToPx(18)};
  margin: 0 auto;

  ${mediaQueries.tablet} {
    width: calc(${columnsToPx(12)} - 2 * ${GUTTER_SIZE}px);
    max-width: calc(100% - 2 * ${GUTTER_SIZE}px);
    padding: 0 ${GUTTER_SIZE}px;
  }
`;

export default WidthLimiter;
