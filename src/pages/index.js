import React from "react";
import Link from "gatsby-link";
import styled from "@emotion/styled";

import SEO from "root/components/SEO";
import TheBanner from "root/components/TheBanner";
import WidthLimiter from "root/components/WidthLimiter";

const Root = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #4d00e5;
`;

const IndexPage = () => {
  return (
    <Root>
      <SEO title="Home Page" />

      <WidthLimiter>
        <TheBanner />

        <Link to="/blog">Check the blog</Link>
      </WidthLimiter>
    </Root>
  );
};

export default IndexPage;
