import * as React from "react";

//@docusaurus
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// @mui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//@site
import getTheme from "@site/src/components/Theme";
import Header from "@site/src/components/Header";
import Hero from "@site/src/components/Hero";
import Features from "@site/src/components/Features";

// @icons
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import SecureIcon from "@mui/icons-material/GppGood";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

const featureList = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Interactive Dashboards",
    description:
      "Seamlessly monitor and interpret essential performance metrics, enabling data-driven decision-making.",
  },
  {
    icon: <AssessmentIcon />,
    title: "Enhanced Reporting Capability",
    description:
      "Tailored to support printer-friendly output, this feature simplifies documentation and facilitates the sharing of performance results.",
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Intuitive User Interface",
    description:
      "Experience effortless navigation through a user-friendly interfaces, designed to enhance accessibility and reduce the learning curve.",
  },
  {
    icon: <AutorenewIcon />,
    title: "Streamlined Workflow",
    description:
      "This system introduces a structured approach, assigning clear tasks to each user, thereby enhancing performance and ensuring quality of data.",
  },
  {
    icon: <SecureIcon />,
    title: "Robust Data Security",
    description:
      "The platform maintains rigorous security protocols, ensuring compliance with established software development standards for data protection.",
  },
  {
    icon: <WorkspacesIcon />,
    title: "Flexible Collaborative Environment",
    description:
      "Foster teamwork and efficient management of performance data from any location, accessible on various devices for ultimate convenience.",
  },
];

const LandingPage = () => {
  const { siteConfig } = useDocusaurusContext();

  const [showCustomTheme, setShowCustomTheme] = React.useState(true);

  const { colorMode } = useColorMode();

  const defaultTheme = createTheme({});
  const muiLightTheme = createTheme(getTheme("light"));
  const muiDarkTheme = createTheme(getTheme("dark"));

  const muiCustomTheme = colorMode === "dark" ? muiDarkTheme : muiLightTheme;

  return (
    <ThemeProvider theme={showCustomTheme ? muiCustomTheme : defaultTheme}>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: {
            xs: 14,
            sm: 20,
          },
          pb: {
            xs: 8,
            sm: 12,
          },
        }}
      >
        <Header />
        <Hero />
        <Box
          sx={{
            bgcolor: "background.trasparent",
          }}
        >
          <Features items={featureList} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LandingPage;
