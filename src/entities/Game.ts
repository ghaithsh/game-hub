import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./publisher";

export interface Game {
  id: number;
  genres: Genre[];
  publishers: Publisher[];
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
  slug: string;
  description_raw: string;
}
