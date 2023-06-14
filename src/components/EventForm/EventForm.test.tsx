import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import EventForm from "./EventForm";

const submitForm = vi.fn();

const titleLabel = /title:/i;
const descriptionLabel = /description:/i;
const whereLabel = /where:/i;
const whenLabel = /when/i;
const imageLabel = /image/i;

const userInputText = "User text";

describe("Given a EventForm component", () => {
  describe("When it is rendered", () => {
    test(`Then it should show a text field with the label '${imageLabel}'`, () => {
      renderWithProviders(<EventForm submitEventForm={submitForm} />);

      const textField = screen.getByLabelText(imageLabel);

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

describe(`When it is rendered and the user writes the text '${userInputText}' on the field 'title'`, () => {
  test(`Then it should show the text '${userInputText}' in the field`, async () => {
    renderWithProviders(<EventForm submitEventForm={submitForm} />);

    const textField = screen.getByLabelText(titleLabel);

    await userEvent.type(textField, userInputText);

    expect(textField).toHaveValue(userInputText);
  });
});

describe("When it is rendered and the input field for title are filled", () => {
  test("Then it should show a disabled button with the text 'Add'", async () => {
    renderWithProviders(<EventForm submitEventForm={submitForm} />);

    const titleInputField = screen.getByLabelText(titleLabel);

    const titleTextField = "Concert in the park";

    await userEvent.type(titleInputField, titleTextField);

    const createButton = screen.getByRole("button", { name: "Add" });

    expect(createButton).toBeDisabled();
  });
});

describe("When it is rendered and the input field for describe are filled", () => {
  test("Then it should show a disabled button with the text 'Add'", async () => {
    renderWithProviders(<EventForm submitEventForm={submitForm} />);

    const descriptionInputField = screen.getByLabelText(descriptionLabel);

    const descriptionTextField = "A very good afternoon of music";

    await userEvent.type(descriptionInputField, descriptionTextField);

    const createButton = screen.getByRole("button", { name: "Add" });

    expect(createButton).toBeDisabled();
  });
});

describe("When it is rendered and the input field for describe are filled", () => {
  test("Then it should show a disabled button with the text 'Add'", async () => {
    renderWithProviders(
      wrapWithRouter(<EventForm submitEventForm={submitForm} />)
    );

    const whereInputField = screen.getByRole("combobox");

    const whereTextField = "El Born";

    await userEvent.type(whereInputField, whereTextField);

    const createButton = screen.getByRole("button", { name: "Add" });

    expect(createButton).toBeDisabled();
  });
});

describe("When it is rendered", () => {
  test("Then it should shows a field for selection", async () => {
    renderWithProviders(
      wrapWithRouter(<EventForm submitEventForm={submitForm} />)
    );
    const whereInputField = screen.getByLabelText(whereLabel);

    const whereTextField = "El Born";

    await userEvent.selectOptions(whereInputField, whereTextField);

    expect(whereInputField.tagName).toBe("SELECT");
  });
});

describe("When it is rendered and all the input fields are compleated", () => {
  test("Then it should show an enabled button with the text 'Add'", async () => {
    renderWithProviders(
      wrapWithRouter(<EventForm submitEventForm={submitForm} />)
    );
    const descriptionInputField = screen.getByLabelText(descriptionLabel);

    const descriptionTextField = "A very good afternoon of music";

    await userEvent.type(descriptionInputField, descriptionTextField);

    expect(descriptionInputField.tagName).toBe("TEXTAREA");
  });
});

describe("When it is rendered and all the input fields are compleated", () => {
  test("Then it should show an enabled button with the text 'Add'", async () => {
    renderWithProviders(
      wrapWithRouter(<EventForm submitEventForm={submitForm} />)
    );

    const titleInputField = screen.getByLabelText(titleLabel);
    const descriptionInputField = screen.getByLabelText(descriptionLabel);
    const whereInputField = screen.getByLabelText(whereLabel);
    const whenInputField = screen.getByLabelText(whenLabel);
    const imageInputField = screen.getByLabelText(imageLabel);

    const titleTextField = "Concert in the park";
    const descriptionTextField = "A very good afternoon of music";
    const whereTextField = "El Born";
    const whenDate = "2023-07-03";
    const imageTextField =
      "https://cdn.discordapp.com/attachments/1096796306695008286/1115235166374350878/concierto.jpeg";

    await userEvent.type(titleInputField, titleTextField);
    await userEvent.type(descriptionInputField, descriptionTextField);
    await userEvent.selectOptions(whereInputField, whereTextField);
    await userEvent.type(whenInputField, whenDate);
    await userEvent.type(imageInputField, imageTextField);
    const submitButton = screen.getByRole("button", { name: "Add" });

    expect(submitButton).toBeEnabled();
  });
});
