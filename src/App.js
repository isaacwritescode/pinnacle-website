import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Landing from "./pages/Landing";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout";
import sal from "sal.js";
import "sal.js/dist/sal.css";

function App() {
  const { pathname } = useLocation();
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

  useEffect(() => {
    sal({ threshold: 0.3 });
  }, [pathname]);

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
