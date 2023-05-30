import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import LayoutStyled from "./LayoutStyled";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
      <Navigation />
    </LayoutStyled>
  );
};

export default Layout;
