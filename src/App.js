import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Landing from "./pages/Landing";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";

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
      <Routes>
        <Route path="/" element={<Layout userHasScrolled={userHasScrolled} />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
