import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  gameModalMsgAtom,
  gamePauseAtom,
  gameStartAtom,
} from "../../../utils/game_atom";
import { Game } from "../classes/Game";
import { INITIAL_MESSAGE } from "../constants";

export default function useBreakGame() {
  const [gameStart, setGameStart] = useRecoilState(gameStartAtom);
  const setMessage = useSetRecoilState(gameModalMsgAtom);
  const [pause, setPause] = useRecoilState(gamePauseAtom);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gameRef = useRef<Game | null>(null);

  useEffect(() => {
    setMessage(INITIAL_MESSAGE);
    return () => {
      gameRef.current?.cleanup();
      gameRef.current = null;
      setPause(false);
      setGameStart(false);
    };
  }, [setMessage, setGameStart, setPause]);

  return {
    gameStart,
    pause,
    canvasRef,
    gameRef,
  };
}
