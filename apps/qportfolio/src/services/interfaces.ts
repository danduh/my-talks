export interface Event {
  eventName: string;
  date: string;
  location: string;
}

export interface ContentItem {
  title: string;
  url: string;
  thumbnail: string;
  events: Event[];
  language: string;
  tags: string[];
  description?: string;
}


export interface IState {
  content: {
    upcomming?: ContentItem[];
    videos: ContentItem[];
    blogs: ContentItem[];
    tbds?: ContentItem[];
  }
}
