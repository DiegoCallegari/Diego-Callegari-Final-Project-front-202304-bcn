import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import LayoutStyled from "./LayoutStyled";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";

const Layout = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading && <Loader />}
      <LayoutStyled>
        <Header />
        <Outlet />
        <Navigation />
      </LayoutStyled>
    </>
  );
};

export default Layout;
