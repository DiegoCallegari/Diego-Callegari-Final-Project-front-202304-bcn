import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import EventAddForm from "./EventAddForm";

describe("Given a EventAddForm", () => {
  describe("When it is rendered", () => {
    test("Then it should shows a button with the text 'Add' ", () => {
      const buttonTextAdd = "Add";

      renderWithProviders(wrapWithRouter(<EventAddForm />));

      const buttonText = screen.getByRole("button", { name: buttonTextAdd });

      expect(buttonText).toBeInTheDocument();
    });
  });
});
