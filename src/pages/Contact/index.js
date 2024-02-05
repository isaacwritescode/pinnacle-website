import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { SOCIAL_LINKS } from "../../components/Footer/constants";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const Contact = () => {
  const currTheme = useTheme();
  const theme = createTheme({
    ...currTheme,
    palette: {
      primary: {
        main: "#000000",
        contrastText: "#ffffff",
      },
    },
  });
  return (
    <Box sx={{ overflowY: "hidden" }}>
      <Box
        py={{ xs: 16, md: 8 }}
        boxSizing="border-box"
        maxWidth={1000}
        mx="auto"
        position="relative"
        width={{ xs: "90%", md: "100%" }}
        height={{ xs: "auto", md: "100vh" }}
      >
        <Box
          display={{ xs: "none", md: "block" }}
          position="absolute"
          bottom={-520}
          left={-200}
          zIndex={-1}
        >
          <img src="/images/contact/spline.png" width="90%" />
        </Box>
        <Grid
          spacing={{ xs: 0, md: 24 }}
          container
          columns={{ xs: 6, md: 12 }}
          alignItems="center"
        >
          <Grid item xs={6}>
            <Stack spacing={2} pb={4}>
              <Typography variant="h2">Would love to hear from you</Typography>
              <Typography variant="body2" color="text.secondary">
                We’re here to help. Drop your requirements in detail here so get
                back asap!
              </Typography>
              <Stack direction="row" spacing={2}>
                {SOCIAL_LINKS.map(({ icon, url }, idx) => (
                  <Link href={url}>
                    <Stack
                      data-sal="slide-up"
                      data-sal-delay={idx * 100}
                      key={idx}
                      p={1}
                      border={2}
                      borderColor="#00000020"
                      borderRadius={100}
                      sx={{
                        transition: "all ease 0.3s",
                        cursor: "pointer",
                        "&:hover": {
                          borderColor: "#000000",
                        },
                      }}
                    >
                      {icon}
                    </Stack>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Box
              my={8}
              maxWidth={900}
              p={8}
              sx={{
                bgcolor: { xs: "#00000010", md: "#ffffff10" },
                backdropFilter: "blur(3em)",
              }}
            >
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <Stack spacing={4} borderRadius={2} width="100%">
                  <ThemeProvider theme={theme}>
                    <Stack direction="row" spacing={2}>
                      <TextField
                        sx={{ width: "100%" }}
                        label="First Name"
                        name="first-name"
                        variant="standard"
                        required
                      />
                      <TextField
                        sx={{ width: "100%" }}
                        label="Last Name"
                        name="last-name"
                        variant="standard"
                        required
                      />
                    </Stack>
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      variant="standard"
                      required
                    />
                    <TextField
                      label="Message (Optional)"
                      name="message"
                      rows={3}
                      variant="standard"
                      multiline
                    />
                  </ThemeProvider>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ width: "fit-content" }}
                  >
                    Send message
                  </Button>
                </Stack>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
