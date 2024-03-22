import * as React from "react";

// @mui
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";

import pmdDashboardImage from "@site/static/img/pmd-dashboard.png";

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage: "linear-gradient(180deg, #00ffff00, #00ffff00)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Box
        id="image"
        sx={(theme) => ({
          mt: { xs: 8, sm: 10 },
          alignSelf: "center",
          height: { xs: 250, sm: 630 },
          width: "100%",
          backgroundImage: `url(${pmdDashboardImage})`,
          backgroundSize: "cover",
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
      />
    </Box>
  );
};

export default Hero;
