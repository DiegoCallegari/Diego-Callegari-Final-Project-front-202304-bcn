import { screen } from "@testing-library/react";
import Layout from "./Layout.js";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should shows a header with the text 'QUÈ FEM' ", () => {
      const expectedText = "QUÈ FEM";

      renderWithProviders(wrapWithRouter(<Layout />));

      const tittle = screen.getByRole("heading", {
        name: expectedText,
        level: 1,
      });

      expect(tittle).toBeInTheDocument();
    });
  });
});

describe("Given a Layout component", () => {
  describe("When it takes much time to render", () => {
    test("Then it should shows a loader ", () => {
      const expectedLabelText = "loader";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: { isLoading: true },
      });

      const loadingSpinner = screen.getByLabelText(expectedLabelText);

      expect(loadingSpinner).toBeInTheDocument();
    });
  });
});
