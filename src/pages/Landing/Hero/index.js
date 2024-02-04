import { Box, Button, Stack, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/hero/bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "visible",
      }}
    >
      <Box maxWidth={1000} mx="auto" pt={32} pb={48}>
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
          <Box pt={4}>
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
