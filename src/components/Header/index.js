import * as React from "react";

// @docusaurus
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// @mui
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

// @styles
import Heading from "@theme/Heading";
import styles from "@site/src/pages/index.module.css";

const Header = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Heading as="h1" className="hero__title">
        {siteConfig.title}
      </Heading>
      <p className="hero__subtitle"> {siteConfig.tagline} </p>
      <Box className={styles.buttons}></Box>
    </Container>
  );
};

export default Header;
