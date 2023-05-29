# Event App

## Data layer

### Data

- Collection of Events
  - Event:
    - id
    - title
    - image
    - neighborhood
    - direction
    - description
    - date
    - user

### Modifications

- login()
- logout()
- loadEvents()
- loadEvent()
- filterEvents()
- addEvent()
- removeEvent()
- updateEvent()
- showLoader()
- closeSpinner()
- showModal()
- closeModal()

### Api operations (CustomHooks)

- useUser
- useAPI
- useToken
- useLocalStorage

## Components

### APP

- Receives a dispatch
- Check isToken
- Renders Layout component

### Header

- Shows a text

### NavBar

- Shows home, create and login navigations
- Navigate to respective page acording to links: home, create and login.
- If isToken Shows logout button and receives an actionOnClick to logout.

### EventList

- Receives an EventsCollection
- If isToken, renders a list of events with buttons to edit and delete.
- If isNotToken, renders a simplify version of the list without options to edit.

### EventDetail

- Receives an Event
- Receives a dispatch()
- Renders:
  A title of the Event,
  A description text of the Event,
  A direccion of the Event,
  A date for the Event,
  An image of the the Event

### LoginForm

- handleSubmit()
- Shows label text for the username and password
- Shows input text for the username and password
- Receives dispatch()
- Renders a Button component
  - text: "login"
  - actionOnClick: handleSubmit

### EventForm

- State: Event
- handleSubmit()
- Receives an optional event to update
- Shows label text for title, description, where, when and Photo
- Shows input text for title, description, where, when and urlPhoto
- Receives dispatch()
- Renders a Button component

### Button

- Receives a text or an icon
- Shows a button with the respective text/icon
- Receives an actionOnClick
- Calls the received action when the button is clicked

### Filter

- Renders a filter
- Receives an acionOnClick
- Calls a function to renders new list

### 404Page

- Shows a error message "Not found"

### Modals

- Renders a modal
- State: succes or error

### Loader

- Renders a loader
- State UI
