import { useRecoilValue, useSetRecoilState } from "recoil";
import { Game } from "../classes/Game";
import { gameBtnMsgAtom, gameStartAtom } from "../../../utils/game_atom";
import { useGameCallback } from "../hooks/useGameCallback";

interface StartBtnProps {
  gameRef: React.MutableRefObject<Game | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

export default function StartBtn({ gameRef, canvasRef }: StartBtnProps) {
  const buttonMsg = useRecoilValue(gameBtnMsgAtom);
  const setGameStart = useSetRecoilState(gameStartAtom);
  const gameCallback = useGameCallback();

  const onClick = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const game = new Game(ctx, gameCallback);
    setGameStart(true);
    gameRef.current = game;
    game.run();
  };

  return (
    <button className="game-modal__btn" onClick={onClick}>
      {buttonMsg}
    </button>
  );
}
