import React from "react";
import styled from "styled-components";

import SEO from "root/components/SEO";
import TheBanner from "root/components/TheBanner";
import WidthLimiter from "root/components/WidthLimiter";
import Footer from "root/components/Footer";
import Navbar from "../components/Navbar";

const Root = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #4d00e5;
`;

const IndexPage = () => {
  return (
    <Root>
      <SEO title="Home Page" />

      <Navbar />

      <WidthLimiter>
        <TheBanner />
      </WidthLimiter>

      <Footer />
    </Root>
  );
};

export default IndexPage;
