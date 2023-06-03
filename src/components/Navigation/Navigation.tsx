import { NavLink, useNavigate } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import paths from "../../routers/paths";

const Navigation = (): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.user.isLogged);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutOnClick = () => {
    dispatch(logoutUserActionCreator());
    navigate(`${paths.home}`);
  };

  return (
    <NavigationStyled>
      {isLogged ? (
        <button className="logout" onClick={logoutOnClick} aria-label="logout">
          <img
            width={50}
            height={50}
            className="logout-icon"
            src="images/logout-icon.svg"
            alt="logout"
          />
        </button>
      ) : (
        <NavLink to="/login" aria-label="login" title="login">
          <img
            width={48}
            height={48}
            className="navigation-icon"
            src="images/login-link.svg"
            alt="login"
          />
        </NavLink>
      )}
      <NavLink to="/create" aria-label="create" title="create">
        <img
          width={48}
          height={48}
          className="navigation-icon"
          src="images/create-link.svg"
          alt="create"
        />
      </NavLink>
      <NavLink to="/" aria-label="home" title="home">
        <img
          width={48}
          height={48}
          className="navigation-icon"
          src="/images/home-link.svg"
          alt="home"
        />
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
