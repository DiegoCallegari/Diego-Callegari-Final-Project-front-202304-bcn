import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import EventAddPage from "./EventAddPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import EventsListPage from "../EventsListPage/EventsListPage";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../../store";
import theme from "../../styles/theme/theme";

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
      const expectedTitle = "ADD NEW EVENT";

      const routes: RouteObject[] = [
        { path: "/", element: <EventAddPage /> },
        { path: "/home", element: <EventsListPage /> },
      ];

      const router = createMemoryRouter(routes);

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </Provider>
      );

      const titleLabel = "Title:";
      const descriptionLabel = "Description:";
      const whereLabel = "Where:";
      const whenLabel = "When:";
      const imageLabel = "Image:";

      const titleTextField = "Concert in the park";
      const descriptionTextField = "A very good afternoon of music";
      const whereTextField = "Park de la Ciutadela";
      const whenTextField = "12/06/2023";
      const imageTextField = "http://example";

      await userEvent.type(screen.getByLabelText(titleLabel), titleTextField);
      await userEvent.type(
        screen.getByLabelText(descriptionLabel),
        descriptionTextField
      );
      await userEvent.type(screen.getByLabelText(whereLabel), whereTextField);
      await userEvent.type(screen.getByLabelText(whenLabel), whenTextField);
      await userEvent.type(screen.getByLabelText(imageLabel), imageTextField);

      const addButton = screen.getByRole("button", { name: "Add" });

      await userEvent.click(addButton);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(router.state.location.pathname).toBe("/");
      expect(title).toBeInTheDocument();
    });
  });
});
