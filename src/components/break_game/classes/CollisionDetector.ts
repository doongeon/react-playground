import Ball from "./Ball";
import { Paddle } from "./Paddle";
import { Stage } from "./Stage";
import { BALL_SPEED, CANVAS_HEIGHT, MAX_BALL_DX } from "./Contants";
import BeepSound from "./BeepSound";
import { Brick } from "./Brick";

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
      this.setBallMovementOnHitPaddle();

      return true;
    }

    return false;
  }

  private setBallMovementOnHitPaddle() {
    const normalizedCollisionPosition =
      (this.ball.x - this.paddle.x - this.paddle.size.width / 2) /
      (this.paddle.size.width / 2);

    let newDx = this.ball.dx + this.ball.dy * normalizedCollisionPosition;
    if (Math.abs(newDx) > MAX_BALL_DX)
      newDx = (MAX_BALL_DX * Math.abs(newDx)) / newDx;
    const newDy = Math.sqrt(BALL_SPEED * BALL_SPEED - newDx * newDx);

    // console.log("new dx:  " + newDx);
    // console.log("new dy : " + newDy);

    this.ball.dx = newDx;
    this.ball.dy = -newDy;

    this.ball.y = this.paddle.y - this.ball.size.radius;
  }

  private detectBrickCollision() {
    let collision = false;

    for (let i = 0; i < this.stage.rowCount; i++) {
      for (let j = 0; j < this.stage.columnCount; j++) {
        const brick = this.stage.bricks[i][j];
        if (!this.stage.bricks[i][j]) continue;
        if (brick.cracked) continue;
        if (
          this.ball.x + this.ball.size.radius > brick.x &&
          this.ball.x - this.ball.size.radius < brick.x + brick.size.width &&
          this.ball.y - this.ball.size.radius < brick.y + brick.size.height &&
          this.ball.y + this.ball.size.radius > brick.y
        ) {
          this.setBallMovementOnHitBrick(brick);
          this.beepSound.beep();
          brick.cracked = true;
          collision = true;
        }
      }
    }

    return collision;
  }

  private setBallMovementOnHitBrick(brick: Brick) {
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

      // avoid ball sticking
      if (overlapLeft < overlapRight) {
        this.ball.x = brick.x - this.ball.size.radius;
      } else {
        this.ball.x = brick.x + brick.size.width + this.ball.size.radius;
      }
    } else {
      // Vertical collision
      this.ball.dy = -this.ball.dy;

      // avoid ball sticking
      if (overlapTop < overlapBottom) {
        this.ball.y = brick.y - this.ball.size.radius;
      } else {
        this.ball.y = brick.y + brick.size.height + this.ball.size.radius;
      }
    }
  }

  public detectBallFalldown() {
    if (this.ball.y - this.ball.size.radius > CANVAS_HEIGHT) {
      this.ball.fixOnPaddle();
      return true;
    }
    return false;
  }
}
