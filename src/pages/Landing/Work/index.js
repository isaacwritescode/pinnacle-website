import { useTheme } from "@emotion/react";
import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import WORK from "./constants";
import Card from "./Card";

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
      <Box bgcolor="#212123" py={16}>
        <Typography textAlign="center" variant="h1" color="text.primary">
          Work
        </Typography>
        <Box width={{ xs: "90%", md: "70%" }} mt={8} mx="auto">
          <Grid
            container
            spacing={{ xs: 4, md: 8 }}
            columns={{ xs: 6, sm: 12 }}
          >
            {WORK.map((item, idx) => (
              <Grid item key={idx} xs={6}>
                <Card {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Work;
