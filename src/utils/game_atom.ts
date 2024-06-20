import { atom } from "recoil";

export const gameStartAtom = atom({
  key: "gameStartAtom",
  default: false,
});

export const gamePauseAtom = atom({
  key: "gamePauseAtom",
  default: false,
});

export const gameClearAtom = atom({
  key: "gameClearAtom",
  default: false,
});

export const gameModalMsgAtom = atom({
  key: "gameModalMsgAtom",
  default: "break brick",
});

export const gameBtnMsgAtom = atom({
  key: "gameBtnMsg",
  default: "start",
});
