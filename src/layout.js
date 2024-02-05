import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default function Layout({
  isMenuVisible,
  userHasScrolled,
  setIsMenuVisible,
}) {
  return (
    <>
      <Navbar
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
        userHasScrolled={userHasScrolled}
      />
      {isMenuVisible && <Menu setIsMenuVisible={setIsMenuVisible} />}
      <Outlet />
      <Footer />
    </>
  );
}
