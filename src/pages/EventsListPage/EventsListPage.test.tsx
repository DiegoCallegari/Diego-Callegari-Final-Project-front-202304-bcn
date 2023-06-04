import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import EventsListPage from "./EventsListPage";

describe("Given a EventsListPage", () => {
  describe("When it is rendered", () => {
    test("Then it should shows a Loginform", () => {
      const expectedText = "NOW IN BARCELONA";

      renderWithProviders(wrapWithRouter(<EventsListPage />));

      const pageTitle = screen.getByRole("heading", {
        name: expectedText,
        level: 2,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
