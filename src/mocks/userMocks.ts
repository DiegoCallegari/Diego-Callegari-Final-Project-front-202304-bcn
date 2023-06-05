import { EventDataStructure } from "../store/events/types";
import {
  UserCredentials,
  UserStateStructure,
  UserTokenStructure,
} from "../store/user/types";

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwODRiMjJhYTE1NTc4MjFhYmIwY2UiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU2NDIwOTIsImV4cCI6MTY4NTcyODQ5Mn0.pDPoO6HUjooUqXwXvQuzNZ9cwQA1AOl9XChYV0vLw1Q";

export const InitialStateUserMock: UserStateStructure = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};

export const userTokenStructureMock: UserTokenStructure = {
  username: "admin",
  id: "647084b22aa1557821abb0ce",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwODRiMjJhYTE1NTc4MjFhYmIwY2UiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU2NDIwOTIsImV4cCI6MTY4NTcyODQ5Mn0.pDPoO6HUjooUqXwXvQuzNZ9cwQA1AOl9XChYV0vLw1Q",
};

export const LoggedStateUserMock: UserStateStructure = {
  ...userTokenStructureMock,
  isLogged: true,
};

export const LoggedOutStateUserMock: UserStateStructure = {
  ...userTokenStructureMock,
  isLogged: false,
};

export const UserCredentialsMock: UserCredentials = {
  username: "admin",
  password: "admin",
};

export const eventsMocks: EventDataStructure[] = [
  {
    title: "Concert",
    image:
      "https://cdn.discordapp.com/attachments/1096796306695008286/1115235166374350878/concierto.jpeg",
    neighbourhood: "El Born",
    description: "",
    date: "21/02/2023",
    category: "apreciate",
    id: "1234",
  },
  {
    title: "Bunkers Sunset",
    image:
      "https://cdn.discordapp.com/attachments/1096796306695008286/1115298838467596288/bunkers.jpg",
    neighbourhood: "El Carmel",
    description: "",
    date: "21/02/2023",
    category: "nature",
    id: "5678",
  },
];
