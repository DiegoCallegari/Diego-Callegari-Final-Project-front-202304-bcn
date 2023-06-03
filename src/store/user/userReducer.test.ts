import {
  InitialStateUserMock,
  LoggedStateUserMock,
  userTokenStructureMock,
} from "../../mocks/userMocks";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives a current state 'false' and a LoginUser action with an user as data", () => {
    test("Then it should return the actualized current state with the user logged", () => {
      const currentUserState = InitialStateUserMock;

      const expectNewUserState = LoggedStateUserMock;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(userTokenStructureMock)
      );

      expect(newUserState).toStrictEqual(expectNewUserState);
    });
  });

  describe("When it receives a current state 'true' and a LogoutUser", () => {
    test("Then it should return the actualized current state with the user logged out", () => {
      const currentUserState = LoggedStateUserMock;

      const resetState = userReducer(
        currentUserState,
        logoutUserActionCreator()
      );

      expect(resetState).toStrictEqual(InitialStateUserMock);
    });
  });
});
