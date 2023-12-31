import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EventDataStructure, EventIdStructure, EventState } from "./types";

export const eventInitialState: EventState = {
  events: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState: eventInitialState,
  reducers: {
    loadEvents: (
      currentEvent: EventState,
      action: PayloadAction<EventDataStructure[]>
    ): EventState => ({ ...currentEvent, events: [...action.payload] }),

    deleteEvent: (
      currentEvent: EventState,
      action: PayloadAction<EventIdStructure>
    ): EventState => ({
      ...currentEvent,
      events: currentEvent.events.filter(
        (event) => event.id !== action.payload.idEvent
      ),
    }),

    addEvent: (
      currentEvent: EventState,
      action: PayloadAction<EventDataStructure>
    ): EventState => ({
      ...currentEvent,
      events: [...currentEvent.events, action.payload],
    }),
  },
});

export const {
  loadEvents: loadEventsActionCreator,
  deleteEvent: deleteEventActionCreator,
  addEvent: addEventActionCreator,
} = eventSlice.actions;
export const eventReducer = eventSlice.reducer;
