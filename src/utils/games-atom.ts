import { atom } from "recoil";
import { TGameData } from "../components/game-list/types";

export const gamesAtom = atom<TGameData[]>({
  key: "gamesAtom",
  default: [],
});
