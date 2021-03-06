import React from "react";
import styled from "styled-components";

import colors from "root/styleutils/colors";
import SEO from "root/components/SEO";
import StaticBanner from "root/components/StaticBanner";
import WidthLimiter from "root/components/WidthLimiter";
import Navbar from "root/components/Navbar";
import HomeWhatWeDo from "root/sections/HomeWhatWeDo";
import Footer from "root/components/Footer";
import HomePartners from "root/sections/HomePartners";

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
      <SEO
        title="Finiam"
        description="We are finiam. Improving people's lives by untangling the financial world."
      />

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

        <HomePartners />
      </main>

      <Footer />
    </Root>
  );
};

export default IndexPage;
