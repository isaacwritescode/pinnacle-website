import { ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";
import Landing from "./pages/Landing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
