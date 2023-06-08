import { useEffect } from "react";
import EventList from "../../components/EventsList/EventsList";
import { useAppDispatch } from "../../store";
import { loadEventsActionCreator } from "../../store/events/eventSlice";
import EventsListPageStyled from "./EventsListPageStyled";
import useEvents from "../../hooks/useEvents/useEvents";

const EventsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getEvents } = useEvents();

  useEffect(() => {
    (async () => {
      const events = await getEvents();
      if (events) {
        dispatch(loadEventsActionCreator(events));

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = events[0].image;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
      }
    })();
  }, [dispatch, getEvents]);

  return (
    <EventsListPageStyled>
      <h2 className="page-title">NOW IN BARCELONA</h2>
      <EventList />
    </EventsListPageStyled>
  );
};

export default EventsListPage;
