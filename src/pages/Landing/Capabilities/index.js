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
      overflow="hidden"
      sx={{ transition: "all ease 0.3s" }}
      id="capabilities"
    >
      <Stack justifyContent="center" width={{ xs: "90%", md: "70%" }} mx="auto">
        <Grid container alignItems="center" py={16} columns={{ xs: 6, sm: 12 }}>
          <Grid item xs={6}>
            <Stack spacing={{ xs: 3, md: 4 }}>
              <Typography data-sal="slide-up" data-sal-delay="100" variant="h5">
                Our Capabilities
              </Typography>
              <Stack spacing={{ xs: 2, md: 4 }}>
                {CAPABILITIES.map(({ title }, idx) => (
                  <Box
                    data-sal="zoom-out"
                    data-sal-delay={idx * 100}
                    key={idx}
                    sx={{ cursor: "pointer" }}
                  >
                    <Typography
                      onClick={() => {
                        setValue(0);
                        setCurrIdx(idx);
                      }}
                      variant={md ? "h3" : "h4"}
                      sx={{
                        opacity: currIdx === idx ? 1 : 0.4,
                      }}
                    >
                      {title}
                    </Typography>
                  </Box>
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
            <img
              src={CAPABILITIES[currIdx].thumbnail}
              width="100%"
              alt={CAPABILITIES[currIdx].title}
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Capabilities;
