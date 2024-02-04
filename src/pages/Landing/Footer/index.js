import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import SOCIAL_LINKS from "./constants";

const Footer = () => {
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
      <Box bgcolor="#212123">
        <Box width={{ xs: "90%", md: "70%" }} mx="auto" py={24}>
          <Grid container columns={{ xs: 3, sm: 6, lg: 12 }} spacing={12}>
            <Grid item xs={3}>
              <Stack maxWidth={300}>
                <img src="/images/logos/logo+wordmark.svg" width="100%" alt="pinnacle-logo" />
                <Typography variant="body2" color="text.secondary">
                  ©2024 Pinnacle Brand Solution. All rights reserved.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={5} pt={4}>
                <Typography variant="h6" color="text.primary">
                  QUICK LINKS
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Work
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Capabilities
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Approach
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Contact
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={5} pt={4}>
                <Typography variant="h6" color="text.primary">
                  OFFICES
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Canada
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={5} pt={4}>
                <Stack spacing={2}>
                  <Typography variant="h6" color="text.primary">
                    SOCIALS
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {SOCIAL_LINKS.map(({ icon, url }, idx) => (
                      <Stack
                        key={idx}
                        color="white"
                        border={1}
                        p={1}
                        borderColor="#ffffff20"
                        borderRadius={100}
                      >
                        {icon}
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
                <Button variant="contained" size="large">
                  Start a project
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
