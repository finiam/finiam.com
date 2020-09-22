const breakpoints = {
  tablet: 1360,
  mobile: 700,
  smallMobile: 400,
};

const mediaQueries = {
  desktopOnly: `@media (min-width: ${breakpoints.tablet + 1}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  tabletOnly: `@media (min-width: ${
    breakpoints.mobile + 1
  }px) and (max-width: ${breakpoints.tablet}px)`,
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  smallMobile: `@media (max-width: ${breakpoints.smallMobile}px)`,
};

export default mediaQueries;
