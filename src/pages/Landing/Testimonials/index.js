import { useTheme } from "@emotion/react";
import {
  Box,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Card from "./Card";
import "react-slideshow-image/dist/styles.css";
import TESTIMONIALS from "./constants";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  // Define a custom theme
  const theme = useTheme();
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
        <Stack textAlign="center" py={16}>
          <Typography variant="h1" color="text.primary">
            Testimonials
          </Typography>
          <Typography variant="body1" color="text.secondary">
            See what our clients have to say about our services
          </Typography>
        </Stack>
        <Marquee pauseOnHover pauseOnClick>
          {TESTIMONIALS.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </Marquee>
      </Box>
    </ThemeProvider>
  );
};

export default Testimonials;
