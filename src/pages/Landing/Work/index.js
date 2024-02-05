import { useTheme } from "@emotion/react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import WORK from "./constants";
import Card from "./Card";
import { Masonry } from "@mui/lab";

const Work = () => {
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
      <Box bgcolor="#212123" pt={24} pb={12} id="work" overflow="hidden">
        <Box position="relative" textAlign="center">
          <Typography
            variant="h1"
            color="text.primary"
            data-sal="slide-up"
            data-sal-delay="100"
          >
            Work
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
            Work
          </Typography>
          <Typography
            data-sal="slide-up"
            data-sal-delay="200"
            varaint="body2"
            color="text.secondary"
          >
            The work we do, the people we help
          </Typography>
        </Box>
        <Box width={{ xs: "90%", md: "70%" }} mt={8} mx="auto">
          <Masonry columns={{ xs: 1, sm: 2 }}>
            {WORK.map((item, idx) => (
              <Box
                key={idx}
                data-sal="slide-up"
                data-sal-delay={idx * 100}
                px={{ sm: 1, md: 2 }}
                pt={idx === 1 && 4}
              >
                <Card {...item} />
              </Box>
            ))}
          </Masonry>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Work;
