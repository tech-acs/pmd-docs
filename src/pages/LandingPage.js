import * as React from "react";
import { useTheme } from "@mui/material/styles";

// @docusaurus
import muiTheme from "@site/src/components/MuiTheme";

// @mui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// @site
import Header from "@site/src/components/Header";
import Hero from "@site/src/components/Hero";
import Features from "@site/src/components/Features";
import ProductIntro from "@site/src/components/ProductIntro";

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

const muiLightTheme = createTheme(muiTheme.colorSchemes.light);
const muiDarkTheme = createTheme(muiTheme.colorSchemes.dark);

const LandingPage = () => {
  const theme = useTheme();

  // The current theme mode
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <ThemeProvider theme={isDarkMode ? muiDarkTheme : muiLightTheme}>
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
        <ProductIntro />
        <Box
          sx={{
            bgcolor: "background.transparent",
          }}
        >
          <Hero />
          <Features items={featureList} />{" "}
        </Box>{" "}
      </Container>
    </ThemeProvider>
  );
};

export default LandingPage;
