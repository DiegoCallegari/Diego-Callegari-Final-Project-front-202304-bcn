import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation.js";
import { LoggedStateUserMock } from "../../mocks/userMocks.js";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 3 links: login and home", () => {
      const login = "login";
      const home = "home";

      renderWithProviders(wrapWithRouter(<Navigation />));

      const loginLink = screen.getByRole("link", { name: login });
      const homeLink = screen.getByRole("link", { name: home });

      expect(loginLink).toBeInTheDocument();
      expect(homeLink).toBeInTheDocument();
    });
  });
});

describe("Given a logoutOnClick function", () => {
  describe("When the user is logged and click the logout button", () => {
    test("Then it should logout and redirect the user to the '/home' path", async () => {
      const logout = /logout/i;
      const login = /login/i;

      const route: RouteObject[] = [
        {
          path: "/",
          element: <Navigation />,
        },
        {
          path: "/home",
          element: <Navigation />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />, {
        user: LoggedStateUserMock,
      });

      const logoutButton = screen.getByRole("button", {
        name: logout,
      });

      await userEvent.click(logoutButton);

      const loginLink = screen.queryByRole("link", { name: login });

      expect(loginLink).toBeInTheDocument();
    });
  });
});
