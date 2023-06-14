import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import EventAddPage from "./EventAddPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import EventsListPage from "../EventsListPage/EventsListPage";

describe("Given an EventAddPage", () => {
  describe("When it is rendered", () => {
    test("Then it should shows the title 'ADD NEW EVENT'", () => {
      const expectedText = "ADD NEW EVENT";

      renderWithProviders(wrapWithRouter(<EventAddPage />));

      const pageTitle = screen.getByRole("heading", {
        name: expectedText,
        level: 2,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the handleOnClick function is invoked", () => {
    test("Then it should redirect the user to the home page and show the title 'NOW IN BARCELONA'", async () => {
      const expectedTitle = /now in barcelona/i;

      const routes: RouteObject[] = [
        { path: "/", element: <EventAddPage /> },
        { path: "/home", element: <EventsListPage /> },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const titleLabel = /title:/i;
      const descriptionLabel = /description:/i;
      const whereLabel = /where:/i;
      const whenLabel = /when/i;
      const imageLabel = /image/i;

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

      await userEvent.click(submitButton);

      const expectedHeading = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(router.state.location.pathname).toBe("/home");
      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
