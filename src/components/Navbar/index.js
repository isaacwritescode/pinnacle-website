import {
  Box,
  Button,
  Stack,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { QUICK_LINKS } from "../Footer/constants";
import { Close, Menu } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const Navbar = ({ isMenuVisible, userHasScrolled, setIsMenuVisible }) => {
  const { pathname } = useLocation();

  const condition = userHasScrolled && !isMenuVisible;
  if (pathname === "/")
    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}
        bgcolor={condition ? "white" : "transparent"}
        sx={{
          transition: "all ease 0.3s",
          boxShadow: condition && "0 0 50px rgb(0, 0, 0, 0.2)",
        }}
      >
        <Box width={{ xs: "90%", md: "70%" }} mx="auto" py={1}>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Box
              onClick={() => setIsMenuVisible(false)}
              data-sal="slide-up"
              data-sal-delay="100"
            >
              <Link href="/">
                <img
                  src={condition ? "/images/logos/logo-color-black.svg": "/images/logos/logo-color-free.svg"}
                  alt="pinnacle-logo"
                  height={48}
                />
              </Link>
            </Box>
            <Box
              display={{ xs: "none", md: "block" }}
              data-sal="slide-up"
              data-sal-delay="100"
            >
              <Stack direction="row" spacing={3}>
                {QUICK_LINKS.map(({ href, title }, idx) => (
                  <Link
                    href={href}
                    sx={{
                      textDecoration: "none",
                      opacity: 0.5,
                      "&:hover": { opacity: 1 },
                      filter: condition && "grayscale(1) invert(1)",
                    }}
                  >
                    <Typography
                      data-sal="slide-up"
                      data-sal-delay={idx * 100}
                      variant="body1"
                      color="white"
                    >
                      {title}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Box>
            <Box
              display={{ xs: "none", md: "block" }}
              data-sal="slide-up"
              data-sal-delay="100"
            >
              <Link href="contact">
                <Button
                  variant="outlined"
                  size="small"
                  color={"secondary"}
                  sx={{ filter: condition && "grayscale(1) invert(1)" }}
                >
                  Contact
                </Button>
              </Link>
            </Box>
            <Box
              display={{ xs: "block", md: "none" }}
              data-sal="slide-up"
              data-sal-delay="100"
            >
              <Box
                sx={{
                  filter: condition && "grayscale(1) invert(1)",
                }}
              >
                <IconButton
                  sx={{ color: "white" }}
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                >
                  {isMenuVisible ? <Close /> : <Menu />}
                </IconButton>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  else {
    return (
      <Box
        position="fixed"
        top={0}
        width="100%"
        zIndex={999}
        bgcolor="white"
        sx={{
          transition: "all ease 0.3s",
          boxShadow: condition && "0 0 50px rgb(0, 0, 0, 0.2)",
        }}
      >
        <Box width={{ xs: "90%", md: "70%" }} m="auto" py={1}>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Box
              onClick={() => setIsMenuVisible(false)}
              data-sal="slide-up"
              data-sal-delay="100"
            >
              <Link href="/">
                <img
                  src="/images/logos/logo-color-black.svg"
                  alt="pinnacle-logo"
                  height={48}
                />
              </Link>
            </Box>
            <Box
              display={{ xs: "none", md: "block" }}
              data-sal="slide-up"
              data-sal-delay="100"
            >
              <Stack direction="row" spacing={3}>
                {QUICK_LINKS.map(({ href, title }, idx) => (
                  <Link
                    href={href}
                    sx={{
                      textDecoration: "none",
                      opacity: 0.5,
                      "&:hover": { opacity: 1 },
                      filter: "grayscale(1) invert(1)",
                    }}
                  >
                    <Typography
                      data-sal="slide-up"
                      data-sal-delay={idx * 100}
                      variant="body1"
                      color="white"
                    >
                      {title}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Box>
            <Box
              display={{ xs: "none", md: "block" }}
              data-sal="slide-up"
              data-sal-delay="100"
            >
              <Button
                variant="outlined"
                size="small"
                color={"secondary"}
                sx={{ filter: "grayscale(1) invert(1)" }}
              >
                Contact
              </Button>
            </Box>
            <Box
              display={{ xs: "block", md: "none" }}
              data-sal="slide-up"
              data-sal-delay="100"
            >
              <Box
                sx={{
                  filter: "grayscale(1) invert(1)",
                }}
              >
                <IconButton
                  sx={{ color: "white" }}
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                >
                  {isMenuVisible ? <Close /> : <Menu />}
                </IconButton>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  }
};

export default Navbar;
