import Ball from "./Ball";
import { CollisionDetector } from "./CollisionDetector";
import { Controller } from "./Controller";
import { Paddle } from "./Paddle";
import { Stage } from "./Stage";
import { CANVAS_HEIGHT, CANVAS_WIDTH, FINAL_ROUND } from "./Contants";
import MAPS from "./Maps";

export class Game {
  private ctx: CanvasRenderingContext2D;
  private stage: Stage;
  private paddle: Paddle;
  private ball: Ball;
  private collisionDetector: CollisionDetector;
  private controller = new Controller();
  private interval: any;
  private status = {
    start: false,
    round: 1,
    life: 3,
    clear: false,
  };
  private onGameEnd: (status: {
    start: boolean;
    round: number;
    life: number;
    clear: boolean;
  }) => void;

  constructor(
    ctx: CanvasRenderingContext2D,
    onGameEnd: (status: {
      start: boolean;
      round: number;
      life: number;
      clear: boolean;
    }) => void | null
  ) {
    this.ctx = ctx;
    this.stage = new Stage(this.ctx, MAPS[1]);
    this.paddle = new Paddle(ctx);
    this.ball = new Ball(ctx, this.paddle);
    this.collisionDetector = new CollisionDetector(
      this.ball,
      this.paddle,
      this.stage
    );
    this.onGameEnd = onGameEnd;
  }

  public run() {
    this.status.start = true;
    this.status.clear = false;
    this.resetGame();
    this.writeRound();
    this.writeLife();
    this.writeLeftBricks();
    this.play();
  }

  public play() {
    const interval = setInterval(() => {
      if (!this.status.start) return;

      this.draw();
      const collision = this.collisionDetector.detect();

      if (this.controller.leftPressed) this.moveLeft();
      if (this.controller.rightPressed) this.moveRight();
      if (this.controller.spacePressed) this.shootBall();
      if (collision.falldown) this.discountLife();
      if (collision.brick) this.writeLeftBricks();

      if (this.getLeftBricks() < 1) {
        this.stage.drawBricks();
        this.ball.stop();
        this.nextStage();
      }

      if (this.status.life < 1) {
        this.status.start = false;
        clearInterval(this.interval);
        this.onGameEnd(this.status);
      }

      if (this.status.round === FINAL_ROUND && this.getLeftBricks() < 1) {
        clearInterval(this.interval);
        this.status.clear = true;
        this.onGameEnd(this.status);
      }

      console.log("frame");
    }, 16);

    this.interval = interval;
  }

  private draw() {
    this.clearCanvas();
    this.ball.draw();
    this.paddle.draw();
    this.stage.drawBricks();
  }

  private clearCanvas() {
    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  private moveLeft() {
    if (!this.status.start) return;
    this.paddle.moveLeft();
  }

  private moveRight() {
    if (!this.status.start) return;
    this.paddle.moveRight();
  }

  private shootBall() {
    if (!this.status.start) return;
    this.ball.shoot();
  }

  private getLeftBricks() {
    return this.stage.getTotalBricks();
  }

  private resetGame() {
    this.status.life = 3;
    this.status.round = 1;
  }

  public pauseGame() {
    this.status.start = false;
    clearInterval(this.interval);
  }

  public resumeGame() {
    this.status.start = true;
    this.play();
  }

  private nextStage() {
    if (!this.status.start) return;
    if (this.status.round === FINAL_ROUND) return;

    this.status.start = false;
    this.ball.fixOnPaddle();
    this.status.round += 1;
    this.stage = new Stage(this.ctx, MAPS[this.status.round]);
    this.collisionDetector = new CollisionDetector(
      this.ball,
      this.paddle,
      this.stage
    );

    setTimeout(() => {
      this.status.start = true;
      this.writeRound();
      this.writeLeftBricks();
    }, 500);
  }

  private discountLife() {
    this.status.life -= 1;
    this.writeLife();
  }

  private writeRound() {
    const roundWindow = document.getElementById("round");
    if (!roundWindow) return;

    roundWindow.innerText = `round: ${this.status.round}`;
  }

  private writeLife() {
    const lifeWindow = document.getElementById("life");
    if (!lifeWindow) return;

    lifeWindow.innerText = "life: " + this.status.life;
  }

  private writeLeftBricks() {
    const leftBricksWindow = document.getElementById("bricks");
    if (!leftBricksWindow) return;

    leftBricksWindow.innerText = "bricks: " + this.getLeftBricks();
  }

  public cleanup() {
    this.controller.free();
    clearInterval(this.interval);
  }
}
