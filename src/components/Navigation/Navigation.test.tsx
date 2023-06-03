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
    test("Then it should show 3 links: logout, create and home", () => {
      const create = "create";
      const home = "home";

      renderWithProviders(wrapWithRouter(<Navigation />));

      const createLink = screen.getByRole("link", { name: create });
      const homeLink = screen.getByRole("link", { name: home });

      expect(createLink).toBeInTheDocument();
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
