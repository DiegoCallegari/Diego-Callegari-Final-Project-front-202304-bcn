import { ModalStructure } from "../../store/ui/types";

export const isCreatedEvent: ModalStructure = {
  isError: false,
  isVisible: false,
  title: "Success",
  text: "Event created",
};

export const isEditedEvent: ModalStructure = {
  isError: false,
  isVisible: false,
  title: "Very well",
  text: "Event updated!",
};

export const isDeletedEvent: ModalStructure = {
  isError: false,
  isVisible: false,
  title: "Success",
  text: "Event deleted!",
};

export const isLoggedOut: ModalStructure = {
  isError: false,
  isVisible: false,
  title: "LOGOUT",
  text: "We hope to see you soon",
};

export const isNotCreatedEvent: ModalStructure = {
  isError: true,
  isVisible: false,
  title: "ERROR",
  text: "Event is not created",
};

export const isNotUpdatedEvent: ModalStructure = {
  isError: true,
  isVisible: false,
  title: "ERROR",
  text: "Event is not updated",
};

export const isNotDeletedEvent: ModalStructure = {
  isError: true,
  isVisible: false,
  title: "ERROR",
  text: "Event coudn't be deleted",
};

export const wrongCredentials: ModalStructure = {
  isError: true,
  isVisible: false,
  title: "Wrong credentials",
  text: "Username or password doesn't match",
};

export const notAvailableList: ModalStructure = {
  isError: true,
  isVisible: false,
  title: "Not available!",
  text: "Can't get the list of events",
};
