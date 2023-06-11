import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation.js";
import paths from "../../routers/paths.js";
import { LoggedStateUserMock } from "../../mocks/userMocks.js";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 3 links: logout, add and home", () => {
      const add = "add";
      const home = "home";

      renderWithProviders(wrapWithRouter(<Navigation />));

      const addLink = screen.getByRole("link", { name: add });
      const homeLink = screen.getByRole("link", { name: home });

      expect(addLink).toBeInTheDocument();
      expect(homeLink).toBeInTheDocument();
    });
  });
});

describe("Given a logoutOnClick function", () => {
  describe("When the user is logged and click the logout button", () => {
    test("Then it should logout and redirect the user to the '/home' path", async () => {
      const route: RouteObject[] = [
        {
          path: "/",
          element: <Navigation />,
        },
      ];

      const logout = "logout";

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />, {
        user: LoggedStateUserMock,
      });

      const logoutButton = screen.getByRole("button", {
        name: logout,
      });

      await userEvent.click(logoutButton);

      expect(router.state.location.pathname).toStrictEqual(paths.home);
    });
  });
});
