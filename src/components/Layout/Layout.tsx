import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import LayoutStyled from "./LayoutStyled";
import Loader from "../Loader/Loader";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <Header />
      <Loader />
      <Outlet />
      <Navigation />
    </LayoutStyled>
  );
};

export default Layout;
