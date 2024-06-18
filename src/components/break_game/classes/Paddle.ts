import { CANVAS_HEIGHT, CANVAS_WIDTH, PADDLE_SPEED } from "./Contants";

export class Paddle {
  private ctx: CanvasRenderingContext2D;
  public size = { width: 150, height: 10 };
  public x = CANVAS_WIDTH / 2 - this.size.width / 2;
  public y = CANVAS_HEIGHT - 100;
  public speed = PADDLE_SPEED;
  public color = "white";
  public prevX = 0;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  public moveRight() {
    if (this.x + this.size.width >= CANVAS_WIDTH) return;
    this.x += PADDLE_SPEED;
  }

  public moveLeft() {
    if (this.x <= 0) return;
    this.x -= PADDLE_SPEED;
  }

  public draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.size.width, this.size.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  public getPaddleMoveVector() {
    const paddleMoveVector =
      (this.x - this.prevX) / (CANVAS_WIDTH - this.size.width);
    console.log("paddle move vector: " + paddleMoveVector);
    return paddleMoveVector;
  }
}
