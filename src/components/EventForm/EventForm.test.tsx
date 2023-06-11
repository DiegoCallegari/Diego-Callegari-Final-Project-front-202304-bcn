import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import EventForm from "./EventForm";

describe("Given a EventForm", () => {
  describe("When it is rendered", () => {
    test("Then it should shows a button with the text 'Add' ", () => {
      const buttonTextAdd = "Add";

      renderWithProviders(wrapWithRouter(<EventForm />));

      const buttonText = screen.getByRole("button", { name: buttonTextAdd });

      expect(buttonText).toBeInTheDocument();
    });
  });
});
