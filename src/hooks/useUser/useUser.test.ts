import { renderHook } from "@testing-library/react";
import useUser from "../useUser/useUser.js";
import { UserCredentialsMock, tokenMock } from "../../mocks/userMocks.js";
import { server } from "../../mocks/server.js";
import { errorHandlers } from "../../mocks/handlers.js";
import { UserCredentials } from "../../store/user/types.js";
import { wrapper } from "../../utils/testUtils.js";

describe("Given a useUser custom hook", () => {
  describe("When calls getToken function with a valid username and password", () => {
    test("Then it should return a user token", async () => {
      const expectedToken = tokenMock;
      const user = UserCredentialsMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });

  describe("When it calls getUserToken with invalid credentials", () => {
    test("Then it should return a response method status with a 401", async () => {
      server.use(...errorHandlers);

      const invalidUser: UserCredentials = {
        username: "Antony",
        password: "123",
      };

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const getToken = await getUserToken(invalidUser);

      expect(getToken).toBeUndefined();
    });
  });
});
