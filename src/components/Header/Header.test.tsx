import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should shows the text 'QUÈ FEM' ", () => {
      const expectedText = "QUÈ FEM";

      renderWithProviders(<Header />);

      const tittle = screen.getByRole("heading", {
        name: expectedText,
        level: 1,
      });

      expect(tittle).toBeInTheDocument();
    });
  });
});
