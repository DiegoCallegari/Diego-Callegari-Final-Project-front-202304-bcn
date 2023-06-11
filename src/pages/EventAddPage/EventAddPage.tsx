import EventForm from "../../components/EventForm/EventForm";
import EventAddPageStyed from "./EventAddPageStyled";

const EventAddPage = (): React.ReactElement => {
  return (
    <EventAddPageStyed>
      <h2 className="page-title">ADD NEW EVENT</h2>
      <EventForm />
    </EventAddPageStyed>
  );
};

export default EventAddPage;
