import { useAppSelector } from "../../store";
import { EventDataStructure } from "../../store/events/types";
import Button from "../Button/Button";
import CardStyled from "./EventCardStyled";

interface EventCardProps {
  event: EventDataStructure;
  actionOnClick: (idEvent: string) => void;
  isLazy?: "eager" | "lazy";
}

const EventCard = ({
  event,
  actionOnClick,
  isLazy,
}: EventCardProps): React.ReactElement => {
  const { id: userId } = useAppSelector((state) => state.user);

  const isEventOwner = userId === event.user;

  return (
    <CardStyled>
      <img
        loading={isLazy}
        className="card-image"
        src={event.image}
        alt={event.title}
        width={150}
        height={90}
      />
      <section className="card-describe">
        <div className="control_title">
          <h3 className="card-describe__title">{event.title}</h3>
          <span className="card-describe__subtitle">{event.neighbourhood}</span>
        </div>

        {isEventOwner && (
          <div className="card-describe__button-control">
            <Button accessibility="edit" className="edit-button">
              <img
                width={25}
                height={25}
                src="/icons/edit.svg"
                alt="edit"
                className="img"
              />
            </Button>
            <Button
              accessibility="delete"
              className="delete-button"
              onClick={() => actionOnClick(event.id)}
            >
              <img
                width={23}
                height={23}
                src="/icons/delete.svg"
                alt="delete"
                className="img"
              />
            </Button>
          </div>
        )}
      </section>
    </CardStyled>
  );
};

export default EventCard;
