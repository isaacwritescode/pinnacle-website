import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { ImageView } from "./ImageView";
import { TextView } from "./TextView";

const Approach = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const [currItemIdx, setCurrItemIdx] = useState(0);
  return (
    <Box bgcolor="white">
      <Box width="100%" maxWidth={1000} mx="auto" pb={12} id="approach">
        <Box width={{ xs: "90%", lg: "100%" }} m="auto">
          <Stack maxWidth={800} pt={{ xs: 8, md: 12 }} pb={2}>
            <Typography variant="h5">Approach</Typography>
            <Typography
              data-sal="slide-up"
              data-sal-delay="200"
              variant={md ? "h3" : "h4"}
              lineHeight={1.4}
            >
              Build and elevate your business with a distinctive strategy that
              aligns with your vision and creative content that consistently
              converts, leading to{" "}
              <Box display="inline" color="primary.main">
                increased reach and revenue.
              </Box>
            </Typography>
          </Stack>
          <Grid container spacing={8} columns={{ md: 12 }}>
            <Grid item md={6}>
              {md && <ImageView currItemIdx={currItemIdx} />}
            </Grid>
            <Grid item md={6}>
              <TextView setCurrItemIdx={setCurrItemIdx} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Approach;
