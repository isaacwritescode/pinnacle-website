import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

const Hero = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return md ? (
    <Box>
      <ParallaxProvider>
        <Box position="absolute" top={0} zIndex={-1}>
          <img src="/images/hero/bg.svg" alt="background" width="100%" />
        </Box>
        <Box position="absolute" top={0} zIndex={-1}>
          <Parallax speed={-100}>
            <img
              src="/images/hero/mountains.svg"
              alt="mountain with hills"
              width="100%"
            />
          </Parallax>
        </Box>
      </ParallaxProvider>
      <Box pt={32} pb={48} zIndex={99} position="relative">
        <Box position="absolute" bottom={-12} zIndex={-1}>
          <img
            src="/images/hero/hills-fit.svg"
            alt="mountain with hills"
            width="100%"
          />
        </Box>
        <Box width={{ xs: "90%", md: "70%" }} mx="auto">
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
              <Link href="/contact">
                <Button variant="contained" size="medium">
                  Start a project
                </Button>
              </Link>
            </Box>
          </Stack>
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
            <Button variant="contained" size="medium">
              Start a project
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
