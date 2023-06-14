import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LoginPage from "./LoginPage";
import EventsListPage from "../EventsListPage/EventsListPage";

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
    test("Then it should log in the user and redirects him to the '/home' path", async () => {
      const usernameText = "Username:";
      const passwordText = "Password:";
      const usernameInputText = "Anna";
      const passwordInputText = "123";
      const buttonText = "Login";
      const eventsListPageTitle = /now in barcelona/i;

      const route: RouteObject[] = [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/home",
          element: <EventsListPage />,
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

      const expectedTitle = screen.getByRole("heading", {
        name: eventsListPageTitle,
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
