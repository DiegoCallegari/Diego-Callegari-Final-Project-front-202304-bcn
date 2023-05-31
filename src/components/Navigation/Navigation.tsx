import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <NavLink to="/login" aria-label="login" title="login">
        <img
          width={48}
          height={48}
          className="navigation-icon"
          src="images/login-link.svg"
          alt="login"
        />
      </NavLink>
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
