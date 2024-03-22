import * as React from "react";

//@docusaurus
import { ColorModeProvider } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

//@theme
import Layout from "@theme/Layout";

//@pages
import LandingPage from "./LandingPage";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <LandingPage />
    </Layout>
  );
};

export default Home;
