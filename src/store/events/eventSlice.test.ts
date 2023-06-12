import { eventsMocks } from "../../mocks/eventsMocks";
import {
  addEventActionCreator,
  deleteEventActionCreator,
  eventReducer,
  loadEventsActionCreator,
} from "./eventSlice";
import { EventDataStructure, EventState } from "./types";

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

  describe("When it receives a list of events and a deleteEvent action", () => {
    test("Then it should return the new state with a list of 1 event", () => {
      const currentEvent: EventState = {
        events: eventsMocks,
      };

      const expectedNewEventState = {
        ...currentEvent,
        events: eventsMocks.slice(1),
      };

      const newEventState = eventReducer(
        currentEvent,
        deleteEventActionCreator({
          idEvent: "1234",
        })
      );

      expect(newEventState).toStrictEqual(expectedNewEventState);
    });
  });

  describe("When an EventsForm calls addEvents function", () => {
    test("Then it should shows a list with the new event add", async () => {
      const currentEvent: EventState = {
        events: [eventsMocks[0]],
      };

      const newEventState: EventState = eventReducer(
        currentEvent,
        addEventActionCreator(eventsMocks[1])
      );

      expect(newEventState).toStrictEqual({ events: eventsMocks });
    });
  });
});
