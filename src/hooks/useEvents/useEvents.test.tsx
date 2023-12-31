import { renderHook } from "@testing-library/react";
import useEvents from "./useEvents";
import { wrapper } from "../../utils/testUtils";
import {
  EventMockCardOne,
  EventMockCardTwo,
  eventsMocks,
} from "../../mocks/eventsMocks";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import { store } from "../../store";
import {
  isCreatedEvent,
  isDeletedEvent,
  isNotCreatedEvent,
  isNotDeletedEvent,
} from "../../components/Modal/feedback";
import { vi } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

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
      test("Then it should return an error message 'Can't get the list of events'", async () => {
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

describe("Given a deleteEvent custom hook", () => {
  describe("When it is invoked with a valid event id", () => {
    test("Then it should show a modal with the text 'Event deleted!'", async () => {
      server.resetHandlers(...handlers);

      const id = eventsMocks[0].id;

      const {
        result: {
          current: { deleteEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: wrapper });

      await deleteEvent(id);

      const text = store.getState().ui.modal.text;

      expect(text).toBe(isDeletedEvent.text);
    });
  });

  describe("When it is invoked with an invalid event id", () => {
    test("Then it should show a modal with the text 'Event coudn't be deleted'", async () => {
      server.resetHandlers(...errorHandlers);

      const id = eventsMocks[0].id;

      const {
        result: {
          current: { deleteEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: wrapper });

      await deleteEvent(id);

      const text = store.getState().ui.modal.text;

      expect(text).toBe(isNotDeletedEvent.text);
    });
  });
});

describe("Given a addEvent fucntion", () => {
  describe("When it's called with a new event data", () => {
    test("Then it should show a succeed feedback modal with the title message 'Success'", async () => {
      const expectedFeedbackTitle = isCreatedEvent.title;

      const {
        result: {
          current: { addEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: wrapper });

      await addEvent(EventMockCardOne);

      const title = store.getState().ui.modal.title;

      expect(title).toBe(expectedFeedbackTitle);
    });
  });
});

describe("Given a addEvent fucntion", () => {
  describe("When it's called with a new event data 'Concert'", () => {
    test("Then it should return the card of the new event 'Concert'", async () => {
      const expectedNewEvent = EventMockCardOne;

      const {
        result: {
          current: { addEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: wrapper });

      const response = await addEvent(EventMockCardTwo);

      expect(response).toStrictEqual(expectedNewEvent);
    });
  });

  describe("When it's called but there was a problem on adding the new event", () => {
    test("Then it should show a feedback message with the text 'Event is not created'", async () => {
      server.resetHandlers(...errorHandlers);

      const event = EventMockCardOne;

      const {
        result: {
          current: { addEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: wrapper });

      await addEvent(event);

      const message = store.getState().ui.modal.text;

      expect(message).toBe(isNotCreatedEvent.text);
    });
  });
});
