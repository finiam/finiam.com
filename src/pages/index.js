import React from "react";
import styled from "styled-components";

import colors from "root/styleutils/colors";
import SEO from "root/components/SEO";
import TheBanner from "root/components/TheBanner";
import WidthLimiter from "root/components/WidthLimiter";
import Footer from "root/components/Footer";
import Navbar from "root/components/Navbar";
import HomePartners from "root/sections/HomePartners";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Purple = styled.div`
  background-color: ${colors.brand};
`;

const IndexPage = () => {
  return (
    <Root>
      <SEO title="Home Page" />

      <Navbar />

      <WidthLimiter>
        <TheBanner />
      </WidthLimiter>
    
      <Purple>
        <WidthLimiter>
          <TheBanner />
        </WidthLimiter>
      </Purple>

      <HomePartners />

      <Footer />
    </Root>
  );
};

export default IndexPage;
