import { useEffect } from "react";
import "./break_game.css";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./classes/Contants";
import { Game } from "./classes/Game";

export default function BreakGame() {
  useEffect(() => {
    const canvas = document.getElementById(
      "break-brick-gui"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const game = new Game(ctx!);
    game.run();
  });

  return (
    <div className="game-section">
      <div className="game-machine-margin"></div>
      <div className="game-machine-shadow"></div>
      <div className="game-machine">
        <div className="canvas-container">
          <div className="game-console">
            <div className="game-status">
              <div id="life"></div>
              <div id="round"></div>
              <div id="bricks"></div>
            </div>
          </div>
          <canvas
            id="break-brick-gui"
            className="display"
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
          />
          {[...Array(100)].map((value) => {
            return (
              <div
                key={value}
                className="star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1.5}s`,
                }}
              />
            );
          })}
        </div>
        <div className="buttons-wrap">
          <div className="arrow-btn">
            <div className="arrow-btn-item"></div>
            <div className="arrow-btn-item"></div>
            <div className="arrow-btn-item"></div>
            <div className="arrow-btn-item"></div>
            <div className="arrow-btn-item"></div>
            <div className="arrow-btn-item"></div>
            <div className="arrow-btn-item"></div>
            <div className="arrow-btn-item"></div>
            <div className="arrow-btn-item"></div>
          </div>
          <div className="circle-btn">
            <div className="circle-btn-item"></div>
            <div className="circle-btn-item"></div>
            <div className="circle-btn-item"></div>
            <div className="circle-btn-item"></div>
          </div>
        </div>
      </div>
      <div id="game-modal">
        <div id="game-status"></div>
        <button id="game-start-btn">game start!</button>
        <button id="game-restart-btn">restart</button>
      </div>
      <div className="game-machine-margin"></div>
    </div>
  );
}
