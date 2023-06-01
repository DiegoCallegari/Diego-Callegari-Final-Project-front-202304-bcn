import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  handleOnSubmit: () => void;
}

const LoginForm = ({ handleOnSubmit }: LoginFormProps): React.ReactElement => {
  const [userState, setUserState] = useState({
    username: "",
    password: "",
  });

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({
      ...userState,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOnSubmit();
    setUserState(userState);
  };

  const isDisabled = userState.username !== "" && userState.password !== "";

  return (
    <LoginFormStyled onSubmit={handleOnClick}>
      <div className="control-form">
        <label className="label-form" htmlFor="username">
          Username
        </label>
        <input
          className="input-form"
          type="text"
          id="username"
          onChange={onChangeInputs}
          placeholder="Username"
          value={userState.username}
        />
      </div>
      <div className="control-form">
        <label className="label-form" htmlFor="password">
          Password
        </label>
        <input
          className="input-form"
          type="password"
          id="password"
          onChange={onChangeInputs}
          placeholder="Password"
          value={userState.password}
        />
      </div>
      <div className="control-button">
        <button className="login-button" type="submit" disabled={!isDisabled}>
          Login
        </button>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
