import { renderHook } from "@testing-library/react";
import useEvents from "./useEvents";
import { wrapper } from "../../utils/testUtils";
import { eventsMocks } from "../../mocks/eventsMocks";

describe("Given a useEvents custom hook", () => {
  describe("When is called with the getEvents function", () => {
    test("Then it should return a list of events", async () => {
      const expectedEvents = eventsMocks;
      const {
        result: {
          current: { getEvents },
        },
      } = renderHook(() => useEvents(), { wrapper: wrapper });

      const events = await getEvents();

      expect(events).toStrictEqual(expectedEvents);
    });
  });
});
