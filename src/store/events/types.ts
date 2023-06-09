export interface EventDataStructure {
  title: string;
  image: string;
  neighbourhood: string;
  description: string;
  date: string;
  category: string;
  id: string;
}

export interface EventState {
  events: EventDataStructure[];
}

export interface EventIdStructure {
  idEvent: string;
}
