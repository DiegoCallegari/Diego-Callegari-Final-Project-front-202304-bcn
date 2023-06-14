import useEvents from "../../hooks/useEvents/useEvents";
import { useAppDispatch, useAppSelector } from "../../store";
import { deleteEventActionCreator } from "../../store/events/eventSlice";
import EventCard from "../EventCard/EventCard";
import EventListStyled from "./EventsListStyled";

const EventList = (): React.ReactElement => {
  const { events } = useAppSelector((state) => state.event);
  const dispatch = useAppDispatch();

  const { deleteEvent } = useEvents();

  const deleteOnClick = async (idEvent: string) => {
    await deleteEvent(idEvent);
    dispatch(deleteEventActionCreator({ idEvent }));
  };

  return (
    <EventListStyled>
      {events.map((event, index) => (
        <li key={event.id}>
          <EventCard
            event={event}
            isLazy={index < 3 ? "eager" : "lazy"}
            actionOnClick={deleteOnClick}
          />
        </li>
      ))}
    </EventListStyled>
  );
};

export default EventList;
