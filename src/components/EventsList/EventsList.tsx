import { useAppSelector } from "../../store";
import EventCard from "../EventCard/EventCard";
import EventListStyled from "./EventsListStyled";

const EventList = (): React.ReactElement => {
  const { events } = useAppSelector((state) => state.event);

  return (
    <EventListStyled>
      {events.map((event) => (
        <li key={event.id}>
          <EventCard event={event} />
        </li>
      ))}
    </EventListStyled>
  );
};

export default EventList;
