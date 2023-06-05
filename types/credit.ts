import { Cast } from "./cast";

export interface Credit {
  id: number;
  cast: Cast[];
  crew: Cast[];
}
