import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import EventCard from "./EventCard";
import { eventsMocks } from "../../mocks/eventsMocks";

describe("Given a EventCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a event's image with the same alternative text than the title", () => {
      const expectAltTextImage = eventsMocks[0].title;

      renderWithProviders(
        wrapWithRouter(
          <EventCard
            isLazy={eventsMocks.indexOf(eventsMocks[0]) < 1 ? "eager" : "lazy"}
            actionOnClick={() => ({})}
            event={eventsMocks[0]}
          />
        )
      );
      const expectedImage = screen.getByRole("img", {
        name: expectAltTextImage,
      });

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
