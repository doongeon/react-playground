import { useSetRecoilState } from "recoil";
import {
  gameBtnMsgAtom,
  gameClearAtom,
  gameModalMsgAtom,
  gameStartAtom,
} from "../../../utils/game_atom";
import {
  LOSE_BUTTON_MESSAGE,
  LOSE_MESSAGE,
  WIN_BUTTON_MESSAGE,
  WIN_MESSAGE,
} from "../constants";

export function useGameCallback() {
  const setGameStart = useSetRecoilState(gameStartAtom);
  const setIsClear = useSetRecoilState(gameClearAtom);
  const setMessage = useSetRecoilState(gameModalMsgAtom);
  const setButtonMsg = useSetRecoilState(gameBtnMsgAtom);

  function gameCallback(gameStatus: {
    start: boolean;
    round: number;
    life: number;
    clear: boolean;
  }) {
    setGameStart(() => false);
    if (gameStatus.clear) {
      setIsClear(true);
      setMessage(WIN_MESSAGE);
      setButtonMsg(WIN_BUTTON_MESSAGE);
    } else {
      setIsClear(false);
      setMessage(LOSE_MESSAGE);
      setButtonMsg(LOSE_BUTTON_MESSAGE);
    }
  }

  return gameCallback;
}
