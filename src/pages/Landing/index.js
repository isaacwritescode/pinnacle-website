import Approach from "./Approach";
import Capabilities from "./Capabilities";
import Hero from "./Hero";
import Sponsors from "./Sponsors";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Work from "./Work";
import Navbar from "../../components/Navbar";

const Landing = ({ userHasScrolled }) => {
  return (
    <>
      <Navbar userHasScrolled={userHasScrolled} />
      <Hero />
      <Sponsors />
      <Approach />
      <Work />
      <Capabilities />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Landing;
