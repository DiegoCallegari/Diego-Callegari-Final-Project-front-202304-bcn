import { UserStateStructure, UserTokenStructure } from "../store/user/types";

export const tokenMock = "3333555";

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
