import { EventDataStructure, EventStructure } from "../store/events/types";

export const eventsMocks: EventDataStructure[] = [
  {
    title: "Concert",
    image:
      "https://cdn.discordapp.com/attachments/1096796306695008286/1115235166374350878/concierto.jpeg",
    neighbourhood: "El Born",
    description: "",
    date: "21/02/2023",
    id: "1234",
  },
  {
    title: "Bunkers Sunset",
    image:
      "https://cdn.discordapp.com/attachments/1096796306695008286/1115298838467596288/bunkers.jpg",
    neighbourhood: "El Carmel",
    description: "",
    date: "21/02/2023",
    id: "5678",
  },
];

export const EventMockCard: EventDataStructure[] = [
  {
    title: "Concert",
    image:
      "https://cdn.discordapp.com/attachments/1096796306695008286/1115235166374350878/concierto.jpeg",
    neighbourhood: "El Born",
    description: "",
    date: "21/02/2023",
    id: "1234",
  },
];

export const EventMockCardOne: EventDataStructure = {
  title: "Concert",
  image:
    "https://cdn.discordapp.com/attachments/1096796306695008286/1115235166374350878/concierto.jpeg",
  neighbourhood: "El Born",
  description: "",
  date: "21/02/2023",
  id: "1234",
};

export const EventMockCardTwo: EventStructure = {
  title: "Concert",
  image:
    "https://cdn.discordapp.com/attachments/1096796306695008286/1115235166374350878/concierto.jpeg",
  neighbourhood: "El Born",
  description: "",
  date: "21/02/2023",
};
