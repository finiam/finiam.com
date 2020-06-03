import React from "react";
import Link from "gatsby-link";

import SEO from "root/components/SEO";
import Navbar from "root/components/Navbar";
import Layout from "root/components/Layout";

const IndexPage = () => (
  <div>
    <SEO title="Home Page" />
    <Navbar />

    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <br />
      <Link to="/blog">Check the blog</Link>
    </Layout>
  </div>
);

export default IndexPage;
