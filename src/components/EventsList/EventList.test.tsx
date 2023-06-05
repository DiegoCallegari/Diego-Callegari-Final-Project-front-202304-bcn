import { screen } from "@testing-library/react";
import { eventsMocks } from "../../mocks/userMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import EventList from "./EventsList";

describe("Given an EventList component", () => {
  describe("When it is rendered", () => {
    test("Then it should renders a list of events with the event 'Bunkers Sunset'", () => {
      const expectedText = eventsMocks[1].title;

      const eventStore = {
        event: {
          events: eventsMocks,
        },
      };

      renderWithProviders(wrapWithRouter(<EventList />), eventStore);

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});
