import {
  InitialStateUserMock,
  LoggedStateUserMock,
  userTokenStructureMock,
} from "../../mocks/userMocks";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives a current state 'false' and a loginUser action with an user as data", () => {
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
});
