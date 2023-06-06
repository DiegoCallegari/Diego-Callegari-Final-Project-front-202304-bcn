import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserCredentials } from "../../../store/user/types";

interface LoginFormProps {
  handleOnSubmit: (user: UserCredentials) => void;
}

const LoginForm = ({ handleOnSubmit }: LoginFormProps): React.ReactElement => {
  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [userState, setUserState] = useState(initialUserCredentials);

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({
      ...userState,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOnSubmit(userState);
    setUserState(initialUserCredentials);
  };

  const isDisabled = userState.username !== "" && userState.password !== "";

  return (
    <LoginFormStyled onSubmit={handleOnClick} className="control-form">
      <label className="label-form" htmlFor="username">
        Username:
        <input
          className="input-form"
          type="text"
          id="username"
          onChange={onChangeInputs}
          value={userState.username}
        />
      </label>
      <label className="label-form" htmlFor="password">
        Password:
        <input
          className="input-form"
          type="password"
          id="password"
          onChange={onChangeInputs}
          value={userState.password}
        />
      </label>
      <button className="login-button" type="submit" disabled={!isDisabled}>
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
