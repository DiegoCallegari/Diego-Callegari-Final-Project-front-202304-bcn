import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EventDataStructure, EventState } from "./types";

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
  },
});

export const { loadEvents: loadEventsActionCreator } = eventSlice.actions;
export const eventReducer = eventSlice.reducer;
