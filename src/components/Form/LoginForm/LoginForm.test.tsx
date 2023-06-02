import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import LoginForm from "./LoginForm";
import { renderWithProviders, wrapWithRouter } from "../../../utils/testUtils";

const username = "Username:";
const password = "Password:";
const login = "Login";
const usernameInput = "admin";
const userPasswordInput = "admin";

describe("Given a LogimForm", () => {
  const actionOnClick = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should shows a button with the text 'login' ", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const buttonText = screen.getByRole("button", { name: login });

      expect(buttonText).toBeInTheDocument();
    });

    test("Then it should show 2 inputs with the label 'Username' and 'Password' ", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const firstLabel = screen.getByLabelText(username);
      const secondLabel = screen.getByLabelText(password);

      expect(firstLabel).toBeInTheDocument();
      expect(secondLabel).toBeInTheDocument();
    });

    describe("When it is rendered and the inputs are not filled", () => {
      test("Then the login button shouldn't be able", () => {
        renderWithProviders(
          wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
        );

        const button = screen.getByRole("button", { name: login });

        expect(button).toBeDisabled;
      });
    });

    describe("When it is rendered and the inputs are totally filled", () => {
      test("Then the login button should be able", async () => {
        renderWithProviders(
          wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
        );

        const usernameLabel = screen.getByLabelText(username);
        const passwordLabel = screen.getByLabelText(password);

        await userEvent.type(usernameLabel, usernameInput);
        await userEvent.type(passwordLabel, userPasswordInput);

        const button = screen.getByRole("button", { name: login });

        expect(button).toBeEnabled();
      });
    });

    describe("When it is rendered and the username field 'admin' is written", () => {
      test("Then it should shows the respective text", async () => {
        renderWithProviders(
          wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
        );

        const usernameLabel = screen.getByLabelText(username);

        await userEvent.type(usernameLabel, usernameInput);

        expect(usernameLabel).toHaveValue(usernameInput);
      });
    });

    describe("When it is rendered and the password field 'admin' is written", () => {
      test("Then it should shows the respective password", async () => {
        renderWithProviders(
          wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
        );

        const passwordLabel = screen.getByLabelText(password);

        await userEvent.type(passwordLabel, userPasswordInput);

        expect(passwordLabel).toHaveValue(userPasswordInput);
      });
    });

    describe("When it is rendered, the credentials are correct and the login button is clicked", () => {
      test("Then it should call the actionOnClick funtion", async () => {
        renderWithProviders(
          wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
        );

        const usernameLabel = screen.getByLabelText(username);
        const passwordLabel = screen.getByLabelText(password);

        await userEvent.type(usernameLabel, usernameInput);
        await userEvent.type(passwordLabel, userPasswordInput);

        const button = screen.getByRole("button", { name: login });

        await userEvent.click(button);

        expect(actionOnClick).toHaveBeenCalled();
      });
    });
  });
});
