import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navigation from "./Navigation.js";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 3 links: login, create and home", () => {
      renderWithProviders(wrapWithRouter(<Navigation />));

      const loginLink = screen.getByRole("link", { name: "login" });
      const createLink = screen.getByRole("link", { name: "create" });
      const homeLink = screen.getByRole("link", { name: "home" });

      expect(loginLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
      expect(homeLink).toBeInTheDocument();
    });
  });
});
