import EventAddForm from "../../components/EventAddForm/EventAddForm";
import EventAddPageStyed from "./EventAddPageStyled";

const EventAddPage = (): React.ReactElement => {
  return (
    <EventAddPageStyed>
      <h2 className="page-title">ADD NEW EVENT</h2>
      <EventAddForm />
    </EventAddPageStyed>
  );
};

export default EventAddPage;
