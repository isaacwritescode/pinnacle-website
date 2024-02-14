import { useTheme } from "@emotion/react";
import {
  Box,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Card from "./Card";
import "react-slideshow-image/dist/styles.css";
import TESTIMONIALS from "./constants";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  // Define a custom theme
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const darkTheme = createTheme({
    ...theme,
    palette: {
      mode: "dark", // Set the theme mode to dark
      primary: theme.palette.primary,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="#6B30BB" pb={16} overflow="hidden">
        <Box width={{ xs: "90%", md: "70%" }} mx="auto">
          <Stack textAlign="center" pt={24} pb={{ xs: 8, md: 16 }}>
            <Box position="relative" textAlign="center">
              <Typography
                variant="h1"
                data-sal="slide-up"
                data-sal-delay="100"
                color="text.primary"
              >
                Reviews
              </Typography>
              <Typography
                variant="h1"
                color="text.primary"
                sx={{
                  fontSize: 240,
                  color: "transparent" /* Make the text color transparent */,
                  "-webkit-text-stroke": "1px #ffffff20",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: -24,
                }}
              >
                Reviews
              </Typography>
              <Typography
                data-sal="slide-up"
                data-sal-delay="200"
                varaint="body2"
                color="text.secondary"
              >
                See what our clients have to say about our services
              </Typography>
            </Box>
          </Stack>
          {md || (
            <Stack spacing={4}>
              {TESTIMONIALS.map((item, idx) => (
                <Box key={idx} data-sal="slide-up" data-sal-delay={idx * 100}>
                  <Card {...item} />
                </Box>
              ))}
            </Stack>
          )}
        </Box>
        {md && (
          <Marquee pauseOnHover pauseOnClick>
            {TESTIMONIALS.map((item, idx) => (
              <Box key={idx} mx={2}>
                <Card {...item} />
              </Box>
            ))}
          </Marquee>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Testimonials;
