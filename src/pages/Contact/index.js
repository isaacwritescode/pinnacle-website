import {
  Box,
  Button,
  Checkbox,
  Chip,
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
import { useState } from "react";

const Contact = () => {
  const currTheme = useTheme();
  const theme = createTheme({
    ...currTheme,
    palette: {
      primary: {
        main: "#000000",
        contrastText: "#ffffff",
      },
      tertiary: {
        main: "#511A89",
        contrastText: "#ffffff",
      },
    },
  });

  const [branding, setBranding] = useState(false);
  const [webDesign, setWebDesign] = useState(false);
  const [ecommerce, setEcommerce] = useState(false);
  const [digitalMarketting, setDigitalMarketting] = useState(false);

  return (
    <Box sx={{ overflowY: "hidden" }}>
      <Checkbox
        checked={branding}
        name="branding"
        inputProps={{ "aria-label": "controlled" }}
        sx={{ opacity: 0, position: "absolute" }}
      />
      <Box
        py={{ xs: 16, md: 2 }}
        boxSizing="border-box"
        maxWidth={1000}
        mx="auto"
        position="relative"
        width={{ xs: "90%", md: "100%" }}
        height={{ xs: "auto", md: "100vh" }}
      >
        {/* <Box
          display={{ xs: "none", md: "block" }}
          position="absolute"
          bottom={-520}
          left={-200}
          zIndex={-1}
        >
          <img alt="spline" src="/images/contact/spline.png" width="90%" />
        </Box> */}
        <Grid
          spacing={{ xs: 0, md: 24 }}
          container
          columns={{ xs: 6, md: 12 }}
          alignItems="center"
        >
          <Grid item xs={6}>
            <Stack spacing={2}>
              <Typography data-sal="slide-up" data-sal-delay="100" variant="h2">
                Ready to boost your brand's success?
              </Typography>
              <Typography
                data-sal="slide-up"
                data-sal-delay="200"
                variant="body2"
                color="text.secondary"
              >
                Reach out to us today and let's start turning your marketing
                dreams into reality. Fill out the form below, and we'll be in
                touch shortly to discuss how we can elevate your business to new
                heights
              </Typography>
              <Stack direction="row" spacing={2}>
                {SOCIAL_LINKS.map(({ icon, url }, idx) => (
                  <Link href={url}>
                    <Stack
                      data-sal="slide-up"
                      data-sal-delay={idx * 100 + 300}
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
              data-sal="slide-up"
              data-sal-delay="300"
              sx={{
                bgcolor: { xs: "#00000010", md: "transparent" },
                backdropFilter: "blur(3em)",
                border: 1,
                borderColor: "grey.300",
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
                    <Box>
                      <Typography varian="body2" color="text.secondary">
                        Services
                      </Typography>
                      <Stack mt={1} direction="row" gap={1} flexWrap="wrap">
                        <Chip
                          color="tertiary"
                          variant={branding ? "filled" : "outlined"}
                          onClick={() => setBranding(!branding)}
                          label="Branding"
                        />
                        <Chip
                          color="tertiary"
                          variant={webDesign ? "filled" : "outlined"}
                          onClick={() => setWebDesign(!webDesign)}
                          label="Web Design"
                        />
                        <Chip
                          color="tertiary"
                          variant={ecommerce ? "filled" : "outlined"}
                          onClick={() => setEcommerce(!ecommerce)}
                          label="Ecommerce"
                        />
                        <Chip
                          color="tertiary"
                          variant={digitalMarketting ? "filled" : "outlined"}
                          onClick={() =>
                            setDigitalMarketting(!digitalMarketting)
                          }
                          label="Digital Marketting"
                        />
                      </Stack>
                    </Box>
                    {/* <FormGroup>
                      <FormControlLabel
                        control={<Checkbox name="branding" />}
                        label="Branding"
                      />
                      <FormControlLabel
                        control={<Checkbox name="branding" />}
                        label="Web Design"
                      />
                      <FormControlLabel
                        control={<Checkbox name="branding" />}
                        label="Ecommerce"
                      />
                      <FormControlLabel
                        control={<Checkbox name="branding" />}
                        label="Digital Marketting"
                      />
                    </FormGroup> */}
                    <TextField
                      label="How did you hear from us? (Optional)"
                      name="referral-source"
                      variant="standard"
                    />
                  </ThemeProvider>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    color="tertiary"
                    sx={{
                      width: {
                        md: "fit-content",
                      },
                    }}
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
