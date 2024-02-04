import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import CAPABILITIES from "./constants";
import { useEffect, useState } from "react";
import ProgressBar from "react-customizable-progressbar";
import { useTheme } from "@emotion/react";

const Capabilities = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const interval = setInterval(() => {
      if (value === 100) {
        setValue(0);
        if (currIdx === Object.keys(CAPABILITIES).slice(0, 4).length - 1)
          setCurrIdx(0);
        else setCurrIdx(currIdx + 1);
      } else setValue(value + 2);
    }, 100);
    return () => clearInterval(interval);
  }, [value, currIdx]);

  return (
    <Box
      bgcolor={CAPABILITIES[currIdx].bgColor}
      height={{ xs: "auto", md: "100vh" }}
      overflow="hidden"
      pt={{ xs: 8, md: 0 }}
      sx={{ transition: "all ease 0.3s" }}
    >
      <Grid container alignItems="center" columns={{ xs: 6, sm: 12 }}>
        <Grid item xs={6}>
          <Stack pl={{ xs: "5vw", md: "15vw" }} spacing={{ xs: 3, md: 4 }}>
            <Typography variant="h5">Our Capabilities</Typography>
            <Stack spacing={{ xs: 2, md: 4 }}>
              {CAPABILITIES.map(({ title }, idx) => (
                <Typography
                  variant={md ? "h3" : "h4"}
                  key={idx}
                  sx={{
                    opacity: currIdx === idx ? 1 : 0.4,
                  }}
                >
                  {title}
                </Typography>
              ))}
            </Stack>
            <Stack direction="row" alignItems="center">
              <Stack order={currIdx}>
                <ProgressBar
                  transition={value >= 1 ? "ease 0.3s" : "none"}
                  progress={value}
                  radius={12}
                  trackStrokeColor="#00000020"
                  strokeColor="#000000"
                  strokeWidth={6}
                  trackStrokeWidth={6}
                />
              </Stack>
              <Stack
                mx={1}
                order={(currIdx + 1) % 4}
                width={8}
                height={8}
                bgcolor="#00000020"
                borderRadius={100}
              />
              <Stack
                mx={1}
                order={(currIdx + 2) % 4}
                width={8}
                height={8}
                bgcolor="#00000020"
                borderRadius={100}
              />
              <Stack
                mx={1}
                order={(currIdx + 3) % 4}
                width={8}
                height={8}
                bgcolor="#00000020"
                borderRadius={100}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <img src={CAPABILITIES[currIdx].thumbnail} width="100%" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Capabilities;
