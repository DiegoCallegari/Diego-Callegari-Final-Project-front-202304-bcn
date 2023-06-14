export interface EventDataStructure {
  title: string;
  image: string;
  neighbourhood: string;
  description: string;
  date: string;
  id: string;
  user?: string;
}

export interface EventState {
  events: EventDataStructure[];
}

export interface EventIdStructure {
  idEvent: string;
}

export interface EventStructure {
  title: string;
  image: string;
  neighbourhood: string;
  description: string;
  date: string;
}
