import EventFormStyled from "./EventFormStyled";

const EventForm = (): React.ReactElement => {
  return (
    <EventFormStyled>
      <label className="add-form__label" htmlFor="title">
        Title:
        <input className="add-form__input" type="text" id="title" />
      </label>

      <label className="add-form__label" htmlFor="description">
        Description:
        <textarea
          name="description"
          id="description"
          className="add-form__description"
        ></textarea>
      </label>

      <div className="add-form__label add-form__where">
        <label className="add-form__label" htmlFor="where">
          Where:
        </label>
        <select id="where" className="add-form__input">
          <option value="El Born">El Born</option>
          <option value="El Carmel">El Carmel</option>
          <option value="El Clot">El Clot</option>
          <option value="El Guinardó">El Guinardó</option>
          <option value="El Poble-sec">El Poble-sec</option>
          <option value="El Putxet i el Farró">El Putxet i el Farró</option>
          <option value="El Raval">El Raval</option>
          <option value="El Gòtic (Barrio Gótico)">
            El Gòtic (Barrio Gótico)
          </option>
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
        <label className="add-form__label" htmlFor="when">
          When:
        </label>
        <input
          type="date"
          className="add-form__label add-form__date"
          id="when"
        />
      </div>

      <label className="add-form__label" htmlFor="photo">
        Photo:
        <input className="add-form__input" type="text" id="title" />
      </label>

      <button className="add-button" type="submit">
        Add
      </button>
    </EventFormStyled>
  );
};

export default EventForm;
