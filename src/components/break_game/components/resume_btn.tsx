import { useRecoilState, useSetRecoilState } from "recoil";
import { Game } from "../classes/Game";
import { gamePauseAtom, gameStartAtom } from "../../../utils/game_atom";

interface ResumeBtnProps {
  gameRef: React.MutableRefObject<Game | null>;
}

export default function ResumeBtn({ gameRef }: ResumeBtnProps) {
  const [gameStart, setGameStart] = useRecoilState(gameStartAtom);
  const setPause = useSetRecoilState(gamePauseAtom);

  const onClick = () => {
    if (gameStart) return;
    setGameStart(true);
    setPause(false);
    if (gameRef.current) gameRef.current.resumeGame();
  };

  return (
    <button className="game-modal__btn" onClick={onClick}>
      resume
    </button>
  );
}
