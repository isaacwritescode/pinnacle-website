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
      <Box bgcolor="#6B30BB" pb={16}>
        <Box width={{ xs: "90%", md: "70%" }} mx="auto">
          <Stack textAlign="center" pt={24} pb={{ xs: 8, md: 16 }}>
            <Box position="relative" textAlign="center">
              <Typography variant="h1" color="text.primary">
                Reviews
              </Typography>
              <Typography
                variant="h1"
                color="text.primary"
                sx={{
                  fontSize: 240,
                  color: "transparent" /* Make the text color transparent */,
                  "-webkit-text-stroke": "1px #ffffff10",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: -24,
                }}
              >
                Reviews
              </Typography>
              <Typography varaint="body2" color="text.secondary">
                See what our clients have to say about our services
              </Typography>
            </Box>
          </Stack>
          {md || (
            <Stack spacing={4}>
              {TESTIMONIALS.map((item, idx) => (
                <Card key={idx} {...item} />
              ))}
            </Stack>
          )}
        </Box>
        {md && (
          <Marquee pauseOnHover pauseOnClick>
            {TESTIMONIALS.map((item, idx) => (
              <Card key={idx} {...item} />
            ))}
          </Marquee>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Testimonials;
