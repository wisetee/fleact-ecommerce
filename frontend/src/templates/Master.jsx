import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Preloader from "./Preloader";
import Search from "./Search";
import Newletter from "./Newletter";
import Footer from "./Footer";

const Master = () => {
  return (
    <>
      <Preloader />
      <header>
        <NavBar />
        <Search />
      </header>
      <main>
        <Outlet />
      </main>
      <Newletter />
      <Footer />
    </>
  );
}

export default Master;
