import React from "react";
import styled from "styled-components";

import colors from "root/styleutils/colors";
import SEO from "root/components/SEO";
import StaticBanner from "root/components/StaticBanner";
import WidthLimiter from "root/components/WidthLimiter";
import Navbar from "root/components/Navbar";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const HideOverflow = styled.div`
  overflow: hidden;
`;

const Purple = styled.div`
  background-color: ${colors.brand};
`;

const IndexPage = () => {
  return (
    <Root>
      <SEO title="Home Page" />

      <HideOverflow>
        <Navbar />

        <Purple>
          <WidthLimiter>
            <StaticBanner />
          </WidthLimiter>
        </Purple>
      </HideOverflow>

      {/*
      <HomePartners />

      <Footer />
      */}
    </Root>
  );
};

export default IndexPage;
