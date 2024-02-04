import { ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";
import Landing from "./pages/Landing";
import { useEffect, useState } from "react";

function App() {
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY === 0
        ? setUserHasScrolled(false)
        : setUserHasScrolled(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Landing userHasScrolled={userHasScrolled} />
    </ThemeProvider>
  );
}

export default App;
