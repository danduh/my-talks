export interface Event {
  eventName: string;
  date: string;
  location: string;
}

export interface Video {
  title: string;
  url: string;
  thumbnail: string;
  events: Event[];
  language: string;
  tags: string[];
  description?: string;
}
