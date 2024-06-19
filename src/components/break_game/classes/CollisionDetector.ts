import Ball from "./Ball";
import { Paddle } from "./Paddle";
import { Stage } from "./Stage";
import { BALL_SPEED, CANVAS_HEIGHT } from "./Contants";
import BeepSound from "./BeepSound";

export class CollisionDetector {
  private beepSound = new BeepSound(400);
  public ball: Ball;
  public paddle: Paddle;
  public stage: Stage;

  constructor(ball: Ball, paddle: Paddle, stage: Stage) {
    this.ball = ball;
    this.paddle = paddle;
    this.stage = stage;
  }

  public detect() {
    return {
      paddle: this.detectPaddleCollision(),
      brick: this.detectBrickCollision(),
      falldown: this.detectBallFalldown(),
    };
  }

  private detectPaddleCollision() {
    const paddleLeftEdge = this.paddle.x;
    const paddleRightEdge = this.paddle.x + this.paddle.size.width;

    if (
      this.ball.x + this.ball.size.radius >= paddleLeftEdge &&
      this.ball.x - this.ball.size.radius <= paddleRightEdge &&
      this.ball.y + this.ball.size.radius >= this.paddle.y &&
      this.ball.y - this.ball.size.radius <=
        this.paddle.y + this.paddle.size.height
    ) {
      const collisionPoint = this.ball.x - this.paddle.x;

      const normalizedCollisionPoint =
        (collisionPoint / this.paddle.size.width) * 2 - 1;

      const angle = normalizedCollisionPoint * (Math.PI / 4);

      let newSpeed = BALL_SPEED;
      if (
        Math.abs(this.ball.dx) > BALL_SPEED ||
        Math.abs(this.ball.dy) > BALL_SPEED
      ) {
        newSpeed = Math.min(Math.abs(this.ball.dx), Math.abs(this.ball.dy));
      }

      this.ball.dx = newSpeed * Math.sin(angle);
      this.ball.dy = -newSpeed * Math.cos(angle);

      const paddleMoveVector = this.paddle.getPaddleMoveVector();
      this.ball.dx += paddleMoveVector * this.paddle.speed;

      this.ball.y = this.paddle.y - this.ball.size.radius;

      return true;
    }

    return false;
  }

  private detectBrickCollision() {
    let collision = false;

    for (let i = 0; i < this.stage.brickRowCount; i++) {
      for (let j = 0; j < this.stage.brickColumnCount; j++) {
        const brick = this.stage.bricks[i][j];
        if (!this.stage.bricks[i][j]) continue;
        if (brick.cracked) continue;
        if (
          this.ball.x + this.ball.size.radius > brick.x &&
          this.ball.x - this.ball.size.radius < brick.x + brick.size.width &&
          this.ball.y - this.ball.size.radius < brick.y + brick.size.height &&
          this.ball.y + this.ball.size.radius > brick.y
        ) {
          const overlapLeft = this.ball.x + this.ball.size.radius - brick.x;
          const overlapRight =
            brick.x + brick.size.width - (this.ball.x - this.ball.size.radius);
          const overlapTop = this.ball.y + this.ball.size.radius - brick.y;
          const overlapBottom =
            brick.y + brick.size.height - (this.ball.y - this.ball.size.radius);

          const minOverlapX = Math.min(overlapLeft, overlapRight);
          const minOverlapY = Math.min(overlapTop, overlapBottom);

          if (minOverlapX < minOverlapY) {
            // Horizontal collision
            this.ball.dx = -this.ball.dx;
            // Adjust this.ball position to prevent sticking
            if (overlapLeft < overlapRight) {
              this.ball.x = brick.x - this.ball.size.radius; // Move this.ball to the left
            } else {
              this.ball.x = brick.x + brick.size.width + this.ball.size.radius; // Move this.ball to the right
            }
          } else {
            // Vertical collision
            this.ball.dy = -this.ball.dy;
            // Adjust this.ball position to prevent sticking
            if (overlapTop < overlapBottom) {
              this.ball.y = brick.y - this.ball.size.radius; // Move this.ball above
            } else {
              this.ball.y = brick.y + brick.size.height + this.ball.size.radius; // Move ball below
            }
          }

          this.beepSound.beep();
          brick.cracked = true;
          collision = true;
        }
      }
    }

    return collision;
  }

  public detectBallFalldown() {
    if (this.ball.y - this.ball.size.radius > CANVAS_HEIGHT) {
      this.ball.fixOnPaddle();
      return true;
    }
    return false;
  }
}
