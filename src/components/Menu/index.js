import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  Link,
} from "@mui/material";
import { QUICK_LINKS } from "../Footer/constants";

const Menu = ({ setIsMenuVisible }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  if (!md)
    return (
      <>
        <Stack
          sx={{
            position: "fixed",
            top: 0,
            background: "#1A1C1E",
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 98,
            animation: "pop ease 0.3s",
          }}
        >
          <Stack m="auto" spacing={2} alignSelf="center" textAlign="center">
            {QUICK_LINKS.map(({ href, title }, idx) => (
              <Link
                onClick={() => setIsMenuVisible(false)}
                href={href}
                sx={{
                  textDecoration: "none",
                  opacity: 0.5,
                  "&:hover": { opacity: 1 },
                }}
              >
                <Typography variant="h3" color="white">
                  {title}
                </Typography>
              </Link>
            ))}
          </Stack>
          <Box mb={4} width="90%" mx="auto">
            <Box onClick={() => setIsMenuVisible(false)}>
              <Link href="/contact">
                <Button
                  color="primary"
                  size="medium"
                  variant="contained"
                  fullWidth
                >
                  Contact us
                </Button>
              </Link>
            </Box>
          </Box>
        </Stack>
      </>
    );
};

export default Menu;
