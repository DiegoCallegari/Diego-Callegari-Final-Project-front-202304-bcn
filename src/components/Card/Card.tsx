import { EventDataStructure } from "../../store/events/types";
import CardStyled from "./CardSyle";

interface EventProps {
  event: EventDataStructure;
}

const Card = ({ event }: EventProps): React.ReactElement => {
  return (
    <CardStyled>
      <img
        className="card-image"
        src={event.image}
        alt={event.title}
        width={150}
        height={90}
      />
      <section className="card-describe">
        <h3 className="card-describe__title">{event.title}</h3>
        <span className="card-describe__subtitle">{event.neighbourhood}</span>
      </section>
    </CardStyled>
  );
};

export default Card;
