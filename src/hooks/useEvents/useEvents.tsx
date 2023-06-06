import axios from "axios";
import { useAppSelector } from "../../store";
import { EventDataStructure } from "../../store/events/types";
import { EventState } from "../../store/events/eventSlice";
import { apiUrl } from "../useUser/useUser";

const useEvents = () => {
  const { token } = useAppSelector((state) => state.user);

  const getEvents = async (): Promise<EventDataStructure[]> => {
    const request = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const {
      data: { events },
    } = await axios.get<EventState>(`${apiUrl}/events`, request);

    return events;
  };
  return { getEvents };
};

export default useEvents;
