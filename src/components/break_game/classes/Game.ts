import Ball from "./Ball";
import { CollisionDetector } from "./CollisionDetector";
import { Controller } from "./Controller";
import { Paddle } from "./Paddle";
import { Stage } from "./Stage";
import { CANVAS_HEIGHT, CANVAS_WIDTH, FINAL_ROUND } from "./Contants";
import MAPS from "./Maps";

export class Game {
  public ctx: CanvasRenderingContext2D;
  public status = {
    start: false,
    round: 1,
    life: 3,
    clear: false,
  };
  public stage: Stage;
  public paddle: Paddle;
  public ball: Ball;
  public collisionDetector: CollisionDetector;
  public controller = new Controller
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.stage = new Stage(this.ctx, MAPS[0]);
    this.paddle = new Paddle(ctx);
    this.ball = new Ball(ctx, this.paddle);
    this.collisionDetector = new CollisionDetector(
      this.ball,
      this.paddle,
      this.stage
    );
  }

  public run() {
    this.status.start = true;
    this.resetGame();
    this.play();
    return this.status;
  }

  public play() {
    const interval = setInterval(() => {
      this.draw();
      const collision = this.collisionDetector.detect();

      if (this.controller.leftPressed) this.moveLeft();
      if (this.controller.rightPressed) this.moveRight();
      if (this.controller.spacePressed) this.shootBall();

      if (collision.falldown) this.discountLife();
      if (this.getLeftBricks() < 1) {
        this.stage.drawBricks();
        this.ball.stop();
        setTimeout(() => this.nextStage(), 500);
        // this.nextStage();
      }

      document.getElementById(
        "round"
      )!.innerText = `round: ${this.status.round}`;
      document.getElementById("life")!.innerText = "life: " + this.status.life;
      document.getElementById("bricks")!.innerText =
        "bricks: " + this.getLeftBricks();

      if (this.status.life < 1) {
        this.status.start = false;
      }

      if (this.status.round === FINAL_ROUND && this.getLeftBricks() < 1) {
        clearInterval(interval);
      }

      console.log("frame");
    }, 16);
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

  private nextStage() {
    this.ball.fixOnPaddle();
    if (this.status.round === FINAL_ROUND) return;
    this.status.round += 1;
    this.stage = new Stage(this.ctx, MAPS[this.status.round - 1]);
    this.collisionDetector = new CollisionDetector(
      this.ball,
      this.paddle,
      this.stage
    );
  }

  private discountLife() {
    this.status.life -= 1;
  }
}
