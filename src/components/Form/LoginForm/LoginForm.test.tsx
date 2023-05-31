import { screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { renderWithProviders, wrapWithRouter } from "../../../utils/testUtils";

describe("Given a LogimForm", () => {
  describe("When it is rendered", () => {
    test("Then it should shows a button with the text 'login' ", () => {
      const login = "Login";

      renderWithProviders(wrapWithRouter(<LoginForm />));

      const buttonText = screen.getByRole("button", { name: login });

      expect(buttonText).toBeInTheDocument();
    });
  });
});
