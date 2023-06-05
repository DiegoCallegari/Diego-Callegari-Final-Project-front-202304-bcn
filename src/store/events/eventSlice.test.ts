import { eventsMocks } from "../../mocks/userMocks";
import {
  EventState,
  eventReducer,
  loadEventsActionCreator,
} from "./eventSlice";
import { EventDataStructure } from "./types";

describe("Given an eventReducer", () => {
  describe("When it receives an empty initial state and a loadEvents action", () => {
    test("Then it should return the new state with a list of 2 events", () => {
      const eventInitialState: EventDataStructure[] = [];

      const currentEvent: EventState = { events: eventInitialState };

      const events = loadEventsActionCreator(eventsMocks);

      const expectedNewEventsState: EventState = {
        ...eventInitialState,
        events: eventsMocks,
      };

      const newState: EventState = eventReducer(currentEvent, events);
      expect(expectedNewEventsState).toStrictEqual(newState);
    });
  });
});
