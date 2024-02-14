import { useTheme } from "@emotion/react";
import { Box, Stack, ThemeProvider, Typography, createTheme } from "@mui/material";

const Card = ({ name, designation, body, avatar, company }) => {
  // Define a custom theme
  const theme = useTheme();
  const lightTheme = createTheme({
    ...theme,
    palette: {
      mode: "light", // Set the theme mode to dark
      primary: theme.palette.primary,
    },
  });
  return (
    <ThemeProvider theme={lightTheme}>
      <Stack
        bgcolor="white"
        width={{ xs: "100%", md: 400 }}
        boxSizing="border-box"
        flex={1}
        borderRadius={6}
        p={4}
        spacing={3}
        sx={{ cursor: "pointer" }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <img
            src={avatar}
            width={80}
            height={80}
            style={{ borderRadius: 100 }}
            alt={name + "'s review"}
          />
          <Stack>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body1" color="text.secondary">
              {designation}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {company}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </Stack>
    </ThemeProvider>
  );
};

export default Card;
