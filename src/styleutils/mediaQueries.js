const breakpoints = {
  tablet: "1360px",
  mobile: "700px",
  smallMobile: "400px",
};

const mediaQueries = {
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  smallMobile: `@media (max-width: ${breakpoints.smallMobile})`,
};

export default mediaQueries;
