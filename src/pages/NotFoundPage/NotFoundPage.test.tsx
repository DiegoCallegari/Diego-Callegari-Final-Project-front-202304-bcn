import { screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a NotFoundPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the message 'Error 404' inside a heading", () => {
      const expectedText = "Error 404";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const message = screen.getByRole("heading", { name: expectedText });

      expect(message).toBeInTheDocument();
    });
  });
});
