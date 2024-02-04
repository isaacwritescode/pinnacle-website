import Approach from "./Approach";
import Capabilities from "./Capabilities";
import Hero from "./Hero";
import Sponsors from "./Sponsors";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import Work from "./Work";

const Landing = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <Approach />
      {/* <Work />
      <Capabilities />
      <FAQ /> */}
      <Testimonials />
    </>
  );
};

export default Landing;
