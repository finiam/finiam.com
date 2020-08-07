import React from "react";
import Link from "gatsby-link";

import SEO from "root/components/SEO";
import Navbar from "root/components/Navbar";
import WidthLimiter from "root/components/WidthLimiter";

const IndexPage = () => (
  <div>
    <SEO title="Home Page" />
    <Navbar />

    <WidthLimiter>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <br />
      <Link to="/blog">Check the blog</Link>
    </WidthLimiter>
  </div>
);

export default IndexPage;
