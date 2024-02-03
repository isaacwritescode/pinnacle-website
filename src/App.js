import { ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Circular</Typography>
    </ThemeProvider>
  );
}

export default App;
