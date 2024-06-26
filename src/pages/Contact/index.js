import {
  Box,
  Button,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  Link,
  Modal,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { SOCIAL_LINKS } from "../../components/Footer/constants";
import { useTheme } from "@emotion/react";
import { useRef, useState } from "react";
import { Close, FilePresentOutlined } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const currTheme = useTheme();
  const md = useMediaQuery(currTheme.breakpoints.up("md"));

  const theme = createTheme({
    ...currTheme,
    mode: "dark",
    palette: {
      mode: "dark",
      primary: {
        main: "#ffffff",
        contrastText: "#000000",
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

  const [recieved, setRecieved] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2f5acja", "template_iqappiw", form.current, {
        publicKey: "Q13BUaYOE6QZh1kQe",
      })
      .then(
        () => {
          setRecieved(true);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <Stack sx={{ overflowY: "hidden" }}>
      {recieved && (
        <Modal open={recieved} onClose={() => setRecieved(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: 8,
              p: 4,
            }}
          >
            <Stack spacing={2} alignItems="start">
              <Box width="100%">
                <IconButton
                  onClick={() => setRecieved(false)}
                  sx={{ float: "right" }}
                >
                  <Close />
                </IconButton>
              </Box>
              <Typography variant="h3">We've recieved your message!</Typography>
              <Typography variant="body1" color="text.secondary">
                Thanks for reaching out, We'll get back to you real soon!
              </Typography>
              <Button
                onClick={() => setRecieved(false)}
                size="large"
                color="tertiary"
                variant="contained"
              >
                Got it
              </Button>
            </Stack>
          </Box>
        </Modal>
      )}
      <Checkbox
        checked={branding}
        name="branding"
        inputProps={{ "aria-label": "controlled" }}
        sx={{ opacity: 0, position: "absolute" }}
      />
      <Stack
        boxSizing="border-box"
        mx="auto"
        position="relative"
        mt="68px"
        height={{ xs: "auto", md: "calc(100vh - 68px)" }}
        alignItems="center"
        justifyContent="center"
        width={{ xs: "90%", md: "100%" }}
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
          columnSpacing={{ xs: 0, md: 12 }}
          rowSpacing={{ xs: 4, md: 0 }}
          container
          columns={{ xs: 6, md: 12 }}
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Grid item xs={6}>
            <Stack spacing={2} pl={{ md: "32%" }}>
              <Box
                pt={{ xs: 8, md: 0 }}
                data-sal="slide-up"
                data-sal-delay="100"
              >
                <Typography variant={md ? "h2" : "h3"}>
                  Ready to boost your brand's success?
                </Typography>
              </Box>
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
                        <Typography color="#000000" variant="body2">
                          {text}
                        </Typography>
                      </Stack>
                    </Link>
                  ))}
                </Stack>
              </ThemeProvider>
            </Stack>
          </Grid>
          <Grid item xs={6} height="100%">
            {md ? (
              <Stack
                alignItems="center"
                justifyContent="center"
                height="100%"
                sx={{
                  backgroundImage: "url(/images/hero/flattened.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              >
                <Box
                  width="100%"
                  boxSizing="border-box"
                  maxWidth={420}
                  data-sal="slide-up"
                  data-sal-delay="300"
                  p={6}
                  sx={{
                    bgcolor: "#ffffff10",
                    backdropFilter: "blur(3em)",
                    borderRadius: 8,
                    border: 1,
                    borderColor: "#ffffff50",
                  }}
                >
                  <form
                    name="contact"
                    enctype="multipart/form-data"
                    ref={form}
                    onSubmit={sendEmail}
                  >
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
                            color="text.secondary"
                            component="label"
                          >
                            {fileName}
                            <input
                              type="file"
                              name="file-upload"
                              hidden
                              onChange={handleFileChange}
                            />
                          </Typography>
                          <FilePresentOutlined color="primary" />
                        </Stack>
                        <Box>
                          <Typography varian="body2" color="text.secondary">
                            Services
                          </Typography>
                          <Stack mt={1} direction="row" gap={1} flexWrap="wrap">
                            <input
                              type="checkbox"
                              name="branding"
                              checked={branding}
                              hidden
                            />
                            <input
                              type="checkbox"
                              name="web-design"
                              checked={webDesign}
                              hidden
                            />
                            <input
                              type="checkbox"
                              name="ecommerce"
                              checked={ecommerce}
                              hidden
                            />
                            <input
                              type="checkbox"
                              name="digital-marketting"
                              checked={digitalMarketting}
                              hidden
                            />
                            <Chip
                              color="primary"
                              variant={branding ? "filled" : "outlined"}
                              onClick={() => setBranding(!branding)}
                              label="Branding & Strategy"
                            />
                            <Chip
                              color="primary"
                              variant={webDesign ? "filled" : "outlined"}
                              onClick={() => setWebDesign(!webDesign)}
                              label="Web Design"
                            />
                            <Chip
                              color="primary"
                              variant={ecommerce ? "filled" : "outlined"}
                              onClick={() => setEcommerce(!ecommerce)}
                              label="Ecommerce"
                            />
                            <Chip
                              color="primary"
                              variant={
                                digitalMarketting ? "filled" : "outlined"
                              }
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
                      </ThemeProvider>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        color="primary"
                        sx={{
                          width: "fit-content",
                        }}
                      >
                        Send message
                      </Button>
                    </Stack>
                  </form>
                </Box>
              </Stack>
            ) : (
              <Stack alignItems="center" justifyContent="center" height="100%">
                <Box
                  width="100%"
                  boxSizing="border-box"
                  p={6}
                  bgcolor="grey.100"
                  borderRadius={2}
                >
                  <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <Stack spacing={3} width="100%">
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
                          color="text.secondary"
                          component="label"
                        >
                          {fileName}
                          <input
                            type="file"
                            hidden
                            onChange={handleFileChange}
                          />
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
                            label="Branding & Strategy"
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
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        color="tertiary"
                      >
                        Send message
                      </Button>
                    </Stack>
                  </form>
                </Box>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Contact;
