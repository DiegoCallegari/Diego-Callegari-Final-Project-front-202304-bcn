import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store";
import { EventDataStructure, EventState } from "../../store/events/types";
import { apiUrl } from "../useUser/useUser";
import { useCallback } from "react";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const useEvents = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getEvents = useCallback(async (): Promise<EventDataStructure[]> => {
    try {
      dispatch(showLoadingActionCreator());

      const request = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const {
        data: { events },
      } = await axios.get<EventState>(`${apiUrl}/events`, request);
      dispatch(hideLoadingActionCreator());

      return events;
    } catch {
      throw new Error("Can't get the list of events at this moment");
    }
  }, [dispatch, token]);

  return { getEvents };
};

export default useEvents;
