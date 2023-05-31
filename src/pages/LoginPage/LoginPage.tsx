import LoginForm from "../../components/Form/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <LoginForm />
      <div className="page-title">
        <h2>LOGIN</h2>
      </div>
    </LoginPageStyled>
  );
};

export default LoginPage;
