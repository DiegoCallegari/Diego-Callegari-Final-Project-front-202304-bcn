import Card from "../../components/Card/Card";
import { eventsMocks } from "../../mocks/userMocks";
import { useAppDispatch } from "../../store";
import { loadEventsActionCreator } from "../../store/events/eventSlice";
import EventsListPageStyled from "./EventsListPageStyled";

const EventsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadEventsActionCreator(eventsMocks));

  return (
    <EventsListPageStyled>
      <h2 className="page-title">NOW IN BARCELONA</h2>
      <div className="linea-control">
        <div className="linea-1" />
        <div className="linea-2" />
        <div className="linea-3" />
        <div className="linea-4" />
      </div>
      <Card event={eventsMocks[0]} />
    </EventsListPageStyled>
  );
};

export default EventsListPage;
