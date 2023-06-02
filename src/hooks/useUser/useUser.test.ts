import { renderHook } from "@testing-library/react";
import useUser from "./useUser.js";
import { UserCredentialsMock, tokenMock } from "../../mocks/userMocks.js";

describe("Given a useUser custom hook", () => {
  describe("When calls getToken function with a valid username and password", () => {
    test("Then it should return a user token", async () => {
      const expectedToken = tokenMock;
      const user = UserCredentialsMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });
});
