import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import EventList from "./EventsList";
import { EventMockCardOne, fourMocks } from "../../mocks/eventsMocks";
import userEvent from "@testing-library/user-event";
import { LoggedStateUserMock } from "../../mocks/userMocks";

describe("Given an EventList component", () => {
  describe("When it is rendered", () => {
    test("Then it should renders a list of events with the event 'Bunkers Sunset'", () => {
      const expectedText = fourMocks[1].title;

      const eventStore = {
        event: {
          events: fourMocks,
        },
      };

      renderWithProviders(wrapWithRouter(<EventList />), eventStore);

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the button delete is clicked", () => {
    test("Then it should show a list without the deleted event", async () => {
      renderWithProviders(wrapWithRouter(<EventList />), {
        event: { events: [EventMockCardOne] },
        user: LoggedStateUserMock,
      });

      const heading = screen.getByRole("heading", { name: "Concert" });
      const deleteButton = screen.getByRole("button", { name: "delete" });

      await userEvent.click(deleteButton);

      expect(heading).not.toBeInTheDocument();
    });
  });
});
