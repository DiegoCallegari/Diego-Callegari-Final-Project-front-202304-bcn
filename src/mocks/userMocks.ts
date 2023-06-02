import {
  UserCredentials,
  UserStateStructure,
  UserTokenStructure,
} from "../store/user/types";

export const tokenMock = "abcd";

export const InitialStateUserMock: UserStateStructure = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};

export const userTokenStructureMock: UserTokenStructure = {
  username: "admin",
  id: "647084b22aa1557821abb0ce",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwODRiMjJhYTE1NTc4MjFhYmIwY2UiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU2NDIwOTIsImV4cCI6MTY4NTcyODQ5Mn0.pDPoO6HUjooUqXwXvQuzNZ9cwQA1AOl9XChYV0vLw1Q",
};

export const LoggedStateUserMock: UserStateStructure = {
  ...userTokenStructureMock,
  isLogged: true,
};

export const UserCredentialsMock: UserCredentials = {
  username: "admin",
  password: "admin",
};
