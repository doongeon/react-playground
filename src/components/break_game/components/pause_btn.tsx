import { useRecoilState, useSetRecoilState } from "recoil";
import { Game } from "../classes/Game";
import {
  gameModalMsgAtom,
  gamePauseAtom,
  gameStartAtom,
} from "../../../utils/game_atom";
import { PauseIcon } from "@heroicons/react/16/solid";

interface PauseBtnProps {
  gameRef: React.RefObject<Game>;
}

export default function PauseBtn({ gameRef }: PauseBtnProps) {
  const [gameStart, setGameStart] = useRecoilState(gameStartAtom);
  const setPause = useSetRecoilState(gamePauseAtom);
  const setMessage = useSetRecoilState(gameModalMsgAtom);

  const onClick = () => {
    if (!gameStart) return;
    setGameStart(false);
    setPause(true);
    setMessage("pause");
    if (gameRef.current) gameRef.current.pauseGame();
  };

  return (
    <div
      id="pause"
      className="circle-btn-item pause-icon-container"
      onClick={onClick}
    >
      <PauseIcon id="pause" className="pause-icon" />
    </div>
  );
}
