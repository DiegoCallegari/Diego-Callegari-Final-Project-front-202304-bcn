import { useNavigate } from "react-router-dom";
import EventForm from "../../components/EventForm/EventForm";
import useEvents from "../../hooks/useEvents/useEvents";
import { useAppDispatch } from "../../store";
import EventAddPageStyed from "./EventAddPageStyled";
import { addEventActionCreator } from "../../store/events/eventSlice";
import paths from "../../routers/paths";
import { EventStructure } from "../../store/events/types";

const EventAddPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  const submitEventForm = async (newEventData: EventStructure) => {
    const newEvent = await addEvent(newEventData);

    if (newEvent) {
      dispatch(addEventActionCreator(newEvent));
      navigate(paths.home);
    }
  };

  return (
    <EventAddPageStyed>
      <h2 className="page-title">ADD NEW EVENT</h2>
      <EventForm submitEventForm={submitEventForm} />
    </EventAddPageStyed>
  );
};

export default EventAddPage;
