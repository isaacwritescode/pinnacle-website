import { useTheme } from "@emotion/react";
import { Stack, ThemeProvider, Typography, createTheme } from "@mui/material";

const Card = ({ name, designation, body, avatar }) => {
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
        width={400}
        mx={2}
        boxSizing="border-box"
        borderRadius={6}
        p={4}
        spacing={3}
        sx={{ cursor: "pointer" }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={avatar} width={80} height={80} alt={name + "'s review"} />
          <Stack>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body1" color="text.secondary">
              {designation}
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
