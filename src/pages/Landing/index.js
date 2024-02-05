import Approach from "./Approach";
import Capabilities from "./Capabilities";
import Hero from "./Hero";
import Sponsors from "./Sponsors";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import Work from "./Work";
import { Box, Button } from "@mui/material";
import ReactVisibilitySensor from "react-visibility-sensor";
import Footer from "../../components/Footer";
import { useState } from "react";

const Landing = () => {
  const [heroVisible, setHeroVisible] = useState(true);
  const [footerVisible, setFooterVisible] = useState(false);
  // console.log({
  //   heroVisible,
  //   footerVisible,
  // });
  const condition = !(heroVisible || footerVisible);

  return (
    <>
      <ReactVisibilitySensor
        onChange={(isVisible) => {
          setHeroVisible(isVisible);
        }}
        delayedCall
        partialVisibility
      >
        <Hero />
      </ReactVisibilitySensor>
      <Sponsors />
      <Approach />
      <Capabilities />
      <Work />
      <FAQ />
      <Testimonials />
      <ReactVisibilitySensor
        onChange={(isVisible) => {
          setFooterVisible(isVisible);
        }}
        delayedCall
        partialVisibility
      >
        <Footer />
      </ReactVisibilitySensor>

      <Box
        className={condition ? "fade-in" : "fade-out"}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 99,
        }}
      >
        <Button variant="contained" size="large">
          Start a project
        </Button>
      </Box>
    </>
  );
};

export default Landing;
