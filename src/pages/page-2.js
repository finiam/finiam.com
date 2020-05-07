import React from "react";
import Link from "gatsby-link";

import SEO from "root/components/SEO";
import Navbar from "root/components/Navbar";
import Layout from "root/components/Layout";

const SecondPage = () => (
  <div>
    <SEO title="Page 2" />
    <Navbar />

    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </div>
);

export default SecondPage;
