import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { gameStartAtom } from "../../../utils/game_atom";

interface AudioProps {
  audioUrl: string;
}

export default function Audio({ audioUrl }: AudioProps) {
  const gameStart = useRecoilValue(gameStartAtom);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (gameStart) audioRef.current.play();
    if (!gameStart) audioRef.current.pause();
  }, [gameStart]);

  return (
    <audio ref={audioRef} id="game-audio" loop>
      <source src={audioUrl} type="audio/mpeg" />
    </audio>
  );
}
