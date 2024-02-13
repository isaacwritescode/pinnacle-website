import {
  Box,
  Button,
  Checkbox,
  Chip,
  Grid,
  Link,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { SOCIAL_LINKS } from "../../components/Footer/constants";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { FilePresentOutlined } from "@mui/icons-material";

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
  const [fileName, setFileName] = useState("File Upload");
  const [digitalMarketting, setDigitalMarketting] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Stack sx={{ overflowY: "hidden" }}>
      <Checkbox
        checked={branding}
        name="branding"
        inputProps={{ "aria-label": "controlled" }}
        sx={{ opacity: 0, position: "absolute" }}
      />
      <Stack
        py={{ xs: 16, md: 2 }}
        boxSizing="border-box"
        maxWidth={1000}
        mx="auto"
        position="relative"
        width={{ xs: "90%", md: "100%" }}
        height={{ xs: "auto", md: "100vh" }}
        alignItems="center" justifyContent="center"
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
          spacing={{ xs: 0, md: 12 }}
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
              <ThemeProvider theme={theme}>
                <Stack spacing={2}>
                  {SOCIAL_LINKS.map(({ icon, url, text }, idx) => (
                    <Link href={url} target="_blank">
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Stack
                          data-sal="slide-up"
                          data-sal-delay={idx * 100}
                          key={idx}
                          color="tertiary.main"
                          p={1}
                          border={2}
                          borderColor="#00000020"
                          borderRadius={100}
                          sx={{
                            transition: "all ease 0.3s",
                            cursor: "pointer",
                            "&:hover": {
                              borderColor: "black",
                            },
                          }}
                        >
                          {icon}
                        </Stack>
                        <Typography variant="body2">{text}</Typography>
                      </Stack>
                    </Link>
                  ))}
                </Stack>
              </ThemeProvider>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Box
              my={8}
              maxWidth={900}
              p={6}
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
                <Stack spacing={3} borderRadius={2} width="100%">
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
                      component="label"
                      variant="standard"
                      required
                    />
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ cursor: "pointer" }}
                      borderBottom={1}
                      borderColor="grey.500"
                      py={1}
                    >
                      <Typography
                        variant="body1"
                        color="grey.600"
                        component="label"
                      >
                        {fileName}
                        <input type="file" hidden onChange={handleFileChange} />
                      </Typography>
                      <FilePresentOutlined color="tertiary" />
                    </Stack>
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
                    <TextField
                      label="Message"
                      name="message"
                      type="text"
                      variant="standard"
                      multiline
                      required
                    />
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
      </Stack>
    </Stack>
  );
};

export default Contact;
