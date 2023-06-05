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
      <div className="division"></div>
    </EventsListPageStyled>
  );
};

export default EventsListPage;
