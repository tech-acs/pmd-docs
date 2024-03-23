import * as React from "react";

import clsx from "clsx";

// @mui
import { alpha } from "@mui/material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

import kpiManagementAnimation from "@site/static/img/lotties/kpi-management.json";
import reportingAnimation from "@site/static/img/lotties/reporting.json";
import progressionAnimation from "@site/static/img/lotties/progression.json";

const FeatureList = [
  {
    title: "Robust KPI Management",
    animation: kpiManagementAnimation,
    description: (
      <>
        Manage your Key Performance Indicators using intuitive interfaces and in
        -app formulas.Track essential data for precise score calculation.Set
        baselines and targets, and track performance to make more informed
        decisions.{" "}
      </>
    ),
  },
  {
    title: "Initiatives Tracking",
    animation: progressionAnimation,
    description: (
      <>
        Monitor initiatives with clear milestones and diligently track the
        progression of activities to guarantee that Key Performance Indicators
        and strategic goals are achieved.{" "}
      </>
    ),
  },
  {
    title: "Advanced Visual and Reporting",
    animation: reportingAnimation,
    description: (
      <>
        Gain insights into performance trends, identify areas for
        improvement.Generate detailed reports with just a few clicks.{" "}
      </>
    ),
  },
];

function Feature({ animation, title, description }) {
  const commonStyles = {
    my: 0.5,
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
  };

  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Player
          autoplay
          loop
          src={animation}
          style={{ height: "200px", width: "200px" }}
        ></Player>
      </div>
      <div className="text--center padding-horiz--md">
        <Typography
          color="text.primary"
          variant="h6"
          fontWeight="bold"
          sx={{
            ...commonStyles,
            WebkitLineClamp: 2,
            lineHeight: "1.5em",
            minHeight: "3.0em",
            maxHeight: "3.0em",
          }}
        >
          {title}{" "}
        </Typography>
        <Typography color="text.secondary" variant="body2" sx={commonStyles}>
          {description}{" "}
        </Typography>{" "}
      </div>{" "}
    </div>
  );
}

export default function ProdcutIntro() {
  return (
    <Box
      id="features"
      sx={(theme) => ({
        width: "100%",
        marginTop: 8,
        padding: 4,
        backgroundImage: "linear-gradient(180deg, #00ffff00, #00ffff00)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        outline: "1px solid",
        outlineColor:
          theme.palette.mode === "light"
            ? alpha("#BFCCD9", 0.5)
            : alpha("#9CCCFC", 0.1),
        boxShadow:
          theme.palette.mode === "light"
            ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
            : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
      })}
    >
      <div className="row">
        {" "}
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}{" "}
      </div>{" "}
    </Box>
  );
}
