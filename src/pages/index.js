import React from "react";
import styled from "styled-components";

import colors from "root/styleutils/colors";
import SEO from "root/components/SEO";
import StaticBanner from "root/components/StaticBanner";
import WidthLimiter from "root/components/WidthLimiter";
import Navbar from "root/components/Navbar";
import HomeWhatWeDo from "root/sections/HomeWhatWeDo";
import Footer from "root/components/Footer";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const HideOverflow = styled.div`
  overflow: hidden;
`;

const PurpleHeader = styled.header`
  background-color: ${colors.brand};
`;

const IndexPage = () => {
  return (
    <Root>
      <SEO title="Home Page" />

      <HideOverflow>
        <Navbar />

        <PurpleHeader>
          <WidthLimiter>
            <StaticBanner />
          </WidthLimiter>
        </PurpleHeader>
      </HideOverflow>

      <main>
        <HomeWhatWeDo />
      </main>

      <Footer />

      {/*
      <HomePartners />


      */}
    </Root>
  );
};

export default IndexPage;
