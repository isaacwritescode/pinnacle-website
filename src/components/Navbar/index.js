import { Box, Button, Stack } from "@mui/material";

const Navbar = ({ userHasScrolled }) => {
  return (
    <Box
      position="fixed"
      top={0}
      width="100%"
      zIndex={999}
      bgcolor={userHasScrolled ? "white" : "transparent"}
      sx={{
        transition: "all ease 0.3s",
        boxShadow: userHasScrolled && "0 0 50px rgb(0, 0, 0, 0.2)",
      }}
    >
      <Box width={{ xs: "90%", md: "70%" }} m="auto" py={1}>
        <Stack justifyContent="space-between" direction="row">
          <img
            src="/images/logos/logo+wordmark-white.svg"
            alt="pinnacle-logo"
            height={48}
            style={{
              filter: userHasScrolled && "grayscale(1) invert(1)",
            }}
          />
          <Button
            variant="outlined"
            size="small"
            color={"secondary"}
            sx={{ filter: userHasScrolled && "grayscale(1) invert(1)" }}
          >
            Contact
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
