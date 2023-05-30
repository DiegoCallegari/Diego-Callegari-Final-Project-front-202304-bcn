import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Layout from "./Layout.js";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should shows a header with the text 'QUÈ FEM' ", () => {
      const expectedText = "QUÈ FEM";

      renderWithProviders(<Layout />);

      const tittle = screen.getByRole("heading", {
        name: expectedText,
        level: 1,
      });

      expect(tittle).toBeInTheDocument();
    });
  });
});
