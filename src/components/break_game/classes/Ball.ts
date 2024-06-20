import { Paddle } from "./Paddle";
import {
  BALL_COLOR,
  BALL_RADIUS,
  BALL_SPEED,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
} from "./Contants";

export default class Ball {
  private ctx: CanvasRenderingContext2D;
  public dx = 0;
  public dy = BALL_SPEED;
  public size = { radius: BALL_RADIUS };
  public x = CANVAS_WIDTH / 2;
  public y = CANVAS_HEIGHT / 2;
  public color = BALL_COLOR;
  public status = {
    fixed: true,
  };
  public paddle: Paddle;

  constructor(ctx: CanvasRenderingContext2D, paddle: Paddle) {
    this.ctx = ctx;
    this.paddle = paddle;
  }

  public draw() {
    if (this.status.fixed) {
      this.fixOnPaddle();
    }

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();

    this.handleWallCollision();
    this.setNextPosition();
  }

  public fixOnPaddle() {
    this.status.fixed = true;
    this.stop();
    this.x = this.paddle.x + this.paddle.size.width / 2;
    this.y = this.paddle.y - this.size.radius - 10;
  }

  public shoot() {
    this.status.fixed = false;
    this.dy = -BALL_SPEED;
  }

  private handleWallCollision() {
    // when the ball hits left or right
    if (
      this.x + this.size.radius >= CANVAS_WIDTH ||
      this.x - this.size.radius <= 0
    ) {
      this.dx = -this.dx;
    }

    // when the ball hits the top
    if (this.y - this.size.radius <= 0) this.dy = -this.dy;
  }

  private setNextPosition() {
    this.x += this.dx;
    this.y += this.dy;
  }

  public stop() {
    this.dx = 0;
    this.dy = 0;
  }
}
