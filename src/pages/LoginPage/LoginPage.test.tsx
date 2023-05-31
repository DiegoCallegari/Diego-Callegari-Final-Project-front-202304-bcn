import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage", () => {
  describe("When it is rendered", () => {
    test("Then it should shows a Loginform", () => {
      const expectedText = "LOGIN";

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const pageTitle = screen.getByRole("heading", {
        name: expectedText,
        level: 2,
      });
      expect(pageTitle).toBeInTheDocument();
    });
  });
});
