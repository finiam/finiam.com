import { css } from "styled-components";
import mediaQueries from "./mediaQueries";

export const desktopOnly = css`
  ${mediaQueries.tablet} {
    display: none;
  }
`;

export const tabletAndBelow = css`
  display: none;

  ${mediaQueries.tablet} {
    display: block;
  }
`;
