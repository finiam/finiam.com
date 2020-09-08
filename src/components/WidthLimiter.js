import styled from "styled-components";

import { columnsToPx } from "root/styleutils/settings";

const WidthLimiter = styled.div`
  width: 100%;
  max-width: ${columnsToPx(18)};
  margin: 0 auto;
`;

export default WidthLimiter;
