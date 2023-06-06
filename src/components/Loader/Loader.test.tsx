import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Loader from "./Loader";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'loader'", () => {
      const expectedAltTex = "loader";

      renderWithProviders(<Loader />);

      const loadingSpinner = screen.getByLabelText(expectedAltTex);

      expect(loadingSpinner).toBeInTheDocument();
    });
  });
});
