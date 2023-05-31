import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navigation from "./Navigation.js";

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
