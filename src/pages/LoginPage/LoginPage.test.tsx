import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LoginPage from "./LoginPage";
import paths from "../../routers/paths";

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

describe("Given a LoginPage component", () => {
  describe("When the user clicks the 'Login' button", () => {
    test("Then it should log in the user and redirects him to the '/' path", async () => {
      const usernameText = "Username:";
      const passwordText = "Password:";
      const usernameInputText = "Username";
      const passwordInputText = "Password";
      const buttonText = "Login";

      const route: RouteObject[] = [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/home",
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const usernameTextField = screen.getByLabelText(usernameText);
      const passwordTextField = screen.getByLabelText(passwordText);
      const loginButton = screen.getByRole("button", { name: buttonText });

      await userEvent.type(usernameTextField, usernameInputText);
      await userEvent.type(passwordTextField, passwordInputText);
      await userEvent.click(loginButton);

      expect(router.state.location.pathname).toStrictEqual(paths.home);
    });
  });
});
