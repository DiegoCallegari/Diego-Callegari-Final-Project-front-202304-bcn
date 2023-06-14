import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  EventDataStructure,
  EventState,
  EventStructure,
} from "../../store/events/types";
import { apiUrl } from "../useUser/useUser";
import { useCallback } from "react";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import {
  isCreatedEvent,
  isDeletedEvent,
  isNotCreatedEvent,
  isNotDeletedEvent,
  notAvailableList,
} from "../../components/Modal/feedback";
import paths from "../../routers/paths";

const useEvents = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const reqConfigAuthorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getEvents = useCallback(async (): Promise<
    EventDataStructure[] | undefined
  > => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { events },
      } = await axios.get<EventState>(`${apiUrl}/events`);

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
  }, [dispatch]);

  const deleteEvent = async (idEvent: string) => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.delete(
        `${apiUrl}${paths.events}/${idEvent}`,
        reqConfigAuthorization
      );

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

  const addEvent = async (
    eventData: EventStructure
  ): Promise<EventDataStructure | undefined> => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { event },
      } = await axios.post<{ event: EventDataStructure }>(
        `${apiUrl}${paths.events}${paths.add}`,
        eventData,
        reqConfigAuthorization
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: false,
          isVisible: true,
          text: isCreatedEvent.text,
          title: isCreatedEvent.title,
        })
      );

      return event;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          isVisible: true,
          text: isNotCreatedEvent.text,
          title: isNotCreatedEvent.title,
        })
      );
    }
  };

  return { getEvents, deleteEvent, addEvent };
};

export default useEvents;
