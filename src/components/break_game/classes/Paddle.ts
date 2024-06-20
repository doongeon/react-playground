import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  PADDLE_COLOR,
  PADDLE_HEIGHT,
  PADDLE_SPEED,
  PADDLE_WIDTH,
} from "./Contants";

export class Paddle {
  private ctx: CanvasRenderingContext2D;
  public size = { width: PADDLE_WIDTH, height: PADDLE_HEIGHT };
  public x = CANVAS_WIDTH / 2 - this.size.width / 2;
  public y = CANVAS_HEIGHT - 100;
  public color = PADDLE_COLOR;
  public speed = PADDLE_SPEED;
  public prevX = this.x;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  public moveRight() {
    if (this.x + this.size.width >= CANVAS_WIDTH) return;
    this.prevX = this.x;
    this.x += PADDLE_SPEED;
  }

  public moveLeft() {
    if (this.x <= 0) return;
    this.prevX = this.x;
    this.x -= PADDLE_SPEED;
  }

  public draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.size.width, this.size.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}
