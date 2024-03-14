import { useTheme } from "@emotion/react";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return md ? (
    <Box id="1">
      <Box height={"100vh"} id="2" position="relative">
        <Box position="fixed" top={0} left={0} right={0} zIndex={0}>
          <Parallax speed={-20}>
            <Box py={24} mx="auto">
              <Stack
                alignItems="center"
                spacing={2}
                maxWidth={600}
                mx="auto"
                textAlign="center"
              >
                <Typography variant="h2" color="white">
                  Reach your pinnacle
                </Typography>
                <Typography variant="body1" color="white">
                  We're passionate about helping businesses reach their peak
                  potential, and we're confident that we can make it{" "}
                </Typography>
                <Box pt={4} data-sal="zoom-out" data-sal-delay="500">
                  <Link to="/contact">
                    <Button variant="contained" size="medium">
                      Start a project
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Parallax>
        </Box>
        <Box position="absolute" top={0} zIndex={-3}>
          <img src="/images/hero/bg.svg" alt="background" width="100%" />
        </Box>
        <Box position="fixed" bottom={0} zIndex={-2}>
          <Parallax speed={-10}>
            <img
              src="/images/hero/mountains.svg"
              alt="mountain with hills"
              width="100%"
            />
          </Parallax>
        </Box>
        <Box
          position="absolute"
          bottom={-12}
          zIndex={1}
          sx={{ pointerEvents: "none" }}
        >
          <img
            src="/images/hero/hills-fit.svg"
            alt="mountain with hills"
            width="100%"
          />
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        backgroundImage: "url(/images/hero/full.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        overflow: "visible",
      }}
    >
      <Box width={{ xs: "90%", md: "70%" }} mx="auto" pt={32} pb={48}>
        <Stack
          alignItems="center"
          spacing={2}
          maxWidth={600}
          mx="auto"
          textAlign="center"
        >
          <Typography
            data-sal="zoom-out"
            data-sal-delay="300"
            variant="h2"
            color="white"
          >
            Reach your pinnacle
          </Typography>
          <Typography
            data-sal="zoom-out"
            data-sal-delay="400"
            variant="body1"
            color="white"
          >
            We're passionate about helping businesses reach their peak
            potential, and we're confident that we can make it{" "}
          </Typography>
          <Box pt={4} data-sal="zoom-out" data-sal-delay="500">
            <Link to="/contact">
              <Button variant="contained" size="medium">
                Start a project
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
