import { renderHook } from "@testing-library/react";
import useEvents from "./useEvents";
import { wrapper } from "../../utils/testUtils";
import { eventsMocks } from "../../mocks/eventsMocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

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

    describe("When it calls with the getEvents function but it's not possible to connect to Api Rest", () => {
      test("Then it should return an error message 'Can't get the list of events at this moment'", async () => {
        server.resetHandlers(...errorHandlers);

        const expectedError = "Can't get the list of events";

        const {
          result: {
            current: { getEvents },
          },
        } = renderHook(() => useEvents(), { wrapper: wrapper });

        const events = getEvents();

        expect(events).rejects.toThrowError(expectedError);
      });
    });
  });
});
