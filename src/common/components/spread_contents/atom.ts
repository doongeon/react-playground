import { atom } from "recoil";

export const spreadBoardIntersectingAtom = atom({
  key: "spreadBoardIntersectingAtom",
  default: false,
});

export const restartSpreadAtom = atom({
  key: "restartSpreadAtom",
  default: false,
});
