import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import LayoutStyled from "./LayoutStyled";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

const Layout = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const isVisible = useAppSelector((state) => state.ui.modal.isVisible);

  return (
    <>
      {isLoading && <Loader />}
      {isVisible && <Modal />}
      <LayoutStyled>
        <Header />
        <Outlet />
        <Navigation />
      </LayoutStyled>
    </>
  );
};

export default Layout;
