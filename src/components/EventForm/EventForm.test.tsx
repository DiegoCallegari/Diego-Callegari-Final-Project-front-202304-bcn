import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders } from "../../utils/testUtils";
import EventForm from "./EventForm";

const submitForm = vi.fn();

const eventFormLabels = ["Title:", "Description:", "Where:", "When:", "Image:"];

const userInputText = "User text";

describe("Given a EventForm component", () => {
  eventFormLabels.forEach((expectedText) => {
    describe("When it is rendered", () => {
      test(`Then it should show a text field with the label '${expectedText}'`, () => {
        renderWithProviders(<EventForm submitEventForm={submitForm} />);

        const textField = screen.getByLabelText(expectedText);

        expect(textField).toBeInTheDocument();
      });
    });
  });

  test("Then it should show a button with the text 'Add'", () => {
    const expectedButtonText = "Add";

    renderWithProviders(<EventForm submitEventForm={submitForm} />);

    const textField = screen.getByRole("button", { name: expectedButtonText });

    expect(textField).toBeInTheDocument();
  });
});

describe("When it is rendered but the inputs fields are empty", () => {
  test("Then it should show a disabled button with the text 'Add'", () => {
    const expectedButtonText = "Add";

    renderWithProviders(<EventForm submitEventForm={submitForm} />);

    const createButton = screen.getByRole("button", {
      name: expectedButtonText,
    });

    expect(createButton).toBeDisabled();
  });
});

eventFormLabels.slice(8).forEach((expectedText) => {
  describe(`When it is rendered and the user writes the text '${userInputText}' on the field '${expectedText[0]}'`, () => {
    test(`Then it should show the text '${userInputText}' in the field`, async () => {
      renderWithProviders(<EventForm submitEventForm={submitForm} />);

      const textField = screen.getByLabelText(expectedText);

      await userEvent.type(textField, userInputText);

      expect(textField).toHaveValue(userInputText);
    });
  });

  describe("When it is rendered and all the input fields are compleated", () => {
    test("Then it should show an enabled button with the text 'Create'", async () => {
      renderWithProviders(<EventForm submitEventForm={submitForm} />);

      const titleImputField = screen.getByLabelText(eventFormLabels[0]);
      const descriptionImputField = screen.getByLabelText(eventFormLabels[1]);
      const whereImputField = screen.getByLabelText(eventFormLabels[2]);
      const whenImputField = screen.getByLabelText(eventFormLabels[3]);
      const imageImputField = screen.getByLabelText(eventFormLabels[4]);

      const titleTextField = "Concert in the park";
      const descriptionTextField = "A very good afternoon of music";
      const whereTextField = "Park de la Ciutadela";
      const whenTextField = "12/06/2023";
      const imageTextField = "http://example";

      await userEvent.type(titleImputField, titleTextField);
      await userEvent.type(descriptionImputField, descriptionTextField);
      await userEvent.selectOptions(whereImputField, whereTextField);
      await userEvent.type(whenImputField, whenTextField);
      await userEvent.type(imageImputField, imageTextField);

      const createButton = screen.getByRole("button", { name: "Create" });

      await userEvent.click(createButton);

      expect(createButton).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and all the input fields are compleated", () => {
    test("Then it should show an enabled button with the text 'Create'", async () => {
      renderWithProviders(<EventForm submitEventForm={submitForm} />);

      const titleImputField = screen.getByLabelText(eventFormLabels[0]);
      const descriptionImputField = screen.getByLabelText(eventFormLabels[1]);
      const whereImputField = screen.getByLabelText(eventFormLabels[2]);
      const whenImputField = screen.getByLabelText(eventFormLabels[3]);
      const imageImputField = screen.getByLabelText(eventFormLabels[4]);

      const titleTextField = "Concert in the park";
      const descriptionTextField = "A very good afternoon of music";
      const whereTextField = "Park de la Ciutadela";
      const whenTextField = "12/06/2023";
      const imageTextField = "http://example";

      await userEvent.type(titleImputField, titleTextField);
      await userEvent.type(descriptionImputField, descriptionTextField);
      await userEvent.type(whereImputField, whereTextField);
      await userEvent.type(whenImputField, whenTextField);
      await userEvent.type(imageImputField, imageTextField);

      const createButton = screen.getByRole("button", { name: "Create" });

      expect(createButton).toBeEnabled();
    });
  });
});
