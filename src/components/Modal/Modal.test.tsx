import { screen } from "@testing-library/react";
import { store } from "../../store";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a Modal component", () => {
  describe("When it is rendered ", () => {
    test("Then it should show a button with the text 'close' that when is clicked should set the ui store message", async () => {
      const buttonText = "close";

      renderWithProviders(<Modal />, {
        ui: {
          isLoading: true,
          modal: { isError: false, title: "", text: "", isVisible: false },
        },
      });

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();

      await userEvent.click(button);

      const testStore = store.getState();

      expect(testStore.ui.modal.text).toBeFalsy();
    });
  });

  test("Then it should show a feedback Modal", () => {
    const expectedText = "feedback modal";

    renderWithProviders(<Modal />);

    const modal = screen.getByLabelText(expectedText);

    expect(modal).toBeInTheDocument();
  });
});

describe("When it is rendered of modal is negative feedback", () => {
  test("Then it should show the message 'Username or password doesn't match'", async () => {
    const expectedText = "Username or password doesn't match";
    renderWithProviders(<Modal />, {
      ui: {
        isLoading: true,
        modal: {
          isError: true,
          title: "Wrong credentials",
          text: "Username or password doesn't match",
          isVisible: false,
        },
      },
    });

    const feedback = screen.getByText(expectedText);

    expect(feedback).toBeInTheDocument();
  });
});
