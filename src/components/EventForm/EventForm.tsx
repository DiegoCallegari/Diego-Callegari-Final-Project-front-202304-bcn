import { useState } from "react";
import { EventStructure } from "../../store/events/types";
import EventFormStyled from "./EventFormStyled";

interface EventFormProps {
  submitEventForm: (eventData: EventStructure) => void;
}

const EventForm = ({ submitEventForm }: EventFormProps): React.ReactElement => {
  const initialEventState: EventStructure = {
    title: "",
    image: "",
    neighbourhood: "",
    description: "",
    date: "",
  };

  const [eventData, setEventData] = useState(initialEventState);

  const handleOnChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEventData({
      ...eventData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitEventForm(eventData);
  };

  const isDisabled =
    eventData.title === "" ||
    eventData.image === "" ||
    eventData.neighbourhood === "" ||
    eventData.description === "" ||
    eventData.date === "";

  return (
    <EventFormStyled onSubmit={handleOnSubmit}>
      <label className="add-form__label" htmlFor="title">
        Title:
        <input
          className="add-form__input"
          type="text"
          id="title"
          onChange={handleOnChange}
          value={eventData.title}
        />
      </label>

      <label className="add-form__label" htmlFor="description">
        Description:
        <textarea
          name="description"
          id="description"
          className="add-form__description"
          onChange={handleOnChange}
          value={eventData.description}
        ></textarea>
      </label>

      <div className="add-form__label add-form__where">
        <label className="add-form__label" htmlFor="neighbourhood">
          Where:
        </label>
        <select
          id="neighbourhood"
          className="add-form__input"
          onChange={handleOnChange}
          value={eventData.neighbourhood}
        >
          <option hidden>Neighbourhood</option>
          <option value="El Born">El Born</option>
          <option value="El Carmel">El Carmel</option>
          <option value="El Clot">El Clot</option>
          <option value="El Guinardó">El Guinardó</option>
          <option value="El Poble-sec">El Poble-sec</option>
          <option value="El Putxet i el Farró">El Putxet i el Farró</option>
          <option value="El Raval">El Raval</option>
          <option value="El Gòtic (Barrio Gótico)">El Gòtic</option>
          <option value="El Poblenou">El Poblenou</option>
          <option value="Gràcia">Gràcia</option>
          <option value="Horta">Horta</option>
          <option value="La Barceloneta">La Barceloneta</option>
          <option value="La Sagrada Família">La Sagrada Família</option>
          <option value="Les Corts">Les Corts</option>
          <option value="Sant Andreu">Sant Andreu</option>
          <option value="Sant Antoni">Sant Antoni</option>
          <option value="Sant Pere, Santa Caterina i la Ribera">
            Sant Pere, Santa Caterina i la Ribera
          </option>
          <option value="Sarrià">Sarrià</option>
          <option value="Sants">Sants</option>
          <option value="Vallcarca i els Penitents">
            Vallcarca i els Penitents
          </option>
        </select>
      </div>

      <div className="add-form__label add-form__when">
        <label className="add-form__label" htmlFor="date">
          When:
        </label>
        <input
          type="date"
          className="add-form__label add-form__date"
          id="date"
          onChange={handleOnChange}
          value={eventData.date}
        />
      </div>

      <label className="add-form__label" htmlFor="image">
        Image:
        <input
          className="add-form__input"
          type="text"
          id="image"
          onChange={handleOnChange}
          value={eventData.image}
          placeholder="URL"
        />
      </label>

      <button className="add-button" type="submit" disabled={isDisabled}>
        Add
      </button>
    </EventFormStyled>
  );
};

export default EventForm;
