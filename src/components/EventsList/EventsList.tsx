import { useAppSelector } from "../../store";
import EventCard from "../EventCard/EventCard";
import EventListStyled from "./EventsListStyled";

const EventList = (): React.ReactElement => {
  const { events } = useAppSelector((state) => state.event);

  return (
    <EventListStyled>
      {events.map((event, index) => (
        <li key={event.id}>
          <EventCard event={event} isLazy={index < 1 ? "eager" : "lazy"} />
        </li>
      ))}
    </EventListStyled>
  );
};

export default EventList;
