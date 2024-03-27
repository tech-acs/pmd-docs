import * as React from "react";

// @docusaurus
import { ColorModeProvider, useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

// @pages
import LandingPage from "@site/src/pages/LandingPage";

import Root from "@site/src/theme/Root";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Root>
        <LandingPage />
      </Root>
    </Layout>
  );
}
