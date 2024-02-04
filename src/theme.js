import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
        h1: {
          letterSpacing: "-4px",
          lineHeight: 1.2,
          fontSize: "80px",
        },
        h2: {
          letterSpacing: "-4px",
          lineHeight: 1.1,
          fontSize: "64px",
        },
        h3: {
          letterSpacing: "-3px",
          fontSize: "48px",
        },
        h4: {
          letterSpacing: "-2px",
        },
        h5: {
          letterSpacing: "-1px",
          lineHeight: 1.3,
        },
        h6: {
          letterSpacing: "-0.5px",
          lineHeight: 1.3,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 100,
          boxShadow: "none",
        },
        sizeLarge: {
          padding: "24px 48px",
        },
        sizeMedium: {
          padding: "12px 32px",
        },
        sizeSmall: {
          padding: "0px 16px",
          height: 42,
        },
      },
    },
  },
  typography: {
    fontFamily: "CircularStd-Private",
  },
  palette: {
    mode: "light",
    primary: {
      contrastText: "#744209",
      light: "#F8FFF5",
      main: "#FFB259",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    black: {
      main: "#000000",
      contrastText: "#ffffff",
    },
  },
});

export default theme;
