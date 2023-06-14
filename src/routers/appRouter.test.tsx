import { screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";
import { tokenMock } from "../mocks/userMocks";
import { renderWithProviders } from "../utils/testUtils";

localStorage.setItem("token", tokenMock);

describe("Given a appRouter", () => {
  describe("When rendered and a token exists in local storage", () => {
    test("Then it should show the 'add' and 'logout' links", () => {
      const linkNames = "home";

      renderWithProviders(<RouterProvider router={appRouter} />);

      const link = screen.getByRole("link", {
        name: linkNames,
      });

      expect(link).toBeInTheDocument();
    });
  });
});
