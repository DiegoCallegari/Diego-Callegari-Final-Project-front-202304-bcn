import EventsListPageStyled from "./EventsListPageStyled";

const EventsListPage = (): React.ReactElement => {
  return (
    <EventsListPageStyled>
      <h2 className="page-title">NOW IN BARCELONA</h2>
      <div className="division"></div>
    </EventsListPageStyled>
  );
};

export default EventsListPage;
