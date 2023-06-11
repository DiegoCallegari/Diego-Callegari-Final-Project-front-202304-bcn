import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import EventAddPage from "./EventAddPage";

describe("Given an EventAddPage", () => {
  describe("When it is rendered", () => {
    test("Then it should shows the title 'ADD NEW EVENT'", () => {
      const expectedText = "ADD NEW EVENT";

      renderWithProviders(wrapWithRouter(<EventAddPage />));

      const pageTitle = screen.getByRole("heading", {
        name: expectedText,
        level: 2,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
