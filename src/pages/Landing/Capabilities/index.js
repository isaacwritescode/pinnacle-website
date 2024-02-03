import { Box, Grid, Stack, Typography } from "@mui/material";
import CAPABILITIES from "./constants";
import { useEffect, useState } from "react";
import ProgressBar from "react-customizable-progressbar";

const Capabilities = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const [value, setValue] = useState(0);

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
      height="100vh"
      overflow="hidden"
    >
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Stack pl={24} spacing={4}>
            <Typography variant="h5">Our Capabilities</Typography>
            <Stack spacing={4}>
              {CAPABILITIES.map(({ title }, idx) => (
                <Typography
                  variant="h2"
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
                  radius={14}
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
