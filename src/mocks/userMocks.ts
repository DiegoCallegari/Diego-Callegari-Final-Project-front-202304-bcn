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
  username: "jane",
  id: "123",
  token: "1222333",
};

export const LoggedStateUserMock: UserStateStructure = {
  ...userTokenStructureMock,
  isLogged: true,
};

export const UserCredentialsMock: UserCredentials = {
  username: "admin",
  password: "admin",
};
