import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  interface UserLogin {
    username: string;
    password: string;
  }

  const [userState, setUserState] = useState<UserLogin>({
    username: "",
    password: "",
  });

  const onChangeUserLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({
      ...userState,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <LoginFormStyled onSubmit={LoginForm}>
      <div className="container-form">
        <label className="label-form" htmlFor="username">
          Username
        </label>
        <input
          className="input-form"
          type="text"
          id="username"
          onChange={onChangeUserLogin}
          placeholder="Username"
        />
      </div>
      <div className="container-form">
        <label className="label-form" htmlFor="password">
          Password
        </label>
        <input
          className="input-form"
          type="text"
          id="password"
          onChange={onChangeUserLogin}
          placeholder="Password"
        />
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
