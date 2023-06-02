import LoginForm from "../../components/Form/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h2 className="page-title">LOGIN</h2>
      <section className="form-control">
        <LoginForm handleOnSubmit={() => ({})} />
      </section>
    </LoginPageStyled>
  );
};

export default LoginPage;
