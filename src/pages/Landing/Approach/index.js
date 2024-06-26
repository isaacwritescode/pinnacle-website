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
    <Box bgcolor="white" pb={12} id="approach">
      <Box width="100%" maxWidth={1000} mx="auto">
        <Box width={{ xs: "90%", lg: "100%" }} m="auto">
          <Stack maxWidth={800} pt={{ xs: 8, md: 12 }} pb={2}>
            <Typography variant="h5">Approach</Typography>
            <Box data-sal="slide-up" data-sal-delay="200">
              <Typography variant={md ? "h3" : "h4"} lineHeight={1.4}>
                Elevate your business with a unique strategy and compelling
                content that drives growth,{" "}
                <Box display="inline" color="primary.main">
                  expanding your reach and revenue.
                </Box>
              </Typography>
            </Box>
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
