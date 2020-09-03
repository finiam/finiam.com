import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import SEO from "root/components/SEO";
import TheBanner from "root/components/TheBanner";
import WidthLimiter from "root/components/WidthLimiter";
import Footer from "root/components/Footer";

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

      <Footer />
    </Root>
  );
};

export default IndexPage;
