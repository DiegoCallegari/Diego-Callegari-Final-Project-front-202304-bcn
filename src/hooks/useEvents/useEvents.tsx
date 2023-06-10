import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store";
import { EventDataStructure, EventState } from "../../store/events/types";
import { apiUrl } from "../useUser/useUser";
import { useCallback } from "react";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import {
  isDeletedEvent,
  isNotDeletedEvent,
  notAvailableList,
} from "../../components/Modal/feedback";

const useEvents = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getEvents = useCallback(async (): Promise<
    EventDataStructure[] | undefined
  > => {
    try {
      dispatch(showLoadingActionCreator());

      const req = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const {
        data: { events },
      } = await axios.get<EventState>(`${apiUrl}/events`, req);

      dispatch(hideLoadingActionCreator());

      return events;
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          isVisible: true,
          title: notAvailableList.title,
          text: notAvailableList.text,
        })
      );
      throw new Error("Can't get the list of events at this moment");
    }
  }, [dispatch, token]);

  const deleteEvent = async (id: string) => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.delete(`${apiUrl}/events/${id}`);

      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          isError: false,
          title: isDeletedEvent.title,
          text: isDeletedEvent.text,
          isVisible: true,
        })
      );
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          isError: true,
          title: isNotDeletedEvent.title,
          text: isNotDeletedEvent.text,
          isVisible: true,
        })
      );
    }
  };

  return { getEvents, deleteEvent };
};

export default useEvents;
