import { ContentItem } from "~/services/interfaces";

export const getData = (): Promise<IState> =>
  fetch(`https://danduh.me/assets/data.json`)
    .then((response) => {
      return response.json();
    })
    .then((parsedResponse) => {
      return parsedResponse;
    });


interface IState {
  upcomming?: ContentItem[];
  videos: ContentItem[];
  blogs: ContentItem[];
  tbds?: ContentItem[];
}
