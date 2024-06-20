import "./break_game.css";
import "./styles/star.css";
import "./styles/game_controller.css";
import {
  Audio,
  Canvas,
  Modal,
  PadBottom,
  ResumeBtn,
  Stars,
  StartBtn,
  Status,
} from "./components/index";
import useBreakGame from "./hooks/useBreakGame";
import PauseBtn from "./components/pause_btn";

export default function BreakGame() {
  const { gameStart, pause, canvasRef, gameRef } = useBreakGame();

  return (
    <div className="game-section">
      <div className="game-pad">
        <Audio audioUrl="audios/megalovania.mp3" />
        <div className="canvas-container">
          {!gameStart && (
            <Modal
              button={<StartBtn canvasRef={canvasRef} gameRef={gameRef} />}
            />
          )}

          {pause && <Modal button={<ResumeBtn gameRef={gameRef} />} />}
          <Status />
          <Canvas ref={canvasRef} />
          <Stars />
        </div>
        <PadBottom button={<PauseBtn gameRef={gameRef} />} />
      </div>
    </div>
  );
}
