import LoginForm from "../../components/Form/LoginForm/LoginForm";
import { useAppDispatch } from "../../store";
import { UserCredentials } from "../../store/user/types";
import LoginPageStyled from "./LoginPageStyled";
import { loginUserActionCreator } from "../../store/user/userSlice";
import useUser from "../../hooks/useUser/useUser";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginOnSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      const userLoginData = await getTokenData(token);
      dispatch(loginUserActionCreator(userLoginData));
      navigate("/home", { replace: true });
    }
  };
  return (
    <LoginPageStyled>
      <h2 className="page-title">LOGIN</h2>
      <section className="form-control">
        <LoginForm handleOnSubmit={loginOnSubmit} />
      </section>
    </LoginPageStyled>
  );
};

export default LoginPage;
