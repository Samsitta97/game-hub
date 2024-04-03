import { Platform } from "./Platform";
import { Genre } from "./Genre";
import { Publisher } from "./Publishers";

export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  publishers: Publisher[];
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
