import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { SOCIAL_LINKS, QUICK_LINKS } from "./constants";

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
        <Box width={{ xs: "90%", md: "70%" }} mx="auto" py={{ xs: 8, md: 24 }}>
          <Grid container columns={{ xs: 3, sm: 6, lg: 12 }} spacing={12}>
            <Grid item xs={3}>
              <Stack maxWidth={300}>
                <Box data-sal="slide-up" data-sal-delay={100}>
                  <img
                    src="/images/logos/logo+wordmark.svg"
                    width="100%"
                    alt="pinnacle-logo"
                  />
                </Box>
                <Typography
                  data-sal="slide-up"
                  data-sal-delay={200}
                  variant="body2"
                  color="text.secondary"
                >
                  ©2024 Pinnacle Brand Solution. All rights reserved.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={5} pt={4}>
                <Typography variant="h6" color="text.primary">
                  QUICK LINKS
                </Typography>

                {QUICK_LINKS.map(({ href, title }, idx) => (
                  <Link href={href}>
                    <Typography
                      data-sal="slide-up"
                      data-sal-delay={idx * 100}
                      variant="h6"
                      color="text.secondary"
                    >
                      {title}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={5} pt={4}>
                <Typography variant="h6" color="text.primary">
                  OFFICES
                </Typography>
                <Typography
                  data-sal="slide-up"
                  data-sal-delay={100}
                  variant="h6"
                  color="text.secondary"
                >
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
                      <Link href={url}>
                        <Stack
                          data-sal="slide-up"
                          data-sal-delay={idx * 100}
                          key={idx}
                          color="white"
                          p={1}
                          border={2}
                          borderColor="#ffffff20"
                          borderRadius={100}
                          sx={{
                            transition: "all ease 0.3s",
                            cursor: "pointer",
                            "&:hover": {
                              borderColor: "white",
                            },
                          }}
                        >
                          {icon}
                        </Stack>
                      </Link>
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