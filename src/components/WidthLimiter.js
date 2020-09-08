import styled from "styled-components";

import { columnsToPx } from "root/styleutils/settings";

const WidthLimiter = styled.div`
  width: 100%;
  max-width: ${columnsToPx(18)};
  margin: 2rem auto;
`;

export default WidthLimiter;
