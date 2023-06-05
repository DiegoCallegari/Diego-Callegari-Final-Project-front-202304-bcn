import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an edit icon with the alternative text 'edit'", () => {
      const expectAltText = "edit";

      renderWithProviders(
        wrapWithRouter(
          <Button accessibility="edit" className="edit-button">
            <img
              width={25}
              height={25}
              src="/icons/edit.svg"
              alt="edit"
              className="img"
            />
          </Button>
        )
      );

      const button = screen.getByRole("button", { name: expectAltText });

      expect(button).toBeInTheDocument();
    });
  });
});
